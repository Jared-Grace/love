import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function function_wrap_suffix_add_generic(f_name, fn, suffix) {
  let unaliased = await function_name_unalias_only(f_name);
  let f_name_wrapped = fn(unaliased, suffix);
  let r = await function_wrap(unaliased, f_name_wrapped);
  return r;
}
