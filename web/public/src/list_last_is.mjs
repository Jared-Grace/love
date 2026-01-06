import { list_last } from "../../../love/public/src/list_last.mjs";
export function list_last_is(list, item) {
  let last = list_last(list);
  let li = last === item;
  return li;
}
