import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { digit_count_values } from "../../../love/public/src/digit_count_values.mjs";
export function digit_count_values_shuffled(digit_count) {
  let values = digit_count_values(digit_count);
  list_shuffle(values);
}
