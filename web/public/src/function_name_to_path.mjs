import { function_name_folder_to_path } from "../../../love/public/src/function_name_folder_to_path.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { functions_path } from "../../../love/public/src/functions_path.mjs";
import { error_json } from "./error_json.mjs";
export function function_name_to_path(f_name) {
  if (string_includes(f_name, ".")) {
    error_json({
      f_name,
    });
  }
  let folder = functions_path();
  let v = function_name_folder_to_path(f_name, folder);
  return v;
}
