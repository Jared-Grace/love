import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_strong_card(root) {
  arguments_assert(arguments, 1);
  ("the card naming which of the four arithmetic operators are the stronger ones, in the words every lesson that needs it says them");
  ("Two lessons put this same card in front of the learner, and they were saying it in two places in the same breath - the same four symbols fetched the same way, the same eight pieces of a sentence, character for character. Two lessons is exactly the number at which a sentence stops belonging to a lesson and starts belonging to the course.");
  ("Written twice, nothing would have broken on the day somebody improved one of them. The learner would simply have been told the pairing one way on one screen and another way on the next, and a learner who reads a near-copy stops to compare it against the one they already read - which is the cost the course can least afford to pay for nothing.");
  let times = js_operator_asterisk_symbol();
  let divided_by = js_operator_division_symbol();
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let recall_card = app_code_container_light_blue(root);
  html_div_cycle_code(recall_card, [
    "Remember: ",
    times,
    " and ",
    divided_by,
    " are worked out before ",
    plus,
    " and ",
    minus,
  ]);
}
