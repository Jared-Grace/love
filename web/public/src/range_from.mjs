import { log } from "./log.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
import { marker } from "./marker.mjs";
export function range_from(from, to) {
  marker("1");
  log(message);
  let count = to - from + 1;
  let r = range(count);
  function lambda(item) {
    let s = add(item, count);
    return s;
  }
  let mapped = list_map(r, lambda);
  return mapped;
}
