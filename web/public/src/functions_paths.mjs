import {functions_path} from "./functions_path.mjs";
import {folder_read} from "./folder_read.mjs";
export function functions_paths() {
  let result = folder_read(functions_path());
  return result;
}
