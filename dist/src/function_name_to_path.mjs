import { function_name_folder_to_path } from "../../../love/public/src/function_name_folder_to_path.mjs";
import { text_includes } from "../../../love/public/src/text_includes.mjs";
import { functions_path } from "../../../love/public/src/functions_path.mjs";
import { error_json } from "../../../love/public/src/error_json.mjs";
export function function_name_to_path(f_name) {
  if (text_includes(f_name, ".")) {
    error_json({
      f_name,
    });
  }
  let folder = functions_path();
  let f_path = function_name_folder_to_path(f_name, folder);
  return f_path;
}
