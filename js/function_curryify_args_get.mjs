import { list_first_remaining_only } from "./list_first_remaining_only.mjs";
import { function_curryify_args_get_generic } from "./function_curryify_args_get_generic.mjs";
export function function_curryify_args_get(arg_names) {
  let fn = list_first_remaining_only;
  let r = function_curryify_args_get_generic(fn, arg_names);
  return r;
}
