import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
export function list_equal_swapped(list, value_before, value_after) {
  "A new list with every item equal to one value standing as another instead, and everything else left as it was.";
  "The swapping siblings next door all move items about by where they sit; this one asks what an item is. It hands back a new list rather than changing the one it was given, so the list a caller is still reading is untouched.";
  function swapped(item) {
    let same = equal(item, value_before);
    if (same) {
      return value_after;
    }
    return item;
  }
  let after = list_map(list, swapped);
  return after;
}
