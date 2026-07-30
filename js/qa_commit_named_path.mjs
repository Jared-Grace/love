import { data_folder } from "./data_folder.mjs";
import { path_join } from "./path_join.mjs";
export function qa_commit_named_path() {
  "Where the record of which functions each red gate named, commit by commit, is kept";
  "It sits in the repo and is committed, because judging one commit costs a couple of minutes and the answer is the same for everyone who asks - so one of us paying it is all of us knowing.";
  "What is kept is the names and not the hundreds of lines that carried them. The names are what a later question needs, they are bounded where the printed reasons are not, and a fresh asking gives the same reasons again.";
  "The file is deliberately NOT named after the function that reads it, the same way its neighbour holding the plain verdicts is not. A word here that matches a function name is rewritten by the canonicalizing pass into a reference to that function, and the path then follows every later rename of it - while nothing renames the file already sitting on disk, so the whole record is silently left behind and read back as empty.";
  let folder = data_folder();
  let path = path_join([folder, "qa_gate_names.json"]);
  return path;
}
