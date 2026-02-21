import { function_wrap_suffix_add_generic } from "../../../love/public/src/function_wrap_suffix_add_generic.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
export async function function_wrap_suffix_add(f_name, suffix) {
  arguments_assert(arguments, 2);
  let fn = function_name_combine;
  let r = await function_wrap_suffix_add_generic(f_name, fn, suffix);
  return r;
}
