import { path_join } from "./path_join.mjs";
import { folder_user_storage_function_path_function } from "./folder_user_storage_function_path_function.mjs";
export function folder_user_storage_function_path(fn) {
  "The folder one function's remembered answers are kept in, named after the function itself so two functions can never share a store.";
  let p = folder_user_storage_function_path_function();
  let joined = path_join([p, fn.name]);
  return joined;
}
