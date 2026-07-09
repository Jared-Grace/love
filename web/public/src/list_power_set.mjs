import { list_index_not_is } from "../../../love/public/src/list_index_not_is.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function list_power_set(list, index, result, results) {
  let size = list_size(list);
  let n = list_index_not_is(list, index);
  if (n) {
    list_add(results, result);
  }
  let item = list_get(list, index);
  list_add(result, item);
  list_power_set(list, index + 1, result);
}
