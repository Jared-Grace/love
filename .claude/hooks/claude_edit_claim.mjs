// PreToolUse hook (matcher: Write|Edit). Records that Claude is about to write
// a specific file, so js/watch.mjs can tell Claude's writes from the human's and
// skip only the former.
//
// This replaced lock_claude_acquire.mjs, which took the repo-wide
// "function_run_prompt" lock for the WHOLE session. watch checks that lock with
// lock_try (wait=false, "if the lock is already locked, then does not run"), so
// while any Claude session was open every auto-transform was dropped — including
// the human's own saves, which then had to be fixed up by running `ao` by hand.
// A per-path claim is the narrow version of the same guarantee.
//
// PreToolUse, never PostToolUse: the claim must be on disk BEFORE the write, or
// chokidar reports the change first and the claim loses the race.
//
// Fails open. If anything here throws, the edit still proceeds and the worst case
// is watch transforming a file Claude just wrote — noisy, not destructive.
import fs from "node:fs";
import path from "node:path";

async function main() {
  let payload = "";
  for await (const chunk of process.stdin) {
    payload += chunk;
  }
  let file_path = null;
  try {
    let parsed = JSON.parse(payload);
    file_path = parsed.tool_input && parsed.tool_input.file_path;
  } catch {
    // malformed/absent stdin - nothing to claim
  }
  if (!file_path) {
    return;
  }
  const repoRoot = "/home/j/repos/love";
  const { claude_edit_claim_path } = await import(
    path.join(repoRoot, "js/claude_edit_claim_path.mjs")
  );
  const claim = claude_edit_claim_path(file_path);
  fs.mkdirSync(path.dirname(claim), { recursive: true });
  fs.writeFileSync(claim, file_path);
}

main()
  .catch(() => {})
  .then(() => process.exit(0));
