import { local_function_folder } from "./local_function_folder.mjs";
import { path_join } from "./path_join.mjs";
export function local_function_path(fn, file_name) {
  let joined = storage_function_path(fn.name, file_name);
  return joined;
}
