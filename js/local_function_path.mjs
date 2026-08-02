import { storage_function_path } from "./storage_function_path.mjs";
export function local_function_path(fn, file_name) {
  let joined = storage_function_path(fn.name, file_name);
  return joined;
}
