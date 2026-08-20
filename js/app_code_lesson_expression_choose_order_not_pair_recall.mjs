import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_parentheses_inside_before_outside } from "./app_code_parentheses_inside_before_outside.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
export function app_code_lesson_expression_choose_order_not_pair_recall(root) {
  arguments_assert(arguments, 1);
  ("the two things put back in front of the learner before the run on the lesson putting a ! in front of a joined pair: what the ! does, and what brackets do");
  ("They stand in a card of their own above the run because they are not part of it - they are what the run is about to be read with. The learner has both of them already and has never had this much under the one pair of brackets: the ! was met with a single comparison under it and the brackets were met round two things with nothing in front of them. What is new is only the meeting.");
  ("Both are recalled in the very words the lessons that taught them used, asked for from the places that hold them, because a learner recognises a sentence they have already read in the second it takes and stops to compare a near-copy against it.");
  let symbol = js_operator_bang_symbol();
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  let recall_card = app_code_container_light_blue(root);
  html_div_cycle_code(recall_card, [
    "Remember: ",
    symbol,
    " gives back the opposite of what stands after it",
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
