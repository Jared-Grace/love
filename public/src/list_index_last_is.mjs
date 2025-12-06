import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
export function list_index_last_is(list, index) {
  let index_last = list_index_last(list);
  let li = index === index_last;
  return li;
}
