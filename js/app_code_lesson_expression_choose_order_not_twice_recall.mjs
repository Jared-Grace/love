import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { app_code_operator_code_before } from "./app_code_operator_code_before.mjs";
export function app_code_lesson_expression_choose_order_not_twice_recall(root) {
  "the thing put back in front of the learner before the run on the press-at-a-time !! lesson: what one ! comes to";
  "It stands in a card of its own above the run because it is not part of it - it is what the run is about to be read with. Every press on this lesson is that one fact used twice, so it is the whole of what a learner needs in hand before the run starts.";
  arguments_assert(arguments, 1);
  let symbol = js_operator_bang_symbol();
  let recall_card = app_code_container_light_blue(root);
  html_div_cycle_code(recall_card, [
    "Remember: ",
    symbol,
    " gives back the opposite of what stands after it",
  ]);
  let word_true = js_keyword_true();
  let not_true = app_code_operator_code_before(symbol, word_true);
  html_div_cycle_code(recall_card, ["So ", not_true, " is false"]);
}
