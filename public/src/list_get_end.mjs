import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function list_get_end(list, index_from_end) {
  const difference = list_index_last(list) - index_from_end;
  const item = list_get(list, difference);
  return item;
}
