import { qa_snapshot_folder_named } from "./qa_snapshot_folder_named.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function qa_build_folder() {
  "Where the frozen copy that apps are built inside sits";
  "It is deliberately not the copy that gets asked questions. Building writes files, and one of the questions asked over there is how big a built app came out - so a build landing in that copy would be answering that question with something half written. Two copies cost a tenth of a gigabyte of memory between them and remove the whole class of that";
  "The word naming it is held as plain writing rather than left to look like a name. A word here matching a function name is rewritten by the canonicalizing pass into a reference to that function, and the folder would then follow every later rename of it - while the folder already sitting on disk would not, so a copy would quietly be made afresh somewhere else every time";
  let copy_name = text_frozen("qa_build");
  let folder = qa_snapshot_folder_named(copy_name);
  return folder;
}
