import { function_curryify_generic } from "./function_curryify_generic.mjs";
import { function_curryify_args_get } from "./function_curryify_args_get.mjs";
import { function_curryify_generic_name } from "./function_curryify_generic_name.mjs";
export async function function_curryify(f_name) {
  let output = await function_curryify_generic(
    f_name,
    function_curryify_generic_name,
    function_curryify_args_get,
  );
  return output;
}
