import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
export function range_value(count, value) {
  let r = range(count);
  function lambda(item) {
    return value;
  }
  let m = list_map(r, lambda);
  return m;
}
