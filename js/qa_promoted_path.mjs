import { data_folder } from "./data_folder.mjs";
import { path_join } from "./path_join.mjs";
export function qa_promoted_path() {
  "Where the note of which commit each app's waiting pieces were built out of is kept";
  "It sits in the repo and is committed, because the pieces it is about sit in the repo too. Whoever built them and whoever sends them are not the same person and often not at the same machine, so the note has to travel with the thing it describes or it says nothing to the one who needs it";
  "The file is deliberately NOT named after the function that reads it. A word here matching a function name is rewritten by the canonicalizing pass into a reference to that function, and the path then follows every later rename of it - while nothing renames the file already on disk, so the note is silently left behind and read back as empty";
  let folder = data_folder();
  let path = path_join([folder, "promoted_from.json"]);
  return path;
}
