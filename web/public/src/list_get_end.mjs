import { list_index_end } from "../../../love/public/src/list_index_end.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function list_get_end(list, index_from_end) {
  let difference = list_index_end(list, index_from_end);
  let item = list_get(list, difference);
  return item;
}
