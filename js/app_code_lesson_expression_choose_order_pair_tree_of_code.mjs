import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { app_code_lesson_expression_choose_order_pair_expression_parts } from "./app_code_lesson_expression_choose_order_pair_expression_parts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function app_code_lesson_expression_choose_order_pair_tree_of_code(
  code,
) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: (3 === 5) === (5 === 3) gives back the two comparisons and the comparison between them");
  ("The quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("Reading a line of this lesson's own making is safe because the lesson makes only one kind: four numbers, a comparison inside each pair of brackets, and one comparison between the two pairs. The same file builds it either way, so the two cannot mean different things by the same shape.");
  ("Seven pieces every time, and always in the same places, because the brackets travel with the numbers rather than standing apart from them: (3 and 5) are one piece each. So the three operators are the second, fourth and sixth pieces, and the four numbers are the only runs of digits on the line, in the order they are read.");
  let pieces = text_split_space(code);
  list_size_assert(pieces, 7);
  let left_symbol = list_get(pieces, 1);
  let outer_symbol = list_get(pieces, 3);
  let right_symbol = list_get(pieces, 5);
  let numbers = text_integers(code);
  let first_number = list_get(numbers, 0);
  let second_number = list_get(numbers, 1);
  let third_number = list_get(numbers, 2);
  let fourth_number = list_get(numbers, 3);
  let tree = app_code_lesson_expression_choose_order_pair_expression_parts(
    first_number,
    left_symbol,
    second_number,
    outer_symbol,
    third_number,
    right_symbol,
    fourth_number,
  );
  return tree;
}
