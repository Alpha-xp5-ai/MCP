# UE5-Claude-mcp — Pre-built MCP Bridge

Node.js MCP stdio bridge for **ClaudeProMCP** (Unreal Engine 4.27 – UE 5.0+).

This folder is the **pre-built release** — `node_modules` is already included so you
do **not** need to run `npm install`.

---

## Installation

1. Download or clone this folder.
2. Copy the entire `UE5-Claude-mcp` folder into your plugin resources:

```
YourProject/
  Plugins/
    ClaudeProMCP/
      Resources/
        UE5-Claude-mcp/    ← place this folder here
          index.js
          package.json
          package-lock.json
          node_modules/
          README.md
```

3. Open your project in Unreal Editor — the plugin detects the bridge automatically.
4. Enter your Anthropic API key in **Tools → ClaudeProMCP → Settings**.

---

## Requirements

| Requirement | Version |
|---|---|
| Unreal Engine | 4.27 – UE 5.0+ |
| Node.js | v18.0 or newer |
| Claude CLI | `npm install -g @anthropic-ai/claude-code` |
| Anthropic API key | [console.anthropic.com](https://console.anthropic.com) |

> **Node.js** must still be installed on your machine — it is not bundled here.
> Download it from [nodejs.org](https://nodejs.org).

---

## Why is this a separate download?

The **Fab marketplace** prohibits `.cmd`, `.ps1`, and `.exe` files in plugin submissions.
The `node_modules` directory contains such files in its `.bin/` folder, so it cannot be
shipped through Fab. This GitHub release provides the pre-built bridge for users who
prefer not to run `npm install` themselves.

**Alternatively**, if you already have Node.js installed, you can build it yourself:

```bash
cd Plugins/ClaudeProMCP/Resources/UE5-Claude-mcp
npm install
```

---

## How it works

```
Unreal Editor
  └── ClaudeProMCP plugin (C++)
        └── HTTP server on localhost:3000
              ↑
        UE5-Claude-mcp/index.js   (this bridge)
              ↑  MCP stdio
        Claude CLI (@anthropic-ai/claude-code)
              ↑  HTTPS
        Anthropic API
```

The plugin writes a temporary MCP config to `Saved/ClaudeProMCP/mcp-config.json`
on each send, then launches the Claude CLI with `--mcp-config` pointing to this bridge.

---

## Links

- **Fab listing:** [ClaudeProMCP on Fab](https://www.fab.com/listings/ue/ClaudeProMCP)
- **Documentation:** [FAB_Documentation.html](https://alpha-xp5-ai.github.io/MCP/ClaudeProMCP/FAB_Documentation.html)
- **Discord:** [discord.gg/Cgaa9CdtyF](https://discord.gg/Cgaa9CdtyF)
- **YouTube:** [youtube.com/@alpha_xp0](https://www.youtube.com/@alpha_xp0)

---

*Copyright Alpha XP 2026. All Rights Reserved.*
