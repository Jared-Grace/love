import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_not_changes_true_false } from "./app_code_not_changes_true_false.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_operator_code_before } from "./app_code_operator_code_before.mjs";
export function app_code_lesson_expression_choose_order_not_recall(root) {
  arguments_assert(arguments, 1);
  ("the thing put back in front of the learner before the run on the press-at-a-time ! lesson: what ! comes to, and both of the two moves it makes shown on a line");
  ("It stands in a card of its own above the run because it is not part of it - it is what the run is about to be read with. The learner has met the ! several screens back, and this is the first line that asks them to solve one rather than read it.");
  ("THE VALUE AT THE END OF EACH LINE IS A CODE CHIP, like the line it is the value of. Written as a plain word it reads as English about the code rather than as the thing the code comes to, and these two lines are the only place on the card where a learner is being shown a value at all - so the one place it matters that a value looks like a value.");
  ("BOTH MOVES ARE SHOWN, not only the one the worked line happens to need. The card used to show !true alone, and a learner reading it would be right to wonder whether the other way round had been left out because it works differently. Two lines and there is nothing left to wonder about - which is the whole job of a recall card, since a learner who has to reason on a recall has not been reminded of anything.");
  let symbol = js_operator_bang_symbol();
  let recall_card = app_code_container_light_blue(root);
  let changes = app_code_not_changes_true_false("Remember: ");
  html_div_cycle_code(recall_card, changes);
  let word_true = js_keyword_true();
  let word_false = js_keyword_false();
  let not_true = app_code_operator_code_before(symbol, word_true);
  let not_false = app_code_operator_code_before(symbol, word_false);
  html_div_cycle_code(recall_card, ["So ", not_true, " is ", word_false]);
  html_div_cycle_code(recall_card, ["And ", not_false, " is ", word_true]);
}
