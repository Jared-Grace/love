import { list_shuffle_cycled } from "./list_shuffle_cycled.mjs";
import { text_combine } from "./text_combine.mjs";
import { subtract } from "./subtract.mjs";
export function list_shuffle_cycled_range(list, min, max) {
  let choices_count = text_combine(subtract(max, min), 1);
  list_shuffle_cycled(list, choices_count);
}
