import { add_1 } from "./add_1.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
export function range_1(count) {
  let r_before = range(count);
  let r = list_map(r_before, add_1);
  return r;
}
