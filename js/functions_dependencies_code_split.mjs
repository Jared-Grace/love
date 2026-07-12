import { property_get } from "./property_get.mjs";
import { function_dependencies_code_multiple } from "./function_dependencies_code_multiple.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function functions_dependencies_code_split(split) {
  let waited = await list_map_unordered_async(
    split,
    function_name_unalias_only,
  );
  let v = await function_dependencies_code_multiple(waited);
  let code = property_get(v, "code");
  return code;
}
