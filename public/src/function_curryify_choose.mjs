import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { function_curryify_generic } from "../../../love/public/src/function_curryify_generic.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function function_curryify_choose(f_name, index_text) {
  let index = integer_to(index_text);
  let output = await function_curryify_generic(f_name, args_get);
  return output;
  function args_get(arg_names) {
    let item = list_get(arg_names, index);
    let copy = list_copy(arg_names);
    let others = list_remove_at(copy, index);
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
