import { add_1 } from "../../../love/public/src/add_1.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { integer_positive_random_digits_text } from "../../../love/public/src/integer_positive_random_digits_text.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
export function app_code_lesson_symbols_batch_digits() {
  let count = 5;
  let r_before = range(count);
  let digit_counts = list_map(r_before, add_1);
  function lambda(digit_count) {
    let digits = integer_positive_random_digits_text(digit_count);
    return digits;
  }
  let batch_digits = list_map(digit_counts, lambda);
  list_shuffle(batch_digits);
  return batch_digits;
}
