import { folder_user_storage_path } from "./folder_user_storage_path.mjs";
import { path_join } from "./path_join.mjs";
export function storage_function_folder_path(f_name) {
  "Where a function's own stored files sit, asked by the function's name rather than by the function.";
  "The name is the whole address, which is the fact everything else here turns on: nothing else points at that folder, so the folder is reachable only for as long as some function still answers to that word. Asking by name is what lets a rename move it - the function being renamed answers to the old name and the new one at different moments, and neither moment holds both.";
  let joined = path_join(["function", f_name]);
  let folder = folder_user_storage_path(joined);
  return folder;
}
