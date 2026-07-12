import { list_shuffle } from "./list_shuffle.mjs";
import { list_map } from "./list_map.mjs";
import { integer_positive_random_digits_text } from "./integer_positive_random_digits_text.mjs";
import { digits } from "./digits.mjs";
import { range_1 } from "./range_1.mjs";
export function app_code_lesson_symbols_batch_digits() {
  let digit_counts = range_1(5);
  function lambda(digit_count) {
    let digits = integer_positive_random_digits_text(digit_count);
    return digits;
  }
  let batch_digits = list_map(digit_counts, lambda);
  list_shuffle(batch_digits);
  return batch_digits;
}
