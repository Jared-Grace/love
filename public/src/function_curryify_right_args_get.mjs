import { list_last_remaining } from "../../../love/public/src/list_last_remaining.mjs";
import { function_curryify_args_get_generic } from "../../../love/public/src/function_curryify_args_get_generic.mjs";
export function function_curryify_right_args_get(arg_names) {
  let result = list_last_remaining(list);
  let r = function_curryify_args_get_generic(fn, arg_names, "last");
  return r;
}
