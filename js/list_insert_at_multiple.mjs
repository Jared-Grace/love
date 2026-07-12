import { each_reverse } from "./each_reverse.mjs";
import { list_insert } from "./list_insert.mjs";
export function list_insert_at_multiple(list, index, inserteds) {
  function lambda(item) {
    list_insert(list, index, item);
  }
  each_reverse(inserteds, lambda);
}
