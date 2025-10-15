import { add_1 } from "../../../love/public/src/add_1.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { range } from "../../../love/public/src/range.mjs";
export function range_1(count) {
  let r_before = range(count);
  let r = list_map(r, add_1);
  return r;
}
