export function function_curryify_args_get_generic(fn, arg_names) {
  let fn_new_result_args = fn(arg_names);
  let fn_new_args = [first];
  let r = {
    fn_new_result_args,
    fn_new_args,
  };
  return r;
}
