import { qa_snapshot_folder_named } from "./qa_snapshot_folder_named.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function qa_snapshot_folder() {
  "Where the frozen copy that gets asked questions sits among the stand-in siblings";
  "It keeps the repo's own name, because the name of the folder is how the repo recognises itself and how every sibling path is spelled";
  "Its neighbour that apps are built inside is a different copy on purpose, since building writes files and one of the questions asked here is how big a built app came out";
  let copy_name = text_frozen("qa_snapshot");
  let folder = qa_snapshot_folder_named(copy_name);
  return folder;
}
