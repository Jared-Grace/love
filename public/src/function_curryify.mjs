import { function_curryify_generic_name } from "../../../love/public/src/function_curryify_generic_name.mjs";
import { function_curryify_generic } from "../../../love/public/src/function_curryify_generic.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function function_curryify(f_name) {
  let combined = function_curryify_generic_name(f_name);
  let output = await function_curryify_generic(f_name, combined, args_get);
  return output;
  function args_get(arg_names) {
    let fr = list_first_remaining(arg_names);
    let first = property_get(fr, "first");
    let fn_new_result_args = property_get(fr, "remaining");
    let fn_new_args = [first];
    let r = {
      fn_new_result_args,
      fn_new_args,
    };
    return r;
  }
}
