import { list_map } from "../../../love/public/src/list_map.mjs";
import { function_name_to_path_import_code_multiple } from "../../../love/public/src/function_name_to_path_import_code_multiple.mjs";
export async function function_name_to_path_import_code_multiple_map(imports) {
  let r = await function_name_to_path_import_code_multiple();
  let mapped = list_map(imports, r);
  return mapped;
}
