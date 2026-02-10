import { function_curryify_generic } from "../../../love/public/src/function_curryify_generic.mjs";
import { function_curryify_choose_args_get } from "../../../love/public/src/function_curryify_choose_args_get.mjs";
export async function function_curryify_right(f_name) {
  let args_get = function_curryify_choose_args_get(0);
  function lambda() {}
  let output = await function_curryify_generic(f_name, args_get, lambda);
  return output;
}
