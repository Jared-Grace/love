import { error } from "../../../love/public/src/error.mjs";
import { list_last_remaining } from "../../../love/public/src/list_last_remaining.mjs";
import { function_curryify_args_get_generic } from "../../../love/public/src/function_curryify_args_get_generic.mjs";
export function function_curryify_right_args_get(arg_names) {
  let fn = list_last_remaining;
  let property_name = error();
  let r = function_curryify_args_get_generic(fn, arg_names, property_name);
  return r;
}
