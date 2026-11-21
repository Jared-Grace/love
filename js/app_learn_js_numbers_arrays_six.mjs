import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_learn_js_numbers_arrays_six() {
  arguments_assert(arguments, 0);
  ("six arrays of numbers for one set of questions, three of 3 items and three of 4, each drawn from 1 to 9 with no number twice in one array, so every sum stays small enough to add in your head");
  let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arrays = [];
  for (let count of [3, 4, 3, 4, 3, 4]) {
    let items = list_shuffle_take(pool, count);
    arrays.push(items);
  }
  return arrays;
}
