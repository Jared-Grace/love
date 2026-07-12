import { integer_to_try } from "./integer_to_try.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
import { text_combine } from "./text_combine.mjs";
import { subtract } from "./subtract.mjs";
export function range_from(from, to) {
  from = integer_to_try(from);
  to = integer_to_try(to);
  let count = text_combine(subtract(to, from), 1);
  let r = range(count);
  function lambda(item) {
    let s = add(from, item);
    return s;
  }
  let mapped = list_map(r, lambda);
  return mapped;
}
