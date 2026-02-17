import { function_curryify_right_args_get } from "../../../love/public/src/function_curryify_right_args_get.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_curryify_generic_name } from "../../../love/public/src/function_curryify_generic_name.mjs";
import { function_curryify_generic } from "../../../love/public/src/function_curryify_generic.mjs";
export async function function_curryify_right(f_name) {
  function lambda(unaliased) {
    let combined = function_curryify_generic_name(unaliased);
    let combined2 = function_name_combine(combined, "right");
    return combined2;
  }
  let output = await function_curryify_generic(
    f_name,
    lambda,
    function_curryify_right_args_get,
  );
  return output;
}
