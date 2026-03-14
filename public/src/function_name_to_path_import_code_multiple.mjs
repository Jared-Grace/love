import { function_name_to_path_import_code_curried_right } from "../../../love/public/src/function_name_to_path_import_code_curried_right.mjs";
import { functions_names_to_paths } from "../../../love/public/src/functions_names_to_paths.mjs";
export async function function_name_to_path_import_code_multiple() {
  let dictionary = await functions_names_to_paths();
  let r = function_name_to_path_import_code_curried_right(dictionary);
  return r;
}
