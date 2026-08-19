import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { app_code_lesson_expression_choose_order_compare_expression_parts } from "./app_code_lesson_expression_choose_order_compare_expression_parts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { list_get } from "./list_get.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { not } from "./not.mjs";
import { ternary } from "./ternary.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function app_code_lesson_expression_choose_order_compare_tree_of_code(
  code,
) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: 3 < 5 === true gives back the shape whose comparison is on the left, and true === (3 < 5) the one whose comparison is on the right");
  ("The quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("Reading a line of this lesson's own making is safe because the lesson makes only one kind: two numbers, a comparison between them, and one plain true or false on the other side of a second comparison. The same file builds it either way, so the two cannot mean different things by the same shape.");
  ("Five pieces whichever end the comparison landed on, and the two operators simply swap places between the two shapes - the bracket travels with its own operator, so a bracket anywhere in the line is what says the comparison is on the right.");
  ("The true or false is found by the word rather than by position, and the two numbers by being the only runs of digits. Neither can be confused with the other: a number is never spelled with letters and the word is never spelled with digits.");
  let pieces = text_split_space(code);
  list_size_assert(pieces, 5);
  let open = js_code_parenthesis_left();
  let bracketed_is = text_includes(code, open);
  let comparison_left = not(bracketed_is);
  let second = list_get(pieces, 1);
  let fourth = list_get(pieces, 3);
  let inner_symbol = ternary(bracketed_is, fourth, second);
  let outer_symbol = ternary(bracketed_is, second, fourth);
  let numbers = text_integers(code);
  let left_number = list_get(numbers, 0);
  let right_number = list_get(numbers, 1);
  let word_true = js_keyword_true();
  let truth = text_includes(code, word_true);
  let tree = app_code_lesson_expression_choose_order_compare_expression_parts(
    left_number,
    inner_symbol,
    right_number,
    outer_symbol,
    truth,
    comparison_left,
  );
  return tree;
}
