import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { object_merge } from "./object_merge.mjs";
export async function function_name_to_path_unalias(f_name) {
  let u = await function_name_unalias(f_name);
  let { unaliased } = u;
  let result = await function_name_to_path_search(unaliased);
  let to = object_merge(u, result);
  return to;
}
