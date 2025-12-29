import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { function_dependencies_code } from "../../../love/public/src/function_dependencies_code.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
export async function function_dependencies_code_unaliased(f_names) {
  let v = await function_name_unalias(f_names);
  let unaliased = object_property_get(v, "unaliased");
  async function lambda(item) {}
  let waited = await list_map_unordered_async(list, lambda);
  let d = await function_dependencies_code(unaliased);
  let v2 = {
    d,
    unaliased,
  };
  return v2;
}
