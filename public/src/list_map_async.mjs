import { marker } from "../../../love/public/src/marker.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
export function list_map_async(list, lambda$item) {
  marker("1");
  list_is_assert(list);
  let mapped = list.map(lambda$item);
  return mapped;
}
