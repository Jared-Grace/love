import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function list_shuffle_cycled_range(list, min, max) {
  let choices_count = text_combine(subtract(max, min), 1);
  list_shuffle_cycled(list, choices_count);
}
