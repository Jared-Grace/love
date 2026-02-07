import { list_index_last_not_is } from "../../../love/public/src/list_index_last_not_is.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { each_previous_generic } from "../../../love/public/src/each_previous_generic.mjs";
export function each_next(list, lambda$item$next) {
  let v4 = each_previous_generic(index_valid_is, add_1, list, lambda$item$next);
  return v4;
  function index_valid_is(index) {
    let n = list_index_last_not_is(list, index);
    return n;
  }
}
