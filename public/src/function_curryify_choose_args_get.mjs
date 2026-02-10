import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function function_curryify_choose_args_get(index_text) {
  let index = integer_to(index_text);
  let r2 = function lambda(arg_names) {
    let item = list_get(arg_names, index);
    let fn_new_result_args = [item];
    let fn_new_args = list_copy(arg_names);
    list_remove_at(fn_new_args, index);
    let r = {
      fn_new_result_args,
      fn_new_args,
    };
    return r;
  };
  return r2;
}
