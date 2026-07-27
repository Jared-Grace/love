import { folder_memory } from "./folder_memory.mjs";
import { path_join } from "./path_join.mjs";
export function qa_tree_owners_folder() {
  "The folder the frozen copies sit in, one named for each asker.";
  "Its children are the thing worth naming: a copy belongs to whoever asked for it, and the only way to tell a copy still being read from one nobody will ever open again is to look at whose it is.";
  let memory = folder_memory();
  let folder = path_join([memory, "qa_tree"]);
  return folder;
}
