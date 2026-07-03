import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
export function list_shuffle_cycled_range(max, min, list) {
  let choices_count = max - min + 1;
  list_shuffle_cycled(list, choices_count);
}
