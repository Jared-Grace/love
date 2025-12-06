import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
export function list_index_last_is(sermon_correct_list, sermon_index) {
  let index_last = list_index_last(sermon_correct_list);
  let li = sermon_index === index_last;
  return li;
}
