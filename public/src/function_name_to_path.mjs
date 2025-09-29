import { function_name_folder_to_path } from "./function_name_folder_to_path.mjs";
import { string_includes } from "./string_includes.mjs";
import { error } from "./error.mjs";
import { functions_path } from "./functions_path.mjs";
export function function_name_to_path(f_name) {
  if (string_includes(f_name, ".")) {
    error();
  }
  let folder = functions_path();
  let v = function_name_folder_to_path(f_name, folder);
  return v;
}
