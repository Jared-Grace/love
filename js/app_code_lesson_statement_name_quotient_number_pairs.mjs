import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_code_lesson_statement_name_quotient_number_pairs() {
  arguments_assert(arguments, 0);
  ("four pairs of numbers for programs that divide the first by the second, in a fresh order each screen");
  ("Every pair divides with nothing left over, so every answer is a whole number - a decimal answer would be a second new thing on a screen about names. The five answers differ from one another and none of them is written anywhere in a program, so no answer can be spotted rather than worked out.");
  let candidates = [
    [20, 4],
    [18, 3],
    [14, 2],
    [24, 3],
    [18, 2],
  ];
  let pairs = list_shuffle_take(candidates, 4);
  return pairs;
}
