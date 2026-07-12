import { list_last_remaining_get } from "./list_last_remaining_get.mjs";
import { function_curryify_args_get_generic } from "./function_curryify_args_get_generic.mjs";
export function function_curryify_right_args_get(arg_names) {
  let r = function_curryify_args_get_generic(
    list_last_remaining_get,
    arg_names,
  );
  return r;
}
