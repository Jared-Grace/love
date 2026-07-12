import { list_map } from "./list_map.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { function_name_to_path_import_code_root } from "./function_name_to_path_import_code_root.mjs";
export async function function_name_to_path_import_code_root_multiple_map(
  imports,
) {
  let dictionary = await functions_names_to_paths();
  function function_name_to_path_import_code_root_multiple_map_result(import_) {
    let code = function_name_to_path_import_code_root(import_, dictionary);
    return code;
  }
  let mapped = list_map(
    imports,
    function_name_to_path_import_code_root_multiple_map_result,
  );
  return mapped;
}
