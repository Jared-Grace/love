import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
export function function_curryify_args_get(arg_names) {
  let fn = list_first_remaining;
  let fr = fn(arg_names);
  let first = property_get(fr, "first");
  let fn_new_result_args = property_get(fr, "remaining");
  let fn_new_args = [first];
  let r = {
    fn_new_result_args,
    fn_new_args,
  };
  return r;
}
