import { integer_is_assert } from "./integer_is_assert.mjs";
import { range } from "./range.mjs";
import { each } from "./each.mjs";
export function each_range(count, lambda$i) {
  integer_is_assert(i);
  let list = range(count);
  each(list, lambda$i);
}
