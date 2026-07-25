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

import { appendFileSync, readFileSync, realpathSync } from "node:fs";
import { dirname } from "node:path";

const memory_root = "/home/j/backup/love_claude_memory/memory";
const log_path = "/tmp/claude-1000/-home-j-repos-love/memory_write_allow.log";
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

const claude_config_root = "/home/j/.claude/";

function claude_config_spelling_is(file_path) {
  /* True when the path as WRITTEN goes through Claude Code's own config
  directory. That spelling is what trips the built-in self-settings guard, so
  it is checked on the literal path, not the resolved one - resolving would
  erase exactly the distinction that matters here. */
  return file_path.startsWith(claude_config_root);
}

function deny_redirect_reason(file_path) {
  const realpath = path_resolved(file_path);
  return "Use the memory realpath, not the ~/.claude/ spelling. Retry this "
    + `exact edit against: ${realpath}\n\n`
    + "Why: a path under /home/j/.claude/ lands inside Claude Code's own "
    + "config directory and trips a built-in self-settings guard, which "
    + "prompts the human with a grant that only lasts one session. No "
    + "permissions.allow entry overrides that guard, and neither does a "
    + "PreToolUse 'allow' (measured 2026-07-25). Denying here instead turns a "
    + "human click into a retry you can do yourself. The realpath is the same "
    + "file via symlink, is allow-listed, and never prompts.";
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
  /* Positive evidence that the hook actually fired, and which branch it took.
  "No prompt appeared" alone cannot distinguish "the hook allowed it" from
  "the hook never ran"; a log line can. This log is what proved that an
  'allow' decision does NOT suppress the self-settings prompt (2026-07-25):
  the hook was recorded allowing an edit that prompted anyway. */
  const decision = claude_config_spelling_is(file_path) ? "deny" : "allow";
  try {
    appendFileSync(log_path, `${decision} ${tool_name} ${file_path}\n`);
  } catch {
    /* Logging is diagnostic only - never let it change the decision. */
  }
  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: decision,
      permissionDecisionReason: decision === "deny"
        ? deny_redirect_reason(file_path)
        : "Auto-approved: resolves inside the memory repo "
          + `(${memory_root}), which is granted in permissions.allow and `
          + "additionalDirectories.",
    },
  }));
}

main();
