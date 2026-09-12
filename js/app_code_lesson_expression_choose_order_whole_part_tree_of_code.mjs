import { arguments_assert } from "./arguments_assert.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_expression_whole_part_tree } from "./app_code_expression_whole_part_tree.mjs";
export function app_code_lesson_expression_choose_order_whole_part_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: Math.floor(17 / 5) * 5 gives back the shape whose division is 17 over 5");
  ("The quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("Two numbers are the whole of what a line of this kind was built from, so the first two on it are read and the rest of the line is not consulted. The divisor is written twice, inside the division and again after the times, and both spellings come of the one number.");
  ("The name in front of the brackets carries no digits, so nothing in it can be mistaken for one of the line's numbers.");
  let numbers = text_integers(code);
  let dividend = list_get(numbers, 0);
  let divisor = list_get(numbers, 1);
  let tree = app_code_expression_whole_part_tree(dividend, divisor);
  return tree;
}
