[README.md](https://github.com/user-attachments/files/26839838/README.md)
<div align="center">

# ClaudeProMCP — AI Game Dev Studio

**Chat with Claude directly inside Unreal Engine to build, modify, and manage your project**

[![UE Version](https://img.shields.io/badge/Unreal%20Engine-4.27%20–%205.x-blue?style=flat-square&logo=unrealengine)](https://www.unrealengine.com)
[![Platform](https://img.shields.io/badge/Platform-Win64%20%7C%20Linux%20%7C%20Mac-lightgrey?style=flat-square)](https://github.com/Alpha-xp5-ai)
[![Version](https://img.shields.io/badge/Version-1.0.0-green?style=flat-square)](https://github.com/Alpha-xp5-ai)
[![License](https://img.shields.io/badge/License-Commercial-orange?style=flat-square)](https://www.fab.com)
[![Node](https://img.shields.io/badge/Node.js-v18%2B-brightgreen?style=flat-square&logo=node.js)](https://nodejs.org)
[![Discord](https://img.shields.io/badge/Discord-Join-7289da?style=flat-square&logo=discord)](https://discord.gg/Cgaa9CdtyF)

[📖 Documentation](https://alpha-xp5-ai.github.io/MCP/ClaudeProMCP/FAB_Documentation.html) · [🛒 Fab Marketplace](https://www.fab.com/listings/18d60083-a11a-45ee-a193-edc352d45cbd) · [💬 Discord](https://discord.gg/Cgaa9CdtyF) · [▶ YouTube](https://www.youtube.com/@alpha_xp0)

</div>

---

## What is ClaudeProMCP?

**ClaudeProMCP** is an Unreal Engine editor plugin that brings Claude AI directly into your development workflow as a native docked panel. Describe what you want in plain English — Claude reasons about it and executes the task through **53 live MCP editor tools** that act on your project in real time, without you ever leaving the editor.

```
"Build a patrol AI: Blackboard with PatrolTarget key, Behavior Tree
 with Sequence → MoveTo, NavMesh-enabled Character Blueprint,
 then rebuild the NavMesh."
```

Claude does all of that in one request — spawning assets, wiring nodes, setting properties — while you watch the output stream live.

---

## Features

| Category | What Claude can do |
|---|---|
| **Blueprints** | Create, query, add variables / functions / nodes, wire connections, recompile |
| **Actors & Levels** | Spawn, move, scale, delete actors; set any UPROPERTY; open levels |
| **Animation** | BlendSpace, AnimMontage, AnimBP state machines, Physics Asset, Control Rig, IK Setup |
| **AI** | Blackboard keys, Behavior Trees, NavMesh rebuild |
| **Materials** | Create / edit material graphs, expression nodes, parameters, blend modes |
| **UI (UMG)** | Widget Blueprint tree — Canvas, Text, Buttons, Images, event binding |
| **Sequencer** | Level Sequences, actor bindings, transform keyframe tracks |
| **Lighting** | Point / Spot / Directional / Rect / Sky lights, Post Process Volumes |
| **Data** | DataTable, CurveTable — create, add/edit/delete rows, CSV/JSON import |
| **Audio** | Sound Cue graphs — Modulator, Random, Mixer, Attenuator nodes |
| **World** | Foliage painting, Landscape creation, world settings, camera & decal placement |
| **Input** | Enhanced Input (IMC + actions) and legacy UInputSettings mappings |
| **Networking** | Blueprint replication rules and net roles |
| **Assets** | Search, dependency graph, referencers, duplicate, rename, delete |
| **Scripts** | Python / Blueprint editor utility scripts with permission dialogs |
| **Character** | Full Character Blueprint scaffold — mesh, movement, spring arm, camera |

### Additional highlights

- **Streamed responses** — output appears token-by-token via NDJSON, no waiting
- **Session persistence** — save and restore full chat history as JSON
- **Project context injection** — plugin auto-summarises your source classes, asset types, and level actors so Claude understands your project without extra prompting
- **Async task queue** — long operations run in the background; Claude polls for completion without blocking the editor
- **Quick-start prompts** — click-to-send example prompts on the welcome screen
- **Settings panel** — API key, model selection, allowed tools, permission mode, context toggles

---

## Requirements

| Requirement | Details |
|---|---|
| **Unreal Engine** | 4.27 – UE 5.x (Win64, Linux, Mac) |
| **Node.js** | v18.0 or newer — [nodejs.org](https://nodejs.org) |
| **Claude CLI** | `npm install -g @anthropic-ai/claude-code` |
| **Anthropic API key** | [console.anthropic.com](https://console.anthropic.com) — free tier supported |
| **Visual Studio** | 2019 or 2022 with C++ workload (Windows) |
| **RAM** | 16 GB recommended |

---

## Installation

### Path 1 — Fab Marketplace (recommended)

1. Purchase **ClaudeProMCP** on [Fab](https://www.fab.com/listings/18d60083-a11a-45ee-a193-edc352d45cbd).
2. Install to your engine or copy the `ClaudeProMCP` folder into your project's `Plugins/` directory.
3. Follow the **[MCP Bridge Setup](#mcp-bridge-setup)** steps below.

### Path 2 — GitHub (this repo)

1. Clone or download this repository.
2. Copy the `ClaudeProMCP` folder into your project's `Plugins/` directory:

```
YourProject/
  Plugins/
    ClaudeProMCP/     ← place here
```

3. Right-click your `.uproject` → **Generate Visual Studio project files**.
4. Build in Visual Studio (or open the project in UE and click **Yes** to rebuild).
5. Follow the **[MCP Bridge Setup](#mcp-bridge-setup)** steps below.

---

## MCP Bridge Setup

> **Why is this needed?**
> Fab does not allow `.cmd` / `.ps1` executables in plugin submissions, so `node_modules`
> is not included in the Fab download. This one-time step installs the Node.js MCP bridge.

### Option A — Pre-built download (fastest, no npm required)

Download the pre-built `UE5-Claude-mcp` folder from the [Releases](https://github.com/Alpha-xp5-ai/ClaudeProMCP/releases) page and place it here:

```
Plugins/ClaudeProMCP/Resources/UE5-Claude-mcp/
```

The folder already contains `node_modules` — no further steps needed.

### Option B — Build from source (requires Node.js v18+)

```bash
cd Plugins/ClaudeProMCP/Resources/UE5-Claude-mcp
npm install
```

---

## First-Time Setup

1. Open your project in Unreal Editor.
2. Go to **Tools → ClaudeProMCP** (or press **Ctrl + Shift + C**).
3. Click **⚙ Settings** in the panel toolbar.
4. Enter your **Anthropic API key** in the Account tab.
5. Click **Save Settings** and close the panel.
6. Type a prompt and press **▶ Send** — the MCP bridge connects automatically.

> **Tip:** The MCP bridge writes a temporary config to `Saved/ClaudeProMCP/mcp-config.json`
> each time you send. If you see "cannot reach server", make sure the editor is open and the
> plugin is loaded (check Output Log for `MCP Server started on http://localhost:3000`).

---

## Example Prompts

```
Spawn a point light at the center of the level with warm orange color and intensity 5000
```
```
Create a Blueprint Character with SpringArm and Camera, set max walk speed to 600
```
```
Build a Behavior Tree for a patrol AI: idle → patrol → chase → attack
```
```
Add Bloom and subtle Vignette to a Post Process Volume covering the whole level
```
```
Create a DataTable with rows for 5 weapons: Name, Damage, FireRate, ReloadTime
```
```
Paint dense grass foliage across the terrain using FoliageType_Grass
```
```
Set up a Level Sequence that animates BP_Door opening over 2 seconds
```
```
Create a Blackboard with TargetActor (Object) and PatrolPoint (Vector) keys
```

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                  Unreal Editor                       │
│                                                      │
│  ┌─────────────────────────┐                        │
│  │   ClaudeProMCP Plugin   │                        │
│  │   (C++ Editor Module)   │                        │
│  │                         │                        │
│  │  ┌─────────────────┐   │                        │
│  │  │  Slate Chat UI  │   │                        │
│  │  └────────┬────────┘   │                        │
│  │           │             │                        │
│  │  ┌────────▼────────┐   │                        │
│  │  │  ClaudeRunner   │   │  launches               │
│  │  │  (NDJSON pipe)  │───┼──────────────┐         │
│  │  └─────────────────┘   │              │         │
│  │                         │              │         │
│  │  ┌─────────────────┐   │    ┌─────────▼───────┐ │
│  │  │  MCP HTTP Server│◄──┼────│  Claude CLI      │ │
│  │  │  localhost:3000 │   │    │  (stdio bridge)  │ │
│  │  │  53 tool routes │   │    └─────────┬───────┘ │
│  │  └─────────────────┘   │              │         │
│  └─────────────────────────┘              │         │
└───────────────────────────────────────────┼─────────┘
                                            │ HTTPS
                                    ┌───────▼───────┐
                                    │ Anthropic API  │
                                    └───────────────┘
```

The plugin runs an HTTP server at `localhost:3000` inside the editor process.
The Claude CLI connects through the Node.js MCP stdio bridge (`UE5-Claude-mcp/index.js`).
Claude receives the full tool schema, picks the right tools, and calls them via HTTP —
results stream back to the chat panel as NDJSON.

---

## MCP Tools Reference (53 tools)

<details>
<summary><strong>Actor & Level Editing (7)</strong></summary>

| Tool | Type | Description |
|---|---|---|
| `spawn_actor` | Modifying | Spawn any UClass actor at a world location and rotation |
| `get_level_actors` | Read-only | Query actors by class, label, or tag |
| `delete_actors` | Modifying | Delete actors by name or label |
| `move_actor` | Modifying | Set absolute location, rotation, and scale |
| `set_property` | Modifying | Set any UPROPERTY on an actor or component |
| `open_level` | Modifying | Load a level by package path |
| `level` | Modifying | Create, duplicate, or manage level assets |

</details>

<details>
<summary><strong>Scripting & Console (5)</strong></summary>

| Tool | Type | Description |
|---|---|---|
| `run_console_command` | Modifying | Execute any editor/game console command |
| `execute_script` | Async | Run Python or Blueprint editor utility scripts |
| `cleanup_scripts` | Modifying | Remove temporary generated script files |
| `get_script_history` | Read-only | List recently executed scripts |
| `get_output_log` | Read-only | Retrieve recent Output Log entries |

</details>

<details>
<summary><strong>Blueprint (4)</strong></summary>

| Tool | Type | Description |
|---|---|---|
| `blueprint_query` | Read-only | Read variables, functions, nodes, and event graphs |
| `blueprint_modify` | Modifying | Add/edit variables, functions, nodes, and connections |
| `anim_blueprint_modify` | Modifying | Edit AnimBP state machines and transitions |
| `widget_blueprint` | Modifying | Create/edit UMG Widget Blueprint widget trees |

</details>

<details>
<summary><strong>Asset Management (5)</strong></summary>

| Tool | Type | Description |
|---|---|---|
| `asset_search` | Read-only | Search content browser by class, path, or name |
| `asset_dependencies` | Read-only | List assets a given asset depends on |
| `asset_referencers` | Read-only | List assets that reference a given asset |
| `asset` | Modifying | Create, duplicate, rename, move, or delete assets |
| `file_system` | Modifying | Read/write project files and directories |

</details>

<details>
<summary><strong>Animation (6)</strong></summary>

| Tool | Type | Description |
|---|---|---|
| `blend_space` | Modifying | Create BlendSpace assets and add samples |
| `anim_montage` | Modifying | Create AnimMontages, add slots and sections |
| `morph_target` | Modifying | Query and set morph target weights |
| `ik_setup` | Modifying | Configure IK chains and virtual bones |
| `control_rig` | Modifying | Build Control Rig graphs and hierarchies |
| `physics_asset` | Modifying | Create Physics Asset bodies and constraints |

</details>

<details>
<summary><strong>World & Scene (7)</strong></summary>

| Tool | Type | Description |
|---|---|---|
| `place_light` | Modifying | Spawn Point, Spot, Directional, Rect, or Sky lights |
| `place_camera` | Modifying | Place CameraActor with FOV and aspect ratio |
| `place_decal` | Modifying | Spawn DecalActor with material and size |
| `set_world_settings` | Modifying | Edit gravity, time dilation, kill Z |
| `add_post_process_volume` | Modifying | Create PPV with bloom, DOF, exposure, colour grading |
| `foliage_paint` | Modifying | Paint foliage instances into the level |
| `landscape_create` | Modifying | Create a Landscape actor |

</details>

<details>
<summary><strong>Character (2) · Input (2) · Audio & Material (2) · Data Assets (2)</strong></summary>

| Tool | Description |
|---|---|
| `character` | Full Character Blueprint scaffold — mesh, movement, spring arm, camera |
| `character_data` | Read/write character stats (speed, jump, health) |
| `enhanced_input` | Create Input Mapping Contexts and actions |
| `input_mappings` | Read/write legacy UInputSettings axis/action mappings |
| `material` | Create/edit Material graphs and expression nodes |
| `sound_cue` | Build Sound Cue graphs with modulator and mixer nodes |
| `data_table` | Create DataTable assets and manage rows |
| `curve_table` | Create CurveTable assets and add float curves |

</details>

<details>
<summary><strong>AI (3) · Sequencer (1) · Networking (1) · Utility (1)</strong></summary>

| Tool | Description |
|---|---|
| `blackboard` | Create Blackboard assets and add typed keys |
| `behavior_tree` | Create Behavior Tree assets with composite and task nodes |
| `nav_mesh_build` | Trigger NavMesh rebuild on the current level |
| `level_sequence` | Create Level Sequences, add actor bindings and transform tracks |
| `replication_settings` | Set replication rules on actor and component properties |
| `capture_viewport` | Capture the active viewport as a screenshot |

</details>

<details>
<summary><strong>Async Task Queue (5)</strong></summary>

| Tool | Description |
|---|---|
| `task_submit` | Submit a long-running task to the background queue |
| `task_status` | Poll task status (pending / running / completed / failed) |
| `task_result` | Retrieve the result of a completed task |
| `task_list` | List all tasks and their statuses |
| `task_cancel` | Cancel a pending or running task |

</details>

---

## Optional Plugin Features

Three Unreal plugins are optional — enable them in **Edit → Plugins** for full coverage:

| Plugin | Unlocks |
|---|---|
| `EditorScriptingUtilities` | `asset` and `file_system` tools |
| `EnhancedInput` | `enhanced_input` tool |
| `ControlRig` | `control_rig` tool (experimental) |

All other 45 tools work without these plugins enabled.

---

## Troubleshooting

### MCP server not connecting / zero tools available
1. Confirm the editor is open and the plugin is loaded — check Output Log for:  
   `LogClaudeProMCP: MCP Server started on http://localhost:3000`
2. Open `http://localhost:3000/mcp/status` in a browser. If it responds, the server is running.
3. Confirm `node_modules` is installed in `Plugins/ClaudeProMCP/Resources/UE5-Claude-mcp/`.
4. Confirm Node.js is installed: run `node --version` in a terminal.

### Empty / no response from Claude
1. Verify Claude CLI is installed: `claude --version`
2. Check your API key in **Settings → Account**.
3. Test the Claude CLI directly from the project root directory.

### Plugin fails to compile
1. Close the editor and confirm no `UnrealEditor.exe` process remains.
2. Delete `Plugins/ClaudeProMCP/Binaries/` and `Plugins/ClaudeProMCP/Intermediate/`.
3. Right-click the `.uproject` → **Generate Visual Studio project files**, then rebuild.

> Filter the Output Log by `LogClaudeProMCP` to see all plugin activity.

---

## Project Structure

```
ClaudeProMCP/
├── Config/
│   └── FilterPlugin.ini          — Fab submission file filter
├── Doc/
│   ├── FAB_Documentation.html    — Full public documentation
│   └── FAB_Listing.md            — Fab marketplace listing text
├── Resources/
│   ├── UE5-Claude-mcp/           — Node.js MCP bridge (node_modules not shipped)
│   │   ├── index.js
│   │   ├── package.json
│   │   └── README.md
│   └── *.png                     — Plugin icons
├── Source/ClaudeProMCP/
│   ├── Public/                   — Public headers (interfaces, subsystem, types)
│   └── Private/
│       ├── Animation/            — Anim graph, state machine, transitions, factory
│       ├── Blueprint/            — BP editor, graph, loader, utilities
│       ├── Script/               — Script execution, session manager
│       ├── Utils/                — JSON, clipboard, project context
│       ├── MCP/                  — HTTP server, tool registry, task queue
│       │   └── Tools/            — 53 individual MCP tool implementations
│       └── UI/                   — Toolbar, input area, settings panel
└── ClaudeProMCP.uplugin
```

---

## Technical Details

| Property | Value |
|---|---|
| Plugin type | Editor module (PostEngineInit) — zero runtime overhead |
| Language | C++20 |
| UE versions | 4.27 – 5.x |
| Platforms | Win64, Linux, Mac |
| Blueprints | 0 — pure C++ |
| C++ classes | 90 (94 headers, 81 translation units) |
| Network replicated | No — Editor-only |
| MCP tools | 53 |

---

## Support & Community

| Channel | Link |
|---|---|
| 💬 Discord | [discord.gg/Cgaa9CdtyF](https://discord.gg/Cgaa9CdtyF) |
| 🐛 GitHub Issues | [github.com/Alpha-xp5-ai/issues](https://github.com/Alpha-xp5-ai) |
| 📖 Documentation | [FAB_Documentation.html](https://alpha-xp5-ai.github.io/MCP/ClaudeProMCP/FAB_Documentation.html) |
| 🛒 Fab Marketplace | [ClaudeProMCP on Fab](https://www.fab.com/listings/18d60083-a11a-45ee-a193-edc352d45cbd) |
| ▶ YouTube | [youtube.com/@alpha_xp0](https://www.youtube.com/@alpha_xp0) |

---

## License

This plugin is sold commercially on the [Fab marketplace](https://www.fab.com/listings/18d60083-a11a-45ee-a193-edc352d45cbd).  
The `UE5-Claude-mcp` bridge folder is distributed separately on GitHub for ease of installation.

See the [Fab Standard License](https://www.fab.com/eula) for terms of use.

---

<div align="center">

**Copyright © Alpha XP 2026. All Rights Reserved.**

Made with ☕ and way too many compiler errors.

</div>
