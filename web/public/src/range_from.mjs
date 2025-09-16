import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
import { marker } from "./marker.mjs";
export function range_from(count) {
  marker("1");
  let r = range(count);
  function lambda(item) {}
  let mapped = list_map(list, lambda);
  return r;
}
