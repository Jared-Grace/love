import { null_is } from "./null_is.mjs";
import { marker } from "./marker.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_of_next } from "./list_index_of_next.mjs";
export function list_next_try(list, item) {
  marker("1");
  let index_next = list_index_of_next(list, item);
  if (null_is(index_next)) {
    return;
  }
  let next = list_get(list, index_next);
  return next;
}
