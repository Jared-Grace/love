import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_code_lesson_statement_name_swap_number_pairs() {
  arguments_assert(arguments, 0);
  ("the numbers the two names start with on one screen of the swapping lessons: four pairs of the five, each pair two different numbers");
  ("THE TWO NUMBERS OF A PAIR DIFFER, because every question here asks which name ends up holding which, and with the same number under both names every answer would be right.");
  ("3 and 8 are left out, because the boxes read before the questions use them.");
  let pairs = [
    [5, 2],
    [9, 4],
    [6, 1],
    [7, 10],
    [2, 9],
  ];
  let taken = list_shuffle_take(pairs, 4);
  return taken;
}
