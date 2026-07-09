import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function list_power_set(list, index, result) {
  let item = list_get(list, index);
  list_add(result, item);
  list_power_set(list, index + 1, result);
}
