import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { app_code_lesson_expression_choose_order_operators_expression_parts } from "./app_code_lesson_expression_choose_order_operators_expression_parts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { list_get } from "./list_get.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { or } from "./or.mjs";
import { ternary } from "./ternary.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function app_code_lesson_expression_choose_order_operators_tree_of_code(
  code,
) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: 8 - 2 * 3 gives back the shape whose stronger operator is on the right, and 6 / 3 + 4 the one whose stronger operator is on the left");
  ("The quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("Reading a line of this lesson's own making is safe because the lesson makes only one kind: three numbers with a stronger operator on one side of them and a weaker one on the other, and never a bracket, because the stronger one nests without needing to be written.");
  ("Which of the two operators is the strong one is decided by what the symbol IS rather than by where it sits, and the side falls out of that. Reading the side first and the symbols second would be the same answer worked out backwards, and it would break on the day a line is printed with the strong operator somewhere new.");
  let pieces = text_split_space(code);
  list_size_assert(pieces, 5);
  let second_piece = list_get(pieces, 1);
  let fourth_piece = list_get(pieces, 3);
  let times = js_operator_asterisk_symbol();
  let divided_by = js_operator_division_symbol();
  let times_is = equal(fourth_piece, times);
  let divide_is = equal(fourth_piece, divided_by);
  let strong_right = or(times_is, divide_is);
  let strong_symbol = ternary(strong_right, fourth_piece, second_piece);
  let weak_symbol = ternary(strong_right, second_piece, fourth_piece);
  let numbers = text_integers(code);
  let left = list_get(numbers, 0);
  let middle = list_get(numbers, 1);
  let right = list_get(numbers, 2);
  let tree = app_code_lesson_expression_choose_order_operators_expression_parts(
    left,
    middle,
    right,
    weak_symbol,
    strong_symbol,
    strong_right,
  );
  return tree;
}
