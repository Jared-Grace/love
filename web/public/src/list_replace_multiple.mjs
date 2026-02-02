import { list_insert_at_multiple } from "../../../love/public/src/list_insert_at_multiple.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
export function list_replace_multiple(e1, node, body_block) {
  let index = list_index_of(e1, node);
  list_remove(e1, node);
  list_insert_at_multiple(body_block, e1, index);
}
