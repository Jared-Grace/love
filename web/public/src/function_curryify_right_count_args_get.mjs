import { list_slice_end_curried_right } from "../../../love/public/src/list_slice_end_curried_right.mjs";
import { function_curryify_args_get_generic } from "../../../love/public/src/function_curryify_args_get_generic.mjs";
export function function_curryify_right_count_args_get(arg_names, count) {
  let r2 = list_slice_end_curried_right(count);
  let r = function_curryify_args_get_generic(r2, arg_names);
  return r;
}
