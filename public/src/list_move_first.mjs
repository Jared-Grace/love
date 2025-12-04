import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
export function list_move_first(params, index) {
  let r = list_remove_at(params, index);
  list_add_first(params, r);
}
