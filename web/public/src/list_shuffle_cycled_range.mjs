import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
export function list_shuffle_cycled_range(list, min, max) {
  let choices_count = max - min + 1;
  list_shuffle_cycled(list, choices_count);
}
