import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_remove_last_equal } from "../../../love/public/src/list_remove_last_equal.mjs";
import { list_index_not_is } from "../../../love/public/src/list_index_not_is.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function list_power_set_inner(list, index, result, results) {
  let n = list_index_not_is(list, index);
  if (n) {
    let concated = list_concat(a, b);
    list_add(results, result);
    return;
  }
  let item = list_get(list, index);
  list_add(result, item);
  list_power_set_inner(list, index + 1, result);
  list_remove_last_equal(result, item);
  list_power_set_inner(list, index + 1, result);
}
