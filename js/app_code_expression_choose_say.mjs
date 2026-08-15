import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_first_property } from "./list_first_property.mjs";
export function app_code_expression_choose_say(note, ready, lead) {
  arguments_assert(arguments, 3);
  ("name the one operator that may go next, so a walkthrough tells rather than asks");
  ("The lead is handed in because the same naming opens the line and then carries it on - So first, choose * and Now, choose + are one sentence with one word changed, and writing them as two would let them drift apart.");
  ("ends by saying where to press, and stands off from what follows, because the line to press is directly underneath and this is the sentence that hands the learner over to it");
  ("The operator was named without ever saying where it was, and the same symbol is sitting in the sentence being read - so a learner told to choose the times had to work out that the one to press is the one on the line below, not the one in front of them.");
  let symbol = list_first_property(ready, "operator");
  let line = html_div_cycle_code(note, [lead, symbol, " below:"]);
  let gap = app_shared_spaced_gap();
  html_style_margin_bottom(line, gap);
}
