import { statSync } from "fs";
import { claude_edit_claim_path } from "./claude_edit_claim_path.mjs";
// Did Claude claim this exact file within the last few seconds?
//
// This is what lets watch auto-transform the HUMAN's saves immediately while
// still keeping its hands off a file Claude is actively editing. It replaced a
// repo-wide lock that Claude held for a whole session, which skipped every
// transform — including the human's own — until that session ended.
//
// The window has to outlast the gap between the PreToolUse hook firing and
// chokidar reporting the write, but stay short enough that the human editing the
// same file moments later is not mistaken for Claude.
const FRESH_MILLISECONDS = 3000;
export function claude_edit_claim_fresh_is(file_path) {
  let claim = claude_edit_claim_path(file_path);
  try {
    let stat = statSync(claim);
    let age = Date.now() - stat.mtimeMs;
    let fresh = age < FRESH_MILLISECONDS;
    return fresh;
  } catch (missing) {
    // No claim file at all is the common case: the human just saved.
    missing;
    return false;
  }
}
