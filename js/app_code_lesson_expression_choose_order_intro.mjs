import { app_shared_spaced_below } from "./app_shared_spaced_below.mjs";
import { app_code_lesson_expression_choose_order_rule_parts } from "./app_code_lesson_expression_choose_order_rule_parts.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_intro(
  parent,
  whole_line,
) {
  arguments_assert(arguments, 2);
  ("what the lesson is for, said of the very line the learner is about to press: that we mean to solve it, that solving it all at once comes later, that for now it is solved a step at a time, and which operator the line itself says goes first");
  app_code_lesson_suppose_solve_line(parent, "Suppose", whole_line);
  html_div_cycle_code(parent, [
    "Eventually we will teach you to solve this all at once",
  ]);
  ("ends on a colon and stands off from what follows, because it is the last of the saying and what comes after it is the thing said - the rule, and then the line to press");
  let step_by_step = html_div_cycle_code(parent, [
    "But, for now, we will teach you to solve this step-by-step:",
  ]);
  app_shared_spaced_below(step_by_step);
  let rule = app_code_lesson_expression_choose_order_rule_parts(
    "In ",
    whole_line,
  );
  ("the rule is handed back because it is the one line here that stops being true: it is said of the whole line as written, and the first choice leaves a shorter line it no longer describes, so the caller takes it away at that moment");
  let rule_line = html_div_cycle_code(parent, rule);
  return rule_line;
}
