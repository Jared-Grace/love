import { list_remove_at_count } from "../../../love/public/src/list_remove_at_count.mjs";
export function list_remove_last_multiple(list, count) {
  let e = list_remove_at_count(list, 0, count);
  return e;
}
