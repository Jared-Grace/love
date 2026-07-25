/* PreToolUse hook: auto-allow Read/Edit/Write inside the memory repo.

Why this exists: the memory dir is a symlink
  ~/.claude/projects/-home-j-repos-love/memory -> /home/j/backup/love_claude_memory/memory
and the ~/.claude/... spelling lands inside Claude Code's own config
directory, which trips a BUILT-IN self-settings guard ("allow Claude to edit
its own settings for this session"). No permissions.allow entry overrides
that guard and the grant it offers dies with the session, so the human gets
re-prompted forever. This hook tests whether a PreToolUse "allow" decision
short-circuits it.

The check is on the RESOLVED path, so both spellings are covered by one rule
-- that is the whole point of resolving rather than string-matching. Anything
outside the memory repo gets no output at all (exit 0, empty), which leaves
the decision to the normal permission engine. */

import { readFileSync, realpathSync } from "node:fs";
import { dirname } from "node:path";

const memory_root = "/home/j/backup/love_claude_memory/memory";
const tools_allowed = new Set(["Read", "Edit", "Write", "NotebookEdit", "MultiEdit"]);

function path_resolved(file_path) {
  /* A brand-new memory file does not exist yet, so realpath of the file
  itself throws; fall back to resolving the directory that will hold it. */
  try {
    return realpathSync(file_path);
  } catch {
    try {
      return `${realpathSync(dirname(file_path))}/`;
    } catch {
      return null;
    }
  }
}

function is_under_memory(file_path) {
  if (typeof file_path !== "string" || file_path.length === 0) return false;
  const resolved = path_resolved(file_path);
  if (resolved === null) return false;
  return resolved === memory_root || resolved.startsWith(`${memory_root}/`);
}

function main() {
  let payload = null;
  try {
    payload = JSON.parse(readFileSync(0, "utf8"));
  } catch {
    return;
  }
  const tool_name = payload.tool_name;
  if (!tools_allowed.has(tool_name)) return;
  const file_path = (payload.tool_input || {}).file_path;
  if (!is_under_memory(file_path)) return;
  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "allow",
      permissionDecisionReason:
        "Auto-approved: resolves inside the memory repo (/home/j/backup/love_claude_memory/memory), "
        + "which is granted in permissions.allow and additionalDirectories under both spellings.",
    },
  }));
}

main();
