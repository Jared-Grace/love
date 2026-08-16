import { noop } from "./noop.mjs";
import { app_code_expression_operator_chip } from "./app_code_expression_operator_chip.mjs";
import { html_div_cycle } from "./html_div_cycle.mjs";
import { app_shared_spaced_below } from "./app_shared_spaced_below.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first_property } from "./list_first_property.mjs";
export function app_code_expression_choose_say(note, ready, lead) {
  arguments_assert(arguments, 3);
  ("name the one operator that may go next, so a walkthrough tells rather than asks");
  ("The lead is handed in because the same naming opens the line and then carries it on - So first, choose * and Now, choose + are one sentence with one word changed, and writing them as two would let them drift apart.");
  ("ends by saying where to press, and stands off from what follows, because the line to press is directly underneath and this is the sentence that hands the learner over to it");
  ("The operator was named without ever saying where it was, and the same symbol is sitting in the sentence being read - so a learner told to choose the times had to work out that the one to press is the one on the line below, not the one in front of them.");
  ("the operator is drawn as the very chip it is on the line, not as plain code, so the thing being named and the thing to press look like one thing said twice rather than two things");
  let symbol = list_first_property(ready, "operator");
  let cycles = [noop, app_code_expression_operator_chip];
  let parts = [lead, symbol, " below:"];
  let line = html_div_cycle(note, cycles, parts);
  app_shared_spaced_below(line);
}
