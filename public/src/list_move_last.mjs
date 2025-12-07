import { marker } from "../../../love/public/src/marker.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
export function list_move_last(params, index) {
  marker("1");
  let r = list_remove_at(params, index);
  list_add_first(params, r);
}
