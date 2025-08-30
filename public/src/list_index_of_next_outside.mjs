import { marker } from "./marker.mjs";
import { list_index_of_delta_outside } from "./list_index_of_delta_outside.mjs";
export function list_index_of_next_outside(list, item) {
  marker("1");
  const delta = 1;
  let index_next = list_index_of_delta_outside(list, item, delta);
  return index_next;
}
