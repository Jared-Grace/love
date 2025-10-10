import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function range_from(from, to) {
  from = integer_to(from);
  to = integer_to(to);
  marker("1");
  let count = to - from + 1;
  let r = range(count);
  function lambda(item) {
    let s = add(from, item);
    return s;
  }
  let mapped = list_map(r, lambda);
  return mapped;
}
