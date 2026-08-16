import { html_hr } from "./html_hr.mjs";
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
  ("ends on a colon, because it is the last of the saying and what comes after it is the thing said - the rule, and then the line to press");
  html_div_cycle_code(parent, [
    "But, for now, we will teach you to solve this step-by-step:",
  ]);
  ("and a line is drawn right across underneath it, because what follows is not more of the saying - it is the working itself starting, and the two want telling apart by something a learner can see rather than by a gap they have to notice");
  ("A gap alone says the next thing is a little further off. It reads as a paragraph break, which is what stands between the first of these lines and the second, so the same mark cannot also say that the reading has finished and the doing has begun.");
  ("The room the saying used to stand off by is the room the line stands in, shared out above it and below it rather than left above it - so the saying, the line and the rule are evenly apart and the line reads as belonging to neither side.");
  app_shared_hr_spaced(parent);
  let rule = app_code_lesson_expression_choose_order_rule_parts(
    "In ",
    whole_line,
  );
  ("the rule is handed back because it is the one line here that stops being true: it is said of the whole line as written, and the first choice leaves a shorter line it no longer describes, so the caller takes it away at that moment");
  let rule_line = html_div_cycle_code(parent, rule);
  return rule_line;
}
