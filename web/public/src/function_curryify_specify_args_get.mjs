import { list_map_subtract_1 } from "../../../love/public/src/list_map_subtract_1.mjs";
import { function_curryify_args_get_generic } from "../../../love/public/src/function_curryify_args_get_generic.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { list_indices_to_items } from "../../../love/public/src/list_indices_to_items.mjs";
export function function_curryify_specify_args_get(arg_names, positions) {
  function lambda() {
    let mapped = list_map_subtract_1(positions);
    log(function_curryify_specify_args_get.name, {
      mapped,
      positions,
    });
    let items = list_indices_to_items(arg_names, mapped);
    let difference = list_difference(arg_names, items);
    return difference;
  }
  let r = function_curryify_args_get_generic(lambda, arg_names);
  return r;
}
