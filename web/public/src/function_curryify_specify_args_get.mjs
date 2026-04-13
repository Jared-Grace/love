import { list_indices_to_items_1 } from "../../../love/public/src/list_indices_to_items_1.mjs";
import { function_curryify_args_get_generic } from "../../../love/public/src/function_curryify_args_get_generic.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
export function function_curryify_specify_args_get(arg_names, positions) {
  function lambda() {
    let items = list_indices_to_items_1(positions, arg_names);
    let difference = list_difference(arg_names, items);
    return difference;
  }
  let r = function_curryify_args_get_generic(lambda, arg_names);
  return r;
}
