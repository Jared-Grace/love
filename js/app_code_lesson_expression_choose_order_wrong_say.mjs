import { list_first_property } from "./list_first_property.mjs";
import { app_shared_spaced_below } from "./app_shared_spaced_below.mjs";
import { noop } from "./noop.mjs";
import { app_code_expression_operator_chip } from "./app_code_expression_operator_chip.mjs";
import { html_div_cycle } from "./html_div_cycle.mjs";
import { app_code_lesson_expression_choose_order_rule_parts } from "./app_code_lesson_expression_choose_order_rule_parts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_choose_order_wrong_say(
  note,
  node,
  ready,
  line_code,
) {
  arguments_assert(arguments, 4);
  ("a press on an operator that cannot go yet: say which one was refused and what it is waiting for, and say the rule again about the line as it stands now");
  ("The refusal alone told a learner that this operator is not the one without ever telling them what decides which is - so the same press was left to be made again on the next line by the same reading that made it here.");
  ("said as cannot go BEFORE the one that may go, rather than as cannot go first, because first is not what is wrong with it: the same operator goes first on plenty of lines, and on this one it will go as soon as the other has gone - what it may not do is go ahead of that other one");
  ("It also says the two of them in the same order the rule underneath says them in, so the reason and the rule read as the one thing rather than as a refusal followed by something else to check it against.");
  ("both operators are drawn as the chips they are on the line, because the sentence is about two things standing on it - the one just pressed and the one to press instead - and a learner has to be able to find each of them there");
  ("The rule underneath keeps its operators as plain code. There they are being talked about rather than pointed at, and a lesson where every operator is drawn as a thing to press would have nothing left to say which one is.");
  let symbol = property_get(node, "operator");
  let symbol_ready = list_first_property(ready, "operator");
  let cycles = [noop, app_code_expression_operator_chip];
  let parts_refused = [
    "Not yet - the ",
    symbol,
    " cannot go before the ",
    symbol_ready,
  ];
  html_div_cycle(note, cycles, parts_refused);
  let parts = app_code_lesson_expression_choose_order_rule_parts(
    "Remember: In ",
    line_code,
  );
  ("stands off from what follows by the same gap that stands above it, because a refusal is said between the sentence that hands the learner to the line and the line itself - so it now sits where that sentence was and owes the line underneath the same room the sentence gave it");
  let rule_line = html_div_cycle_code(note, parts);
  app_shared_spaced_below(rule_line);
}
