import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_not_changes_true_false } from "./app_code_not_changes_true_false.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_parentheses_inside_before_outside } from "./app_code_parentheses_inside_before_outside.mjs";
export function app_code_lesson_expression_choose_order_not_pair_recall(root) {
  arguments_assert(arguments, 1);
  ("the two things put back in front of the learner before the run on the lesson putting a ! in front of a joined pair: what the ! does, and what parentheses do");
  ("They stand in a card of their own above the run because they are not part of it - they are what the run is about to be read with. The learner has both of them already and has never had this much under the one pair of parentheses: the ! was met with a single comparison under it and the parentheses were met round two things with nothing in front of them. What is new is only the meeting.");
  ("Both are recalled in the very words the lessons that taught them used, asked for from the places that hold them, because a learner recognises a sentence they have already read in the second it takes and stops to compare a near-copy against it.");
  ("What the ! does is asked for from the one place that holds it, so this card and the other lessons saying it cannot drift into saying it almost the same way. Why it is worded as the two moves rather than as the rule about what stands after it is written down there.");
  let symbol = js_operator_bang_symbol();
  let left_parenthesis = js_code_parenthesis_left();
  let right_parenthesis = js_code_parenthesis_right();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let recall_card = app_code_container_light_blue(root);
  let changes = app_code_not_changes_true_false("Remember: ");
  html_div_cycle_code(recall_card, changes);
  let inside_first = app_code_parentheses_inside_before_outside("");
  html_div_cycle_code(recall_card, [
    "And whatever is inside ",
    left_parenthesis,
    " and ",
    right_parenthesis,
    inside_first,
  ]);
}
