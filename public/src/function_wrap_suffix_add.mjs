import { function_name_unalias } from "./function_name_unalias.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { function_wrap } from "./function_wrap.mjs";
export async function function_wrap_suffix_add(f_name, suffix) {
  f_name = await function_name_unalias(f_name);
  return await function_wrap(f_name, function_name_combine(f_name, suffix));
}
