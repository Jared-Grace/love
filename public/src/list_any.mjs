import { marker } from "./marker.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_any(list, lambda$item) {
  marker("1");
  let filtered = list_filter(list, lambda$item);
  let ne = list_empty_not_is(filtered);
  return ne;
}
