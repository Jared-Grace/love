import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_suffix_add(f_name, suffix) {
  assert_arguments(arguments, 2);
  let fn = function_name_combine;
  let unaliased = await function_name_unalias_only(f_name);
  let f_name_wrapped = fn(unaliased, suffix);
  let r = await function_wrap(unaliased, f_name_wrapped);
  return r;
}
