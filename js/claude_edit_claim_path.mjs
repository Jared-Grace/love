import path from "path";
import { path_join } from "./path_join.mjs";
import { text_combine } from "./text_combine.mjs";
// Where the claim marker for one edited source file lives.
//
// Shared deliberately: the PreToolUse hook WRITES this path before Claude edits a
// file, and watch READS it to decide whether a change event was Claude's or the
// human's. Two copies of this rule would drift silently into "watch transforms
// every file Claude touches" — the exact behaviour claims exist to prevent.
//
// /tmp rather than repo storage because a claim is worthless after a few seconds
// and must never be committed. The name is the base64url of the ABSOLUTE source
// path, so it is collision-free and needs no hashing.
const CLAIMS_FOLDER = "/tmp/claude-code-claims";
export function claude_edit_claim_path(file_path) {
  let absolute = path_resolve(file_path);
  let named = Buffer.from(absolute, "utf8").toString("base64url");
  let joined = path_join([CLAIMS_FOLDER, text_combine(named, ".claim")]);
  return joined;
}
