import { function_name_folder_to_path } from "./function_name_folder_to_path.mjs";
import { text_includes } from "./text_includes.mjs";
import { functions_path } from "./functions_path.mjs";
import { error_json } from "./error_json.mjs";
export function function_name_to_path_relative(f_name) {
  "Where a function's file would sit, worked out from its name alone, without asking whether anything is actually there.";
  if (text_includes(f_name, ".")) {
    error_json({
      f_name,
    });
  }
  let folder = functions_path();
  let f_path = function_name_folder_to_path(f_name, folder);
  return f_path;
}
