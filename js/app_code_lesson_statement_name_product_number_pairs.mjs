import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_code_lesson_statement_name_product_number_pairs() {
  arguments_assert(arguments, 0);
  ("four pairs of numbers for programs that multiply one by the other, in a fresh order each screen");
  ("Every written number is five or less and every answer is six or more, and the five answers differ from one another. So no answer can be spotted written somewhere on the screen, and no two programs share an answer.");
  let candidates = [
    [2, 3],
    [2, 5],
    [3, 4],
    [3, 5],
    [4, 5],
  ];
  let pairs = list_shuffle_take(candidates, 4);
  return pairs;
}
