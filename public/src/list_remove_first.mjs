import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
export function list_remove_first(list) {
  let e = list_remove_at(list, 0);
  return e;
}
