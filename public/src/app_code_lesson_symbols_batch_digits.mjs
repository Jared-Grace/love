import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { integer_positive_random_digits_text } from "../../../love/public/src/integer_positive_random_digits_text.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
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
