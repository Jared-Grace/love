import { list_map } from "../../../love/public/src/list_map.mjs";
import { range } from "../../../love/public/src/range.mjs";
export function range_value(count, value) {
  let r = range(count);
  function lambda5(item3) {
    return value;
  }
  let m = list_map(r, lambda5);
  return m;
}
