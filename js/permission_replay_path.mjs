import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function permission_replay_path() {
  "Where the ranked shapes that still stop the human are kept, so the daily question is a file read rather than a quarter of an hour of transcript reading";
  "It sits beside the data folder, not inside it, for the reason its neighbour holding the judged commits gives: what is here is a record of the past, and the two sweeps that ask whether a name is still spoken for read the data folder, so a function this record ever named could never be deleted and a rename would rewrite what a past run actually said.";
  "The file is deliberately not named after the function that reads it. A word here matching a function name is rewritten by the canonicalizing pass into a reference to that function, and the path then follows every later rename of it, while nothing renames the file already on disk - so the whole record is silently left behind and read back as empty.";
  let folder = findings_folder();
  let path = path_join([folder, "prompts_ranked.json"]);
  return path;
}
