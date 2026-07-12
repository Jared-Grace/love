import { arguments_assert } from "./arguments_assert.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_remove_last_equal } from "./list_remove_last_equal.mjs";
import { list_index_not_is } from "./list_index_not_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
export function list_power_set_inner(list, index, result, results) {
  arguments_assert(arguments, 4);
  if (list_index_not_is(list, index)) {
    let copy = list_copy(result);
    list_add(results, copy);
    return;
  }
  let item = list_get(list, index);
  list_add(result, item);
  list_power_set_inner(list, index + 1, result, results);
  list_remove_last_equal(result, item);
  list_power_set_inner(list, index + 1, result, results);
}
