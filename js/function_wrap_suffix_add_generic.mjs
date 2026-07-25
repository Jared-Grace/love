import { function_wrap_open } from "./function_wrap_open.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
export async function function_wrap_suffix_add_generic(f_name, fn, suffix) {
  let unaliased = await function_name_unalias_only(f_name);
  let f_name_wrapped = fn(unaliased, suffix);
  let r = await function_wrap_open(unaliased, f_name_wrapped);
  return r;
}
