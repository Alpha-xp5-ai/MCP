/**
 * UnrealClaude MCP Bridge
 * Proxies MCP stdio protocol (from Claude CLI) to the Unreal Engine 4.27 HTTP server
 * UE4 HTTP server runs on localhost:3000 with routes:
 *   GET  /mcp/tools        - list all tools
 *   POST /mcp/tool/{name}  - execute tool (body = flat JSON params)
 *   GET  /mcp/status       - server status
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// ─── Config ──────────────────────────────────────────────────────────────────

// Force IPv4 — Node 18+ fetch() resolves "localhost" to ::1 but UE4's HTTP server
// only listens on IPv4, so localhost would silently fail with "fetch failed".
const RAW_URL = (process.env.UNREAL_MCP_URL || "http://127.0.0.1:3000").replace(/\/$/, "");
const UNREAL_URL = RAW_URL.replace(/\/\/localhost(?=[:/]|$)/, "//127.0.0.1");
const RETRY_ATTEMPTS = 3;
const RETRY_DELAY_MS = 1000;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function log(msg) {
  process.stderr.write(`[UE5-Claude-mcp] ${msg}\n`);
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, options = {}, attempts = RETRY_ATTEMPTS) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, options);
      return res;
    } catch (e) {
      if (i < attempts - 1) {
        log(`Fetch failed (attempt ${i + 1}/${attempts}): ${e.message}. Retrying...`);
        await sleep(RETRY_DELAY_MS);
      } else {
        throw e;
      }
    }
  }
}

// ─── UE4 API calls ───────────────────────────────────────────────────────────

async function getUnrealTools() {
  try {
    const res = await fetchWithRetry(`${UNREAL_URL}/mcp/tools`);
    if (!res.ok) {
      log(`/mcp/tools returned HTTP ${res.status}`);
      return [];
    }
    const data = await res.json();
    return data.tools || [];
  } catch (e) {
    log(`Cannot reach UE4 server at ${UNREAL_URL}: ${e.message}`);
    log(`Make sure the PluginCore project is open in UE4.27 editor with UnrealClaude plugin enabled.`);
    return [];
  }
}

async function executeUnrealTool(name, params) {
  const url = `${UNREAL_URL}/mcp/tool/${encodeURIComponent(name)}`;
  const res = await fetchWithRetry(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params || {}),
  });

  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Non-JSON response (HTTP ${res.status}): ${text.slice(0, 200)}`);
  }

  if (!res.ok && json.success === undefined) {
    throw new Error(`HTTP ${res.status}: ${json.errorMessage || text}`);
  }
  return json;
}

// ─── Schema conversion ───────────────────────────────────────────────────────

function ue4TypeToJsonSchema(ue4Type) {
  const t = (ue4Type || "string").toLowerCase();
  if (t === "number" || t === "integer" || t === "float" || t === "double" || t === "int") {
    return "number";
  }
  if (t === "boolean" || t === "bool") {
    return "boolean";
  }
  if (t === "array") {
    return "array";
  }
  if (t === "object") {
    return "object";
  }
  return "string";
}

function buildInputSchema(parameters) {
  const properties = {};
  const required = [];

  for (const p of (parameters || [])) {
    const schemaType = ue4TypeToJsonSchema(p.type);
    const propDef = {
      description: p.description || "",
      type: schemaType,
    };
    if (p.defaultValue !== undefined && p.defaultValue !== null && p.defaultValue !== "") {
      propDef.default = p.defaultValue;
    }
    properties[p.name] = propDef;
    if (p.required) required.push(p.name);
  }

  return {
    type: "object",
    properties,
    ...(required.length > 0 ? { required } : {}),
  };
}

// ─── MCP Server ──────────────────────────────────────────────────────────────

const server = new Server(
  { name: "unrealclaude", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

// List tools — fetches live from UE4 each time so new tools appear without restart
server.setRequestHandler(ListToolsRequestSchema, async () => {
  const tools = await getUnrealTools();
  log(`Listing ${tools.length} tools from UE4`);
  return {
    tools: tools.map(t => ({
      name: t.name,
      description: t.description || `Unreal Engine tool: ${t.name}`,
      inputSchema: buildInputSchema(t.parameters),
    })),
  };
});

// Call tool — forward to UE4 HTTP server
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  log(`Calling tool: ${name}`);

  try {
    const result = await executeUnrealTool(name, args || {});

    // Build human-readable text output
    let text = "";
    if (result.message) text += result.message;
    if (result.data) {
      text += (text ? "\n\n" : "") + JSON.stringify(result.data, null, 2);
    }
    if (!text) {
      text = JSON.stringify(result, null, 2);
    }

    const isError = result.success === false;
    if (isError) log(`Tool ${name} returned error: ${result.message}`);

    return {
      content: [{ type: "text", text }],
      isError,
    };
  } catch (e) {
    log(`Tool ${name} threw: ${e.message}`);
    return {
      content: [{ type: "text", text: `Error calling ${name}: ${e.message}` }],
      isError: true,
    };
  }
});

// ─── Start ───────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
log(`Ready — proxying MCP → ${UNREAL_URL}`);
