import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_code_lesson_statement_name_difference_number_pairs() {
  arguments_assert(arguments, 0);
  ("four pairs of numbers for programs that take the second from the first, in a fresh order each screen");
  ("Every first number is larger than every second number, so no answer is below zero - a negative answer would be a second new thing on a screen about names.");
  ("Every written number is ten or more and every answer is below ten, and the five answers differ from one another. So a question offering four programs cannot be answered by spotting its answer written somewhere on the screen, and no two programs share an answer.");
  let candidates = [
    [17, 11],
    [15, 12],
    [19, 10],
    [18, 13],
    [16, 14],
  ];
  let pairs = list_shuffle_take(candidates, 4);
  return pairs;
}
