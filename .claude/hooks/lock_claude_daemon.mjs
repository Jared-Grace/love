// Detached background holder for the repo's "function_run_prompt" lock
// (public/src/lock_claude.mjs), spawned by lock_claude_acquire.mjs and
// signaled to release by lock_claude_release.mjs. Runs on its own,
// disowned from the Claude Code process, for the lifetime of one Claude
// "turn" (roughly - see the two hook scripts for the exact protocol).
//
// Protocol, all state under the sentinel directory passed as argv[2]:
//   hold      - presence = "keep holding". Deleted by the Stop hook to
//               signal release; this daemon polls for its absence.
//   holder.pid - this process's pid, so the PreToolUse hook can tell
//               whether a holder is already running before spawning
//               another one.
//   acquired  - created once the file lock is actually held, so the
//               PreToolUse hook can wait for real acquisition (bounded)
//               instead of racing ahead of it.
//
// Safety net if this process dies without releasing: lock_generic.mjs's
// underlying proper-lockfile call defaults to a 10s staleness timeout,
// so a truly orphaned lock self-heals in ~10s rather than hanging the
// watcher or REPL forever. MAX_LIFETIME_MS below is a second, generous
// backstop for the case where the 'hold' file is never removed at all
// (e.g. the Stop hook itself never fires for an entire session).
import fs from "node:fs";
import path from "node:path";

const POLL_MS = 300;
const MAX_LIFETIME_MS = 45 * 60 * 1000;

const dir = process.argv[2];
if (!dir) {
  console.error("lock_claude_daemon: missing sentinel dir argument");
  process.exit(1);
}

const holdPath = path.join(dir, "hold");
const pidPath = path.join(dir, "holder.pid");
const acquiredPath = path.join(dir, "acquired");

fs.writeFileSync(pidPath, String(process.pid));

function cleanupSentinels() {
  for (const p of [pidPath, acquiredPath]) {
    try {
      fs.unlinkSync(p);
    } catch {
      // already gone - fine
    }
  }
}

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..", "..");
const { lock_claude } = await import(
  path.join(repoRoot, "public/src/lock_claude.mjs")
);

const claudeLock = await lock_claude();
await claudeLock.on_lock;
fs.writeFileSync(acquiredPath, "");

const startedAt = Date.now();
const timer = setInterval(() => {
  const expired = Date.now() - startedAt > MAX_LIFETIME_MS;
  const stillHeld = fs.existsSync(holdPath);
  if (stillHeld && !expired) {
    return;
  }
  clearInterval(timer);
  claudeLock.on_finish_resolve();
  cleanupSentinels();
  process.exit(0);
}, POLL_MS);
