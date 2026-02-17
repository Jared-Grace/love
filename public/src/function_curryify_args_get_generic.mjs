import { list_difference } from "../../../love/public/src/list_difference.mjs";
export function function_curryify_args_get_generic(fn, arg_names) {
  let fn_new_result_args = fn(arg_names);
  let fn_new_args = list_difference(arg_names, fn_new_result_args);
  let r = {
    fn_new_result_args,
    fn_new_args,
  };
  return r;
}
