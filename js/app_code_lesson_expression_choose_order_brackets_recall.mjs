import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_brackets_recall(root) {
  arguments_assert(arguments, 1);
  ("the two things put back in front of the learner before the run on the brackets lesson: that the && goes first, and that the order can change the answer");
  ("They stand in a card of their own above the run because they are not part of it - they are what the run is about to be read with. The second of the two is the whole reason this screen is worth a lesson: brackets that could not change an answer would be a mark to skip over.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let recall_card = app_code_container_light_blue(root);
  html_div_cycle_code(recall_card, [
    "Remember: ",
    and_symbol,
    " is solved before ",
    or_symbol,
  ]);
  html_div_cycle_code(recall_card, [
    "And solving them the other way round can give a different answer",
  ]);
}
