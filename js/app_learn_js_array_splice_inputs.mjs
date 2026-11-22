import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_get } from "./list_get.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
export function app_learn_js_array_splice_inputs() {
  arguments_assert(arguments, 0);
  ("six inputs for the lessons taking an item out of an array at an index or putting one in: items, four or five different numbers from 1 to 9; index, where; and item, one more number from 1 to 9 that is not among them, for the lessons putting one in");
  ("2026-11-22: the index is the first item once, the last once, and inside the array four times, so the step-through shows an item leaving or arriving at both ends as well as in the middle");
  let kinds = ["first", "inside", "inside", "last", "inside", "inside"];
  function input_of(kind) {
    let list = list_shuffle_take([4, 5], 1);
    let size = list_first(list);
    let numbers = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], size + 1);
    let items = list_slice(numbers, 0, size);
    let item = list_get(numbers, size);
    let last = subtract(size, 1);
    let list2 = list_shuffle_take([1, 2], 1);
    let index = list_first(list2);
    if (equal(kind, "first")) {
      index = 0;
    }
    if (equal(kind, "last")) {
      index = last;
    }
    let input = {
      items,
      index,
      item,
    };
    return input;
  }
  let inputs = list_map(kinds, input_of);
  let count = list_size(inputs);
  let shuffled = list_shuffle_take(inputs, count);
  return shuffled;
}
