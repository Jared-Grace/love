import { data_folder } from "./data_folder.mjs";
import { path_join } from "./path_join.mjs";
export function firebase_prod_hashes_path() {
  "Where the record of what each app is serving right now is kept";
  "It sits in the repo and is committed, because what is being served is one fact about one place and every one of us is asking about the same place - so one of us writing it down is all of us knowing it, on whichever machine we happen to be sitting at";
  "What is kept is one short word per file rather than the file itself, so the whole record stays small enough to read at a glance and to compare without downloading anything";
  "The file is deliberately NOT named after the function that reads it. A word here matching a function name is rewritten by the canonicalizing pass into a reference to that function, and the path then follows every later rename of it - while nothing renames the file already on disk, so the record is silently left behind and read back as empty.";
  let folder = data_folder();
  let path = path_join([folder, "prod_live_hashes.json"]);
  return path;
}
