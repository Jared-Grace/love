import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
import { marker } from "./marker.mjs";
export function range_from(count) {
  marker("1");
  let r = range(count);
  let mapped = list_map(list, function lambda(item) {});
  return r;
}
