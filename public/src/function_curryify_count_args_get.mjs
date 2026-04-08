import { list_skip_curried_right } from "../../../love/public/src/list_skip_curried_right.mjs";
import { function_curryify_args_get_generic } from "../../../love/public/src/function_curryify_args_get_generic.mjs";
export function function_curryify_count_args_get(arg_names, count) {
  let r3 = list_skip_curried_right(skip_count);
  let r = function_curryify_args_get_generic(r2, arg_names);
  return r;
}
