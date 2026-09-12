import { arguments_assert } from "./arguments_assert.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_expression_remainder_tree } from "./app_code_expression_remainder_tree.mjs";
export function app_code_lesson_expression_choose_order_remainder_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: 17 - Math.floor(17 / 5) * 5 gives back the shape whose division is 17 over 5");
  ("The quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("Two numbers are the whole of what a line of this kind was built from, and this line spells four. The number being divided is written twice, at the front and again inside the brackets, and the divisor twice after that - so the first number and the third are the two to read.");
  ("The third is read rather than the last, even though both are the divisor, because reading from the front says the same thing however long the line grows and counting back from the end does not.");
  let numbers = text_integers(code);
  let dividend = list_get(numbers, 0);
  let divisor = list_get(numbers, 2);
  let tree = app_code_expression_remainder_tree(dividend, divisor);
  return tree;
}
