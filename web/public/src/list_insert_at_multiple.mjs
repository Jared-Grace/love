import { each } from "../../../love/public/src/each.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
export function list_insert_at_multiple(body_block, list, index) {
  let copy = list_copy_reverse(body_block);
  function lambda5(item) {
    list_insert(list, index, item);
  }
  each(copy, lambda5);
}
