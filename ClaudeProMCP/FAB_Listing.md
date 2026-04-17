# ClaudeProMCP — AI Game Dev Studio for UE 4.27 – UE 5.0+

**Version:** 1.0.0 | **Engine:** UE 4.27 – UE 5.0+ | **Platforms:** Win64, Linux, Mac  
**Category:** Editor | **Created by:** Alpha XP  
**Discord:** discord.gg/Cgaa9CdtyF | **GitHub:** github.com/Alpha-xp5-ai | **YouTube:** youtube.com/@alpha_xp0

---

## Overview

**ClaudeProMCP** brings a full AI-powered game development assistant into the Unreal Engine 4.27 – UE 5.0+ editor. Chat with Claude directly from a docked panel, issue natural-language requests to create Blueprints, spawn actors, rig characters, build AI behaviour trees, set up foliage, edit materials, manage sequencer tracks, and much more — all through **53 live MCP editor tools** that modify your project in real time without leaving the editor.

No copy-pasting, no manual scripting. Just describe what you want, and Claude acts on it.

---

## Key Features

- **In-editor chat panel** — docked Slate UI with streamed responses, chat history, save/load sessions, and a focus-target field
- **53 live MCP tools** — Claude invokes these tools automatically to spawn, move, edit, and query editor objects
- **Real-time streaming** — responses stream token-by-token from the Claude CLI via NDJSON
- **Session persistence** — save full chat + context to JSON, restore on next open
- **Project context injection** — automatically summarises your source classes, asset types, and level actors so Claude understands your project
- **Script execution** — Claude can write and run Python/Blueprints editor scripts with permission prompts
- **Async task queue** — long operations run in the background and can be polled for status
- **Quick-start prompts** — click example prompts to get started immediately
- **Settings panel** — configure API key, model, permissions, allowed tools, and UI behaviour
- **Toolbar + Level Editor integration** — one-click access from the toolbar and Tools menu

---

## MCP Tool Categories & Full Tool List

### Actor & Level Editing (7 tools)
| Tool | What it does |
|------|-------------|
| `spawn_actor` | Spawn any UClass actor at a specified world location and rotation |
| `get_level_actors` | Query actors in the current level by class, label, or tag |
| `delete_actors` | Delete one or more actors by name or label |
| `move_actor` | Move/rotate/scale an actor by label or name |
| `set_property` | Set any reflected property on an actor or component |
| `open_level` | Open a level asset by package path |
| `level` | Create, duplicate, or manage level assets |

### Scripting & Console (3 tools)
| Tool | What it does |
|------|-------------|
| `run_console_command` | Execute an editor/game console command |
| `execute_script` | Write and run Python or Blueprint editor scripts |
| `cleanup_scripts` | Remove temporary generated script files |
| `get_script_history` | List recently executed scripts |
| `get_output_log` | Retrieve recent output log entries |

### Blueprint Tools (4 tools)
| Tool | What it does |
|------|-------------|
| `blueprint_query` | Read variables, functions, components, and event graphs from a Blueprint |
| `blueprint_modify` | Add/edit variables, functions, nodes, and connections in a Blueprint |
| `anim_blueprint_modify` | Edit Animation Blueprint state machines, states, and transitions |
| `widget_blueprint` | Create and modify UMG Widget Blueprint widget trees |

### Asset Management (5 tools)
| Tool | What it does |
|------|-------------|
| `asset_search` | Search the content browser by class, path, or name |
| `asset_dependencies` | List assets that a given asset depends on |
| `asset_referencers` | List assets that reference a given asset |
| `asset` | Create, duplicate, rename, or delete content browser assets |
| `file_system` | Read and write files within the project directory |

### Animation (6 tools)
| Tool | What it does |
|------|-------------|
| `blend_space` | Create and edit 1D/2D Blend Space animation assets |
| `anim_montage` | Create Animation Montages and add notify events |
| `morph_target` | Query and set morph target weights on Skeletal Meshes |
| `ik_setup` | Configure IK chains and IK Rig assets |
| `control_rig` | Build and modify Control Rig graphs |
| `physics_asset` | Create and edit Physics Asset bodies and constraints |

### Character (2 tools)
| Tool | What it does |
|------|-------------|
| `character` | Scaffold a Character Blueprint with movement, mesh, and camera |
| `character_data` | Read/write character stats: speed, jump height, health, etc. |

### World & Scene Editing (7 tools)
| Tool | What it does |
|------|-------------|
| `place_light` | Spawn Point, Spot, Directional, Rect, or Sky Light actors |
| `place_camera` | Place CameraActor with FOV, aspect ratio, and constraint settings |
| `place_decal` | Spawn DecalActor with material, size, and sort order |
| `set_world_settings` | Edit gravity, time dilation, kill Z, and world settings |
| `add_post_process_volume` | Create a Post Process Volume with bloom, DOF, exposure, and colour grading |
| `foliage_paint` | Paint foliage instances using a Foliage Type asset |
| `landscape_create` | Create a Landscape actor with a specified size and resolution |

### Input (2 tools)
| Tool | What it does |
|------|-------------|
| `enhanced_input` | Create Enhanced Input actions, mappings, and input modifier contexts |
| `input_mappings` | Read and write legacy UInputSettings axis/action mappings |

### Audio & Material (2 tools)
| Tool | What it does |
|------|-------------|
| `material` | Create or edit Material assets: nodes, parameters, blending modes |
| `sound_cue` | Create Sound Cue graphs with modulator, random, mixer, and attenuation nodes |

### Data Assets (2 tools)
| Tool | What it does |
|------|-------------|
| `data_table` | Create DataTable assets, define row structure, add/edit/delete rows |
| `curve_table` | Create CurveTable assets and add named float curves |

### AI (3 tools)
| Tool | What it does |
|------|-------------|
| `blackboard` | Create Blackboard assets and add typed keys |
| `behavior_tree` | Create Behavior Tree assets with Sequence/Selector/Task nodes |
| `nav_mesh_build` | Trigger a NavMesh rebuild on the current level |

### Sequencer (1 tool)
| Tool | What it does |
|------|-------------|
| `level_sequence` | Create Level Sequence assets, add actor bindings, and add transform tracks |

### Networking (1 tool)
| Tool | What it does |
|------|-------------|
| `replication_settings` | Set replication rules on actor and component properties |

### Utility (1 tool)
| Tool | What it does |
|------|-------------|
| `capture_viewport` | Capture the active viewport as a screenshot |

### Async Task Queue (5 tools)
| Tool | What it does |
|------|-------------|
| `task_submit` | Submit a long-running task to the background queue |
| `task_status` | Poll the status of a submitted task |
| `task_result` | Retrieve the result of a completed task |
| `task_list` | List all tasks (pending, running, completed) |
| `task_cancel` | Cancel a running or queued task |

---

## Requirements

- **Unreal Engine:** 4.27 – UE 5.0+
- **OS:** Windows 10/11 x64, Linux, macOS
- **Node.js:** v18.0 or newer (for the MCP bridge)
- **Claude CLI:** `npm install -g @anthropic-ai/claude-code` (free tier supported)
- **Anthropic API key:** Required (set once in plugin Settings)
- **Visual Studio 2019 or 2022** (Windows build)

---

## Quick Setup

1. Copy the `ClaudeProMCP` folder into your project's `Plugins/` directory
2. Open your project in UE 4.27 / UE 5.0+ — the plugin enables automatically
3. In the plugin Settings panel, enter your **Anthropic API key**
4. In the MCP bridge folder (`Plugins/ClaudeProMCP/Resources/mcp-bridge/`), run:
   ```
   npm install
   ```
5. Click **Tools → ClaudeProMCP** (or press **Ctrl+Shift+C**) to open the chat panel
6. Type a request — Claude connects to the MCP server automatically on first send

---

## Example Prompts

- *"Spawn a point light at the center of the level with warm orange color and intensity 5000"*
- *"Create a Blueprint Character with a SpringArm and Camera, set max walk speed to 600"*
- *"Build a simple Behavior Tree for a patrol AI: idle → patrol → chase → attack"*
- *"Add a Bloom and subtle Vignette to a Post Process Volume covering the whole level"*
- *"Create a DataTable with rows for 5 weapons: Name, Damage, FireRate, ReloadTime"*
- *"Paint dense grass foliage across the terrain using FoliageType_Grass"*
- *"Set up a Level Sequence that animates BP_Door opening over 2 seconds"*

---

## Technical Details

**Features:**
- In-editor Claude AI chat panel — native Unreal Engine docked tab with streamed NDJSON responses
- 53 live MCP (Model Context Protocol) editor tools — Claude invokes them automatically during conversation
- Actor spawning, movement, property editing, and deletion via dedicated tools
- Blueprint query and modify — variables, functions, event graphs, node connections, recompile
- Animation Blueprint state machine editing — states, transitions, animation asset binding
- UMG Widget Blueprint tree creation — Canvas Panels, Text Blocks, Buttons, Images, event binding
- Light placement — Point, Spot, Directional, Rect, Sky Light with intensity, colour, and shadow settings
- Camera, Decal, and Post Process Volume placement with full parameter control
- Complete Character Blueprint scaffolding — mesh, movement, spring arm, camera, anim class
- AI toolset — Blackboard (typed keys), Behavior Tree (Sequence/Selector/Task nodes), NavMesh rebuild
- Level Sequence creation with actor bindings and transform keyframe tracks
- Material graph building — expression nodes, parameters, output connections, blending modes
- Sound Cue graph creation — Modulator, Random, Mixer, Attenuator, Looping nodes
- DataTable and CurveTable asset creation and row management
- BlendSpace, AnimMontage, Physics Asset, Control Rig, and IK Setup tools
- Enhanced Input (IMC + actions) and legacy UInputSettings axis/action mapping
- Asset search, dependency graph querying, and referencer lookup
- Python/Blueprint editor script execution with safety permission dialogs
- Async background task queue — long operations run without blocking the editor, with status polling
- Session persistence — full chat history saved and restored as JSON
- Project context injection — source classes, asset types, and level actors summarised automatically
- Foliage painting and Landscape actor creation
- Viewport screenshot capture and Output Log querying
- Configurable API key, model, allowed tools, and permission mode in Settings panel
- Quick-start prompt templates on the welcome screen — click to send

**Code Modules:**
- ClaudeProMCP (Editor) — LoadingPhase: PostEngineInit

**Number of Blueprints:** 0 — pure C++ plugin

**Number of C++ Classes:** 90 (94 headers, 81 translation units)

**Network Replicated:** No — Editor-only plugin, no runtime gameplay code

**Supported Development Platforms:**
- Windows: Yes
- Mac: Yes
- Linux: Yes

**Supported Target Build Platforms:**
- Win64: Yes
- Mac: Yes
- Linux: Yes
- *(Editor-only module — automatically excluded from packaged/shipping builds, zero runtime overhead)*

**Documentation:** `Plugins/ClaudeProMCP/FAB_Documentation.html` — also at [github.com/Alpha-xp5-ai](https://github.com/Alpha-xp5-ai)

**Example Project:** Contact us on [Discord](https://discord.gg/Cgaa9CdtyF) for a sample project download link.

**Important/Additional Notes:**
- Requires **Node.js v18+** installed on the development machine — [nodejs.org](https://nodejs.org)
- Requires the **Claude CLI**: `npm install -g @anthropic-ai/claude-code`
- An **Anthropic API key** is required — enter it once in the plugin Settings panel (free tier supported, paid plan recommended for heavy use)
- Run `npm install` in `Plugins/ClaudeProMCP/Resources/mcp-bridge/` before first use
- Compatible with **UE 4.27 – UE 5.0+** — supports both UE4 and UE5 editor APIs
- `node_modules` is **not included** in the download (Fab policy prohibits executables). Run `npm install` once in `Plugins/ClaudeProMCP/Resources/mcp-bridge/` before first use
- Optional plugins: **EditorScriptingUtilities**, **EnhancedInput**, **ControlRig** — enable in Edit → Plugins for full tool coverage; all other tools work without them
- Editor module only — adds **zero overhead** to packaged/shipping builds

---

## Support

- **Discord:** discord.gg/Cgaa9CdtyF
- **GitHub Issues:** github.com/Alpha-xp5-ai
- **YouTube Tutorials:** youtube.com/@alpha_xp0

---

*Copyright Alpha XP 2026. All Rights Reserved.*
