import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function psalms_singing_gaps_path() {
  "Where the record of which verses of the Psalms have been sung and which are still waiting is kept.";
  "It sits beside the other findings rather than in the data folder, because it is a reading of how things stood when it was taken and not a thing the apps are built out of. The file is deliberately not named after any function here: a word that matches a function name is rewritten into a reference to that function by the canonicalizing pass, and the path would then follow every later rename while the file already written stayed where it was.";
  let folder = findings_folder();
  let path = path_join([folder, "psalms_singing_gaps.json"]);
  return path;
}
