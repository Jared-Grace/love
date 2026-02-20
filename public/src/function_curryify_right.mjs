import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_curryify_right_name } from "../../../love/public/src/function_curryify_right_name.mjs";
import { function_curryify_right_args_get } from "../../../love/public/src/function_curryify_right_args_get.mjs";
import { function_curryify_generic } from "../../../love/public/src/function_curryify_generic.mjs";
export async function function_curryify_right(f_name) {
  arguments_assert(arguments, 1);
  let output = await function_curryify_generic(
    f_name,
    function_curryify_right_name,
    function_curryify_right_args_get,
  );
  return output;
}
