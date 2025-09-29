import { function_name_folder_to_path } from "../../../love/public/src/function_name_folder_to_path.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { functions_path } from "../../../love/public/src/functions_path.mjs";
export function function_name_to_path(f_name) {
  if (string_includes(f_name, ".")) {
    error();
  }
  let folder = functions_path();
  let v = function_name_folder_to_path(f_name, folder);
  return v;
}
