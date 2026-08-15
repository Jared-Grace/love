import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_first_property } from "./list_first_property.mjs";
export function app_code_expression_choose_say(note, ready, lead) {
  arguments_assert(arguments, 3);
  ("name the one operator that may go next, so a walkthrough tells rather than asks");
  ("The lead is handed in because the same naming opens the line and then carries it on - So first, choose * and Now, choose + are one sentence with one word changed, and writing them as two would let them drift apart.");
  let symbol = list_first_property(ready, "operator");
  html_div_cycle_code(note, [lead, symbol]);
}
