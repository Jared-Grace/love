/* PreToolUse hook: allow a file tool the moment a rule granting it is written,
instead of at the next session start.

Why this exists: Claude Code's own permission engine reads the settings files
once, when the session starts. A rule added after that is inert until a
restart - the session that wrote the grant goes on asking the human for
exactly the thing it just granted. A hook has no such copy: it is a fresh
process on every tool call, so it reads the settings as they are now, and a
hook answering "allow" settles the call before the engine is consulted at all.
That is already how a new `node scripts/ai.mjs <fn>` grant goes live at once -
the python bash guard reads the same files the same way. This is the same
mechanism aimed at the file tools, which had nothing fronting them.

What it does NOT do is re-implement the engine. Which rules count is decided
by permission_rules_path_allowed_is, which accepts two shapes only - a whole
path written out, and a folder with a trailing deep glob - and answers no to
everything else. A no here is not a refusal: nothing is printed, and the
engine decides exactly as it did before. So the worst a gap costs is the
prompt that was going to happen anyway, while a wrong yes would cost a write
nobody granted. Everything below is arranged so that failure lands on the
first side: an unreadable settings file, an import that will not load, a path
that will not resolve, a shape that is not understood - each one falls through
to saying nothing.

Three places are stood aside from even when a rule covers them:

  - Claude Code's own config folder, where a built-in guard prompts the human
    whatever the settings say and whatever a hook answers (measured
    2026-07-25). Claiming to have settled that call would only be a lie.
  - anything the commands-only switch refuses, which is asked here rather than
    left to the sibling hook that refuses it. Two hooks answering one call is
    not a thing to reason about at the moment a write lands.
  - a path that is not already spelled plainly from the root of the disk, with
    no `..` and no doubled separator to unpick.

Both the path as written and the path it resolves to must be granted, so a
link inside a granted folder cannot carry a write out of it.

The repo folder is worked out from where this file itself sits, because a hook
runs with whatever working directory it is handed - the same reasoning, and
the same three-steps-up, as commands_only_write_deny.mjs beside it. */

import { readFileSync, realpathSync } from "node:fs";
import { dirname, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const hooks_folder = dirname(fileURLToPath(import.meta.url));
const repo_root = dirname(dirname(hooks_folder));
const home = homedir();
/* The three files the engine itself reads a rule out of, spelled from the root
so they mean the same thing whatever folder this was started in. */
const settings_paths = [
  `${home}/.claude/settings.json`,
  `${repo_root}/.claude/settings.json`,
  `${repo_root}/.claude/settings.local.json`,
];
const claude_config_root = `${home}/.claude/`;
const tools_writing = new Set(["Edit", "Write", "NotebookEdit", "MultiEdit"]);
const switch_path = `${repo_root}/data/commands_only.json`;

function rules_read() {
  /* Every allow rule across the three files. A file that will not read
  contributes nothing, which is the failing-quiet direction: it can only take
  a grant away, never invent one. */
  const rules = [];
  for (const path of settings_paths) {
    try {
      const data = JSON.parse(readFileSync(path, "utf8"));
      const allow = (data.permissions || {}).allow;
      if (Array.isArray(allow)) rules.push(...allow);
    } catch {
      /* absent, unreadable, or half-written: grants nothing. */
    }
  }
  return rules;
}

function path_resolved(file_path) {
  /* A file about to be created does not exist yet, so resolving it throws;
  fall back to resolving the folder that will hold it and putting the name
  back, so the answer is still a whole path and can be matched as one. */
  try {
    return realpathSync(file_path);
  } catch {
    try {
      const folder = realpathSync(dirname(file_path));
      return `${folder}/${file_path.split("/").pop()}`;
    } catch {
      return null;
    }
  }
}

function commands_only_level_read() {
  try {
    const record = JSON.parse(readFileSync(switch_path, "utf8"));
    return typeof record.level === "string" ? record.level : "off";
  } catch {
    return "off";
  }
}

async function repo_import(f_name) {
  const module = await import(`${repo_root}/js/${f_name}.mjs`);
  return module[f_name];
}

async function commands_only_refuses(tool_name, resolved) {
  /* Asked here as well as in the sibling hook that does the refusing, so this
  one never has to be right about how two answers to the same call combine.
  Anything that goes wrong reads as "refuses", which withholds the allow. */
  if (!tools_writing.has(tool_name)) return false;
  const level = commands_only_level_read();
  if (level === "off") return false;
  const prefix = `${repo_root}/`;
  if (!resolved.startsWith(prefix)) return false;
  const denied_is = await repo_import("commands_only_write_denied_is");
  return denied_is(level, resolved.slice(prefix.length));
}

async function main() {
  let payload = null;
  try {
    payload = JSON.parse(readFileSync(0, "utf8"));
  } catch {
    return;
  }
  const tool_name = payload.tool_name;
  const file_path = (payload.tool_input || {}).file_path;
  if (typeof file_path !== "string" || file_path.length === 0) return;
  if (!file_path.startsWith("/")) return;
  if (normalize(file_path) !== file_path) return;
  if (file_path.startsWith(claude_config_root)) return;
  const resolved = path_resolved(file_path);
  if (resolved === null) return;
  if (resolved.startsWith(claude_config_root)) return;
  try {
    const file_tools = await repo_import("permission_file_tools");
    if (!file_tools().includes(tool_name)) return;
    if (await commands_only_refuses(tool_name, resolved)) return;
    const allowed_is = await repo_import("permission_rules_path_allowed_is");
    const rules = rules_read();
    if (!allowed_is(rules, tool_name, file_path)) return;
    if (!allowed_is(rules, tool_name, resolved)) return;
  } catch {
    return;
  }
  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "allow",
      permissionDecisionReason:
        "Auto-approved: an allow rule in the settings files already grants "
        + `${tool_name} this path, on both its written and its resolved `
        + "spelling. Answered here rather than by the permission engine so "
        + "that a rule granted during this session works during this session.",
    },
  }));
}

main();
