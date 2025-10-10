import { list_insert } from "../../../love/public/src/list_insert.mjs";
export function list_add_first(list, item) {
  list_insert(list, 0, item);
}
