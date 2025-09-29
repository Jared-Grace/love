import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
export async function function_name_to_path_unalias(f_name) {
  let u = await function_name_unalias(f_name);
  let result = await function_name_to_path_search(unaliased);
  return result;let { unaliased }=u;om
}
