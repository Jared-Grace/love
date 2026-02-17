import { list_last_remaining_get } from "../../../love/public/src/list_last_remaining_get.mjs";
import { function_curryify_args_get_generic } from "../../../love/public/src/function_curryify_args_get_generic.mjs";
export function function_curryify_right_args_get(arg_names) {
  let fn_new_result_args = list_last_remaining_get(arg_names);
  let r = function_curryify_args_get_generic(fn, arg_names, "last");
  return r;
}
