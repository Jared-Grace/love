import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_remove_first(list, index) {
  marker("1");
  let v = list_remove_at(list, index);
  return v;
}
