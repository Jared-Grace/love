import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_get } from "./list_get.mjs";
export function app_code_lesson_divisor_quotient_batch(make) {
  "the four-question batch shared by the integer-division family (integer division, dividend, divisor, quotient): four DIFFERENT divisors from 3..6 paired with quotients [0, 2, 3, 3] shuffled, so every batch has exactly ONE quotient-0 edge case (the number smaller than the divisor, e.g. 5 / 6) and never two identical questions. make(divisor, quotient) builds one question however the lesson needs it - a code string, or a {question, answer}";
  let divisors = list_shuffle_take([3, 4, 5, 6], 4);
  let quotients = [0, 2, 3, 3];
  list_shuffle(quotients);
  function pair(divisor, index) {
    let quotient = list_get(quotients, index);
    return make(divisor, quotient);
  }
  let list = list_map_index(divisors, pair);
  return list;
}
