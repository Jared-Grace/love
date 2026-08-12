/* PreToolUse hook: while the commands-only switch is on, refuse the
file-writing tools and point at the named command that does the same edit.

Why this exists: a text edit sees only the bytes in front of it, so it cannot
follow a symbol into the files nobody opened, and it leaves nothing behind
that a later edit can reuse. A named transform edits the tree, moves every
caller with the definition, and is a unit the next Claude can find. The repo
already prefers one; this turns the preference into something that holds when
nobody is watching.

The setting is read off data/commands_only.json every time rather than cached,
so turning the switch takes effect on the very next tool call with nothing to
restart. A missing or unreadable file reads as off - a restriction that turns
itself on because a read failed would stop every Claude in the folder at once
with the reason nowhere on screen.

The path is spelled absolutely here because a hook runs with whatever working
directory it is handed. commands_only_hook_path_gate_run (in q) checks this
spelling against commands_only_path(), which is the one source. */

import { readFileSync, realpathSync } from "node:fs";
import { dirname } from "node:path";

const repo_root = "/home/j/repos/love";
const switch_path = `${repo_root}/data/commands_only.json`;

/* The places a draft is allowed to be written by hand. scripts/temp is
gitignored and runs sandboxed read-only, so nothing written there reaches
anybody until a named command promotes it; the memory folder holds prose notes
that no tree transform can touch, and it is a different repo besides. */
const drafting_roots = [
  `${repo_root}/scripts/temp`,
  "/home/j/backup/love_claude_memory",
  "/tmp/claude-1000",
];

const tools_writing = new Set(["Edit", "Write", "NotebookEdit", "MultiEdit"]);

function level_read() {
  try {
    const record = JSON.parse(readFileSync(switch_path, "utf8"));
    const level = record.level;
    return typeof level === "string" ? level : "off";
  } catch {
    return "off";
  }
}

function path_resolved(file_path) {
  /* A file about to be created does not exist yet, so resolving it throws;
  fall back to the folder that will hold it. Both answers are compared the
  same way, which is why the folder answer keeps its trailing separator. */
  try {
    return realpathSync(file_path);
  } catch {
    try {
      return `${realpathSync(dirname(file_path))}/`;
    } catch {
      return file_path;
    }
  }
}

function under_is(resolved, root) {
  return resolved === root || resolved.startsWith(`${root}/`);
}

function drafting_is(resolved) {
  return drafting_roots.some((root) => under_is(resolved, root));
}

function repo_javascript_is(resolved) {
  return under_is(resolved, `${repo_root}/js`) && resolved.endsWith(".mjs");
}

function denied_is(level, resolved) {
  if (drafting_is(resolved)) return false;
  if (!under_is(resolved, repo_root)) return false;
  if (level === "js") return repo_javascript_is(resolved);
  if (level === "files") return true;
  return false;
}

function deny_reason(level) {
  return `The commands-only switch is set to "${level}", so this repo is `
    + "changed by named commands rather than by the editing tools.\n\n"
    + "Find the command that makes this edit:\n"
    + "  node scripts/ai.mjs functions_search js_,<verb>\n"
    + "  node scripts/ai.mjs functions_prose_search <words>\n"
    + "  node scripts/ai.mjs functions_name_vocabulary 200\n\n"
    + "Apply it:\n"
    + "  node scripts/ai.mjs function_select_apply_args_auto <fn> <selector> "
    + "<selector_args> <transform> <transform_args>\n"
    + "  (the whole vocabulary is in notes/transforms.md - read it)\n\n"
    + "If nothing fits, the missing atom IS the work, and there is a way to "
    + "write one without turning the switch off:\n"
    + "  1. draft it with Write at scripts/temp/<name>.mjs - still allowed\n"
    + "  2. node scripts/ai.mjs function_new_from_temp <name>\n"
    + "That command refuses anything but one exported function named after "
    + "its own file, and refuses to overwrite a function that already exists, "
    + "so it can add an atom and can do nothing else.\n\n"
    + "Turning the switch off is the human's call, not yours - ask, and say "
    + "which edit could not be made as a command.";
}

function main() {
  let payload = null;
  try {
    payload = JSON.parse(readFileSync(0, "utf8"));
  } catch {
    return;
  }
  if (!tools_writing.has(payload.tool_name)) return;
  const level = level_read();
  if (level === "off") return;
  const file_path = (payload.tool_input || {}).file_path;
  if (typeof file_path !== "string" || file_path.length === 0) return;
  if (!denied_is(level, path_resolved(file_path))) return;
  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: deny_reason(level),
    },
  }));
}

main();
