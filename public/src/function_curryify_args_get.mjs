import { error } from "../../../love/public/src/error.mjs";
import { function_curryify_args_get_generic } from "../../../love/public/src/function_curryify_args_get_generic.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
export function function_curryify_args_get(arg_names) {
  let fn = list_first_remaining;
  let property_name = error();
  let r = function_curryify_args_get_generic(fn, arg_names, "first");
  return r;
}
