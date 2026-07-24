import { range_map } from "./range_map.mjs";
import { add_1 } from "./add_1.mjs";
export function range_1(count) {
  let r = range_map(count, add_1);
  return r;
}
