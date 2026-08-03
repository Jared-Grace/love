import { folder_user_storage_path } from "./folder_user_storage_path.mjs";
export function folder_user_storage_function_path_function() {
  "The folder outside this repo where one function's own working files are kept, such as the locks a command takes.";
  let p = folder_user_storage_path("function\\");
  return p;
}
