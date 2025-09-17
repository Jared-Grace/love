import { string_to } from "./string_to.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
export async function sandbox() {
  let left = 1;
  left = 1;
  let right = 2;
  if (equal(left, right)) {
  }
  let list = range(count);
  function lambda(item) {
    let s = string_to(item);
    return s;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
