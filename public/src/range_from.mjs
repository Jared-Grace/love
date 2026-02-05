import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { range } from "../../../love/public/src/range.mjs";
export function range_from(from, to) {
  from = integer_to_try(from);
  to = integer_to_try(to);
  let count = to - from + 1;
  let r = range(count);
  function lambda(item) {
    let s = add(from, item);
    return s;
  }
  let mapped = list_map(r, lambda);
  return mapped;
}
