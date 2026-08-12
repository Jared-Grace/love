/* PreToolUse hook: while the commands-only switch is on, refuse the
file-writing tools and point at the named command that makes the same edit.

Why the switch exists: a text edit sees only the bytes in front of it, so it
cannot follow a symbol into the files nobody opened, and it leaves nothing
behind that a later edit can reuse. A named transform edits the tree, moves
every caller with the definition, and is a unit the next Claude can find. The
repo already prefers one; this is what holds the preference when nobody is
watching.

Almost nothing is decided here. Which places are refused is
commands_only_write_denied_is, and what the refusal says is
commands_only_deny_reason, both of them plain functions with a corpus of cases
beside them - a decision written inside a hook cannot be asked anything,
because the only way to learn what a hook would say is to arrange to be
refused by it. What is left here is the part that genuinely belongs to a hook:
reading the message, resolving the path, and spelling it from the repo folder
down.

Everything is read fresh each time rather than cached, so turning the switch
takes effect on the very next tool call with nothing to restart.

Three things make it fail open - a switch file that will not read, an import
that will not load, a path that does not resolve. A restriction that turned
itself ON because a read failed would stop every Claude in the folder at once
with the reason nowhere on screen, and the repo it would be protecting is the
same repo whose breakage caused it.

The repo folder is spelled out here because a hook runs with whatever working
directory it is handed. commands_only_hook_path_gate_run (in q) checks this
file still spells the place the switch is kept. */

import { readFileSync, realpathSync } from "node:fs";
import { dirname } from "node:path";

const repo_root = "/home/j/repos/love";
const switch_path = `${repo_root}/data/commands_only.json`;
const tools_writing = new Set(["Edit", "Write", "NotebookEdit", "MultiEdit"]);

function level_read() {
  try {
    const record = JSON.parse(readFileSync(switch_path, "utf8"));
    return typeof record.level === "string" ? record.level : "off";
  } catch {
    return "off";
  }
}

function path_resolved(file_path) {
  /* A file about to be created does not exist yet, so resolving it throws;
  fall back to the folder that will hold it, keeping the separator so the
  answer still reads as a path into that folder. */
  try {
    return realpathSync(file_path);
  } catch {
    try {
      return `${realpathSync(dirname(file_path))}/${file_path.split("/").pop()}`;
    } catch {
      return null;
    }
  }
}

function repo_relative_or_null(file_path) {
  /* Null means "not this switch's business": somewhere outside the repo. The
  memory notes and the session scratch are both outside, so both keep working
  without either needing to be named as an exception. */
  const resolved = path_resolved(file_path);
  if (resolved === null) return null;
  const prefix = `${repo_root}/`;
  if (!resolved.startsWith(prefix)) return null;
  return resolved.slice(prefix.length);
}

async function repo_import(f_name) {
  const module = await import(`${repo_root}/js/${f_name}.mjs`);
  return module[f_name];
}

async function main() {
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
  const path = repo_relative_or_null(file_path);
  if (path === null) return;
  let reason = null;
  try {
    const denied_is = await repo_import("commands_only_write_denied_is");
    if (!denied_is(level, path)) return;
    const deny_reason = await repo_import("commands_only_deny_reason");
    reason = deny_reason(level);
  } catch {
    return;
  }
  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: reason,
    },
  }));
}

main();
