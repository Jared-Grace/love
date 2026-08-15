import { app_code_lesson_expression_choose_order_rule_parts } from "./app_code_lesson_expression_choose_order_rule_parts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_choose_order_wrong_say(
  note,
  node,
  line_code,
) {
  arguments_assert(arguments, 3);
  ("a press on an operator that cannot go yet: say which one was refused, and say the rule again about the line as it stands now");
  ("The refusal alone told a learner that this operator is not the one without ever telling them what decides which is - so the same press was left to be made again on the next line by the same reading that made it here.");
  let symbol = property_get(node, "operator");
  html_div_cycle_code(note, ["Not yet - the ", symbol, " cannot go first"]);
  let parts = app_code_lesson_expression_choose_order_rule_parts(
    "Remember: In ",
    line_code,
  );
  html_div_cycle_code(note, parts);
}
