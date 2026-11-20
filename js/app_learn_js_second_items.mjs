import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_last } from "./list_last.mjs";
export function app_learn_js_second_items(size, after) {
  "size different numbers from 1 to 9 for a second-biggest lesson: the last one is never the second biggest, and the second biggest comes after the biggest when after is true and before it when after is false";
  let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  while (true) {
    let items = list_shuffle_take(pool, size);
    function lambda(x, y) {
      let difference = subtract(y, x);
      return difference;
    }
    let sorted = items.slice().sort(lambda);
    let at_big = items.indexOf(sorted[0]);
    let at_second = items.indexOf(sorted[1]);
    let is_after = greater_than(at_second, at_big);
    let left = list_last(items);
    let last_second = equal(left, sorted[1]);
    if (equal(is_after, after) && not(last_second)) {
      return items;
    }
  }
}
