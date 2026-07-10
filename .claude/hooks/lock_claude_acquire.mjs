// PreToolUse hook (matcher: Write|Edit). Ensures a lock_claude_daemon.mjs
// holder is running for this session and (best-effort, bounded) waits for
// it to actually hold the repo's "function_run_prompt" lock before
// returning - the same lock watch.mjs's regenerator checks via lock_try,
// so while this is held the watcher skips instead of racing Claude's
// edits. See lock_claude_daemon.mjs for the sentinel-file protocol and
// lock_claude_release.mjs (Stop hook) for the release side.
//
// Fails open: if the lock can't be confirmed within ACQUIRE_TIMEOUT_MS,
// this proceeds anyway rather than blocking the edit - no worse than
// before this coordination existed.
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const POLL_MS = 200;
const ACQUIRE_TIMEOUT_MS = 8000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

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

  const dir = path.join("/tmp/claude-code-lock-claude", sessionId);
  fs.mkdirSync(dir, { recursive: true });

  const holdPath = path.join(dir, "hold");
  const pidPath = path.join(dir, "holder.pid");
  const acquiredPath = path.join(dir, "acquired");

  fs.writeFileSync(holdPath, "");

  let holderRunning = false;
  if (fs.existsSync(pidPath)) {
    const pid = Number(fs.readFileSync(pidPath, "utf8").trim());
    holderRunning = Number.isInteger(pid) && isAlive(pid);
  }

  if (!holderRunning) {
    try {
      fs.unlinkSync(acquiredPath);
    } catch {
      // fine if it wasn't there
    }
    const daemonPath = path.join(path.dirname(new URL(import.meta.url).pathname), "lock_claude_daemon.mjs");
    const child = spawn(process.execPath, [daemonPath, dir], {
      detached: true,
      stdio: "ignore",
    });
    child.unref();
  }

  const deadline = Date.now() + ACQUIRE_TIMEOUT_MS;
  while (Date.now() < deadline) {
    if (fs.existsSync(acquiredPath)) {
      break;
    }
    await sleep(POLL_MS);
  }
}

main().then(() => process.exit(0));
