import { function_name_to_path } from "./function_name_to_path.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
export async function function_name_to_path_unalias(f_name) {
  f_name = await function_name_unalias(f_name);
    const f_path = function_name_to_path(f_name);
  return {f_path};
}
