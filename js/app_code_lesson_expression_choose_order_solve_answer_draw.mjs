import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
import { app_code_expression_value_choose_await } from "./app_code_expression_value_choose_await.mjs";
import { app_code_label_solve_choice } from "./app_code_label_solve_choice.mjs";
import { app_code_label_solve_next } from "./app_code_label_solve_next.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_choose_order_solve_answer_draw(
  parent,
  tree,
  on_success,
  on_wrong,
  answer_label_set,
  decoys_get,
) {
  arguments_assert(arguments, 6);
  ("the quiz of a solve-each-step lesson: the same line to press as the front page, and after every press the values it could come to");
  ("The line and the values stand in two places set aside before either is drawn, so the buttons are always UNDER the line - built as they are needed they would land wherever the line had left off.");
  ("What is being asked changes twice a step and the asking says so: choose what to solve, then what it comes to, then what to solve next.");
  ("Which wrong values are offered is the one thing the lessons on this engine differ by, so it is handed in. A line of numbers and a line of comparisons are pressed the same way and answered the same way; what a learner could plausibly press INSTEAD is the only place the two part company, and writing the pressing out again for each of them would leave one lesson's habits to be repaired in two files.");
  let line_holder = html_div(parent);
  let choices_holder = html_div(parent);
  let current = tree;
  function on_change(step) {
    current = property_get(step, "current");
    let solved = property_get(step, "solved");
    if (null_is(solved)) {
      return;
    }
    let said = app_code_label_solve_next();
    answer_label_set(said);
  }
  async function on_chosen(node, value, node_span_unused) {
    "a right press is answered by asking what that part comes to, and the line does not move until the right value is pressed";
    let said = app_code_label_solve_choice();
    answer_label_set(said);
    let decoys = decoys_get(current, node);
    await app_code_expression_value_choose_await(
      choices_holder,
      value,
      decoys,
      on_wrong,
    );
  }
  app_code_expression_choose_line(
    line_holder,
    tree,
    on_change,
    on_wrong,
    on_chosen,
    on_success,
  );
}
