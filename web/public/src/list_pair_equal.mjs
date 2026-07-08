import { lists_sizes_equal } from "../../../love/public/src/lists_sizes_equal.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { each_pair_min } from "../../../love/public/src/each_pair_min.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
export function list_pair_equal(list_a, list_b) {
  let e = lists_sizes_equal(lists);
  let difference = false;
  function lambda(left, right) {
    if (equal_not(left, right)) {
      difference = true;
    }
  }
  each_pair_min(list_a, list_b, lambda);
  let n = not(difference);
  return n;
}
