import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function firebase_public_expected_path() {
  "Where the record of what each app is supposed to have waiting to be sent is kept";
  "It sits in the repo and is committed, because it says what was approved rather than what one machine happens to hold - and approving is done once for everybody, on whichever machine somebody was sitting at.";
  "This is a different question from what is being served, and the two are deliberately kept apart. Between an app being promoted and the site going out they disagree, and that disagreement is the whole answer to 'what would this sending change'. One record holding both meanings could only ever answer one of them.";
  "What is kept is one short word per file rather than the file itself, so the record stays small enough to read at a glance and to compare without reading a single page back.";
  "The file is deliberately NOT named after the function that reads it. A word here matching a function name is rewritten by the canonicalizing pass into a reference to that function, and the path then follows every later rename of it - while nothing renames the file already on disk, so the record is silently left behind and read back as empty.";
  let folder = findings_folder();
  let path = path_join([folder, "public_expected_bytes.json"]);
  return path;
}
