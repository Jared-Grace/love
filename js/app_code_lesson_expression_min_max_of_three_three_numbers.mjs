import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_code_lesson_expression_min_max_of_three_three_numbers() {
  arguments_assert(arguments, 0);
  ("three DIFFERENT numbers 2..12, so the smallest and the largest are always real and distinct");
  let three = list_shuffle_take([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3);
  return three;
}
