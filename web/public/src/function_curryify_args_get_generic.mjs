import { property_get } from "../../../love/public/src/property_get.mjs";
export function function_curryify_args_get_generic(fn, arg_names) {
  let fr = fn(arg_names);
  let first = property_get(fr, property_name);
  let fn_new_result_args = property_get(fr, "remaining");
  let fn_new_args = [first];
  let r = {
    fn_new_result_args,
    fn_new_args,
  };
  return r;
}
