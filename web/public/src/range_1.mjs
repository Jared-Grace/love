import { add_ } from "../../../love/public/src/add_1.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { range } from "../../../love/public/src/range.mjs";
export function range_(count) {
  let r_before = range(count);
  let r = list_map(r_before, add_);
  return r;
}
