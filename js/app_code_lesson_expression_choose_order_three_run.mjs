import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_operator_symbols } from "./app_code_expression_operator_symbols.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { app_code_expression_step_reason } from "./app_code_expression_step_reason.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_run_open } from "./app_code_lesson_expression_choose_order_run_open.mjs";
import { app_code_lesson_expression_choose_order_run_remains } from "./app_code_lesson_expression_choose_order_run_remains.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_unique } from "./list_unique.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_choose_order_three_run(root, tree) {
  arguments_assert(arguments, 2);
  ("one line walked all the way down to its value, with the reason each step is the one that may go said before the step is taken: the line named first, then three rows to a step");
  ("The walk the lessons before this one read says only that one part has a value on each side. That holds on a two-operator line, where the learner can see it for themselves - the part that cannot go yet has an operator sitting inside it. On a three-operator line the second step is 5 - 2 + 4, where both the minus and the plus look ready, and the sentence would be asking the learner to believe something the screen does not show. So this lesson gives the rule instead, which is the same rule the quiz marks by.");
  ("Three rows to a step - why, the doing, what is left - because the why is new here and a row of its own is what makes it a step of the reading rather than an aside to it. The two rows after it are the ones every walk before this one used, in the same words, so only the new row is new to read.");
  ("The reason is read back off what the step leaves behind rather than worked out from the line as a whole, so it says what is true at that moment: an operator that outranked two others on the first row may be an equal by the third.");
  ("The walk stops when the line has no operator left that may go, rather than after a counted number of steps, so the line itself says how long it is and nothing handed in can disagree with it.");
  let line_card = app_code_container_light_blue(root);
  let run = app_code_lesson_expression_choose_order_run_open(
    root,
    line_card,
    tree,
  );
  let current = tree;
  let ready = app_code_expression_nodes_ready(current);
  while (list_empty_not_is(ready)) {
    let node = list_first(ready);
    let symbol = property_get(node, "operator");
    let step_code = app_code_expression_code(node);
    let step_value = app_code_expression_value(node);
    let step_text = text_to(step_value);
    let solved = app_code_expression_solved(current, node);
    let remaining = app_code_expression_operator_symbols(solved);
    let others = list_unique(remaining);
    let reason = app_code_expression_step_reason(symbol, others);
    html_div_cycle_code(run, reason);
    html_div_cycle_code(run, [
      "So we solve ",
      step_code,
      " to get ",
      step_text,
    ]);
    current = solved;
    ready = app_code_lesson_expression_choose_order_run_remains(run, current);
  }
}
