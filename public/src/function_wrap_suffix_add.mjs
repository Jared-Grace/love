import { function_wrap_suffix_add_generic } from "../../../love/public/src/function_wrap_suffix_add_generic.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
export async function function_wrap_suffix_add(f_name, suffix) {
  assert_arguments(arguments, 2);
  let fn = function_name_combine;
  let r = await function_wrap_suffix_add_generic(f_name, fn, suffix);
  return r;
}
