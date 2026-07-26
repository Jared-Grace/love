import { fn_name } from "./fn_name.mjs";
import path from "path";
import { path_join } from "./path_join.mjs";
import { text_combine } from "./text_combine.mjs";
("Where the claim marker for one edited source file lives.");
("");
("Shared deliberately: the PreToolUse hook WRITES this path before Claude edits a");
("file, and watch READS it to decide whether a change event was Claude's or the");
("human's. Two copies of this rule would drift silently into \"watch transforms");
('every file Claude touches" — the exact behaviour claims exist to prevent.');
("");
("/tmp rather than repo storage because a claim is worthless after a few seconds");
("and must never be committed. The name is the base64url of the ABSOLUTE source");
("path, so it is collision-free and needs no hashing.");
let CLAIMS_FOLDER = "/tmp/claude-code-claims";
export function claude_edit_claim_path(file_path) {
  let f_name = fn_name("path_resolve");
  `node's path.resolve, not the repo's ${f_name}, because that wrapper is`;
  let f_name2 = fn_name("claude_edit_claim_fresh_is");
  `async — awaiting it would force this and ${f_name2} to be`;
  ("async too, for a pure string operation that watch calls on every change.");
  let absolute = path.resolve(file_path);
  let named = Buffer.from(absolute, "utf8").toString("base64url");
  let combined = text_combine(named, ".claim");
  let joined = path_join([CLAIMS_FOLDER, combined]);
  return joined;
}
