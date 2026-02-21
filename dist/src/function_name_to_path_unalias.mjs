import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export async function function_name_to_path_unalias(f_name) {
  let u = await function_name_unalias(f_name);
  let unaliased = property_get(u, "unaliased");
  let result = await function_name_to_path_search(unaliased);
  let to = object_merge(u, result);
  return to;
}
