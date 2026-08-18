import { app_code_lesson_expression_choose_order_both_sides_expression_parts } from "./app_code_lesson_expression_choose_order_both_sides_expression_parts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function app_code_lesson_expression_choose_order_both_sides_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: 3 + 4 === 5 + 2 gives back the shape whose two arithmetic pieces stand either side of the comparison");
  ("The quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("Reading a line of this lesson's own making is safe because the lesson makes only one kind: a number, an arithmetic operator, a number, a comparison, and the same three again. Nothing is ever bracketed, so the writing is seven words with a space between each, and the same file builds it either way.");
  ("Seven words, said out loud as an assertion, so a line of some other shape fed in here is refused where it arrives rather than being taken apart into a shape that quietly means something else.");
  let words = text_split_space(code);
  list_size_assert(words, 7);
  let numbers = text_integers(code);
  let left_parts = {
    left: list_get(numbers, 0),
    symbol: list_get(words, 1),
    right: list_get(numbers, 1),
  };
  let outer_symbol = list_get(words, 3);
  let right_parts = {
    left: list_get(numbers, 2),
    symbol: list_get(words, 5),
    right: list_get(numbers, 3),
  };
  let tree =
    app_code_lesson_expression_choose_order_both_sides_expression_parts(
      left_parts,
      outer_symbol,
      right_parts,
    );
  return tree;
}
