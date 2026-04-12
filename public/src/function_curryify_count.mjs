import { function_curryify_count_args_get_curried_right } from "../../../love/public/src/function_curryify_count_args_get_curried_right.mjs";
import { function_curryify_generic_name } from "../../../love/public/src/function_curryify_generic_name.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_curryify_generic_open } from "../../../love/public/src/function_curryify_generic_open.mjs";
export async function function_curryify_count(f_name, count) {
  arguments_assert(arguments, 2);
  count = integer_to(count);
  function lambda(unaliased) {
    let n = function_curryify_generic_name(unaliased);
    let combined = function_name_combine(n, count);
    return combined;
  }
  let r2 = function_curryify_count_args_get_curried_right(count);
  let output = await function_curryify_generic_open(f_name, lambda, r2);
  return output;
}
