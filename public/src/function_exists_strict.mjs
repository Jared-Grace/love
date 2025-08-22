import { function_exists_inner } from "./function_exists_inner.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
export async function function_exists_strict(f_name) {
  let u = await function_name_to_path_unalias(f_name);
  let e = await function_exists_inner(u);
  return e;
}
