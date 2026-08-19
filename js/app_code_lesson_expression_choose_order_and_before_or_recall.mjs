import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_and_before_or_recall(
  root,
) {
  arguments_assert(arguments, 1);
  ("the two things put back in front of the learner before the run on the and-before-or lesson: what && comes to and what || comes to");
  ("They stand in a card of its own above the run because they are not part of it - they are what the run is about to be read with. The learner has met each of the two on its own, several screens apart, and this is the first line that asks for both in the same breath.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let recall_card = app_code_container_light_blue(root);
  html_div_cycle_code(recall_card, [
    "Remember: ",
    and_symbol,
    " is true only when both sides are true",
  ]);
  html_div_cycle_code(recall_card, [
    "And ",
    or_symbol,
    " is true when either side is true",
  ]);
}
