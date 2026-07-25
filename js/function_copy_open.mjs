import { function_copy } from "./function_copy.mjs";
import { function_copy_result_open } from "./function_copy_result_open.mjs";
export async function function_copy_open(f_name_old, f_name_new) {
  let r = await function_copy(f_name_old, f_name_new);
  let name = await function_copy_result_open(r);
  return name;
}
