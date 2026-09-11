import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_strong_card } from "./app_code_lesson_expression_choose_order_strong_card.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { app_code_parentheses_inside_before_outside } from "./app_code_parentheses_inside_before_outside.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_arithmetic_parentheses_recall(
  root,
) {
  arguments_assert(arguments, 1);
  ("the two things put back in front of the learner before the run on this lesson: which operators are worked out first, and what ( and ) do");
  ("They stand in a card of their own above the run because they are not part of it - they are what the run is about to be read with. The learner has both of them already and has never had them in the same line: the marks were met round a comparison, and these four operators were met with nothing gathered at all.");
  ("Both sentences are asked for from the one place that holds them, in the very words the lessons that taught them used, because a learner recognises a sentence they have already read in the second it takes and stops to compare a near-copy against it.");
  let recall_card = app_code_lesson_expression_choose_order_strong_card(root);
  let left_parenthesis = js_code_parenthesis_left();
  let right_parenthesis = js_code_parenthesis_right();
  let inside_first = app_code_parentheses_inside_before_outside("");
  html_div_cycle_code(recall_card, [
    "And whatever is inside ",
    left_parenthesis,
    " and ",
    right_parenthesis,
    inside_first,
  ]);
}
