import { function_curryify_generic } from "./function_curryify_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_curryify_right_name } from "./function_curryify_right_name.mjs";
import { function_curryify_right_args_get } from "./function_curryify_right_args_get.mjs";
export async function function_curryify_right(f_name) {
  arguments_assert(arguments, 1);
  let output = await function_curryify_generic(
    f_name,
    function_curryify_right_name,
    function_curryify_right_args_get,
  );
  return output;
}
