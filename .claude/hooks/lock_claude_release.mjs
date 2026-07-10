// Stop hook. Signals this session's lock_claude_daemon.mjs holder (if
// any) to release the "function_run_prompt" lock, by deleting the
// sentinel file it polls for. See lock_claude_daemon.mjs for the
// protocol and lock_claude_acquire.mjs (PreToolUse hook) for the
// acquire side.
import fs from "node:fs";
import path from "node:path";

async function main() {
  let payload = "";
  for await (const chunk of process.stdin) {
    payload += chunk;
  }
  let sessionId = "unknown";
  try {
    sessionId = JSON.parse(payload).session_id || sessionId;
  } catch {
    // malformed/absent stdin - fall back to "unknown" bucket
  }

  const holdPath = path.join("/tmp/claude-code-lock-claude", sessionId, "hold");
  try {
    fs.unlinkSync(holdPath);
  } catch {
    // no holder for this session - nothing to release
  }
}

main().then(() => process.exit(0));
