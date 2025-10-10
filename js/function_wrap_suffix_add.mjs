import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_suffix_add(f_name, suffix) {
  let { unaliased } = await function_name_unalias(f_name);
  let f_name_wrapped = function_name_combine(unaliased, suffix);
  let v = await function_wrap(unaliased, f_name_wrapped);
  return v;
}
