import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_learn_js_bin_items() {
  arguments_assert(arguments, 0);
  ("seven different numbers from 1 to 40, smallest first, for a binary search lesson: seven items take at most three steps to search");
  let pool = [];
  for (let n = 1; less_than_equal(n, 40); n++) {
    pool.push(n);
  }
  let items = list_shuffle_take(pool, 7);
  function lambda(x, y) {
    let difference = subtract(x, y);
    return difference;
  }
  items.sort(lambda);
  return items;
}
