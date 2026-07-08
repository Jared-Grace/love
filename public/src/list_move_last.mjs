import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
export function list_move_last(list, index) {
  let r = list_remove_at(list, index);
  list_add(list, r);
}
