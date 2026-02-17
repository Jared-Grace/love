import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_curryify_right_name } from "../../../love/public/src/function_curryify_right_name.mjs";
import { function_curryify_right_args_get } from "../../../love/public/src/function_curryify_right_args_get.mjs";
import { function_curryify_generic } from "../../../love/public/src/function_curryify_generic.mjs";
export async function function_curryify_right_count(f_name, count) {
  assert_arguments(arguments, 2);
  function lambda(unaliased) {
    let combined = function_curryify_right_name(unaliased);
    return combined;
  }
  let output = await function_curryify_generic(
    f_name,
    lambda,
    function_curryify_right_args_get,
  );
  return output;
}
