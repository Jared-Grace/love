import { equal } from "../../../love/public/src/equal.mjs";
import { lists_sizes_equal_pair } from "../../../love/public/src/lists_sizes_equal_pair.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { each_pair_min } from "../../../love/public/src/each_pair_min.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
export function lists_equal_pair(list_a, list_b) {
  let e = lists_sizes_equal_pair(list_a, list_b);
  if (not(e)) {
    return;
  }
  let has_difference = false;
  function lambda(left, right) {
    if (equal_not(left, right)) {
      has_difference = true;
    }
  }
  each_pair_min(list_a, list_b, lambda);
  let equal = not(has_difference);
  return equal;
}
