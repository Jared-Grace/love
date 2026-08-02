import { qa_build_copy_name } from "./qa_build_copy_name.mjs";
import { qa_snapshot_folder_named } from "./qa_snapshot_folder_named.mjs";
export function qa_build_folder() {
  "Where the frozen copy that apps are built inside sits";
  "It is deliberately not the copy that gets asked questions. Building writes files, and one of the questions asked over there is how big a built app came out - so a build landing in that copy would be answering that question with something half written. Two copies cost a tenth of a gigabyte of memory between them and remove the whole class of that";
  let copy_name = qa_build_copy_name();
  let folder = qa_snapshot_folder_named(copy_name);
  return folder;
}
