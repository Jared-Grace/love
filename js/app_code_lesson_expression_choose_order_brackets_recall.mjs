import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { app_code_parentheses_inside_before_outside } from "./app_code_parentheses_inside_before_outside.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_brackets_recall(root) {
  arguments_assert(arguments, 1);
  ("the two things put back in front of the learner before the run on the brackets lesson: that the && goes first, and what brackets do");
  ("They stand in a card of their own above the run because they are not part of it - they are what the run is about to be read with. The learner has both of them already and has never had them in the same line: the brackets were met among numbers, several lessons back, and the two operators were met with nothing bracketed at all. What is new is only the meeting.");
  ("The brackets are recalled in the very words the lesson that taught them used, asked for from the one place that holds them, because a learner recognises a sentence they have already read in the second it takes and stops to compare a near-copy against it.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  let recall_card = app_code_container_light_blue(root);
  html_div_cycle_code(recall_card, [
    "Remember: ",
    and_symbol,
    " is solved before ",
    or_symbol,
  ]);
  let inside_first = app_code_parentheses_inside_before_outside("");
  html_div_cycle_code(recall_card, [
    "And whatever is inside ",
    left_bracket,
    " and ",
    right_bracket,
    inside_first,
  ]);
}
