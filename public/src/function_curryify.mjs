import { function_curryify_args_get } from "../../../love/public/src/function_curryify_args_get.mjs";
import { function_curryify_generic_name } from "../../../love/public/src/function_curryify_generic_name.mjs";
import { function_curryify_generic } from "../../../love/public/src/function_curryify_generic.mjs";
export async function function_curryify(f_name) {
  let output = await function_curryify_generic(
    f_name,
    function_curryify_generic_name,
    function_curryify_args_get,
  );
  return output;
}
