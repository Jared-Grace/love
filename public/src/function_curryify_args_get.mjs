import { list_first_remaining_get } from "../../../love/public/src/list_first_remaining_get.mjs";
import { function_curryify_args_get_generic } from "../../../love/public/src/function_curryify_args_get_generic.mjs";
export function function_curryify_args_get(arg_names) {
  let fn = list_first_remaining_get;
  let r = function_curryify_args_get_generic(fn, arg_names);
  return r;
}
