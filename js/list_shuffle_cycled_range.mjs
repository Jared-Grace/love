import { add } from "./add.mjs";
import { list_shuffle_cycled } from "./list_shuffle_cycled.mjs";
import { subtract } from "./subtract.mjs";
export function list_shuffle_cycled_range(list, min, max) {
  let left = subtract(max, min);
  let choices_count = add(left, 1);
  list_shuffle_cycled(list, choices_count);
}
