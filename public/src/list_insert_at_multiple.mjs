import { each_reverse } from "../../../love/public/src/each_reverse.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
export function list_insert_at_multiple(list, index, inserteds) {
  function lambda5(item) {
    list_insert(list, index, item);
  }
  each_reverse(inserteds, lambda5);
}
