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
  ("The pressing itself is the front page's pressing, out of the one place both of them read. The two screens are one screen with one thing counted, so the asking a learner is answered with here is the very asking they were shown next door - and the label over the answers is where this screen puts it.");
  ("Which wrong values are offered is the one thing the lessons on this engine differ by, so it is handed in. A line of numbers and a line of comparisons are pressed the same way and answered the same way; what a learner could plausibly press INSTEAD is the only place the two part company, and writing the pressing out again for each of them would leave one lesson's habits to be repaired in two files.");
  ("nothing is said once the line is down to a value, because this screen answers a finished line with its own success message and a second well done in the label would be the same thing said twice");
  app_code_expression_choose_order_ask(
    parent,
    tree,
    answer_label_set,
    noop,
    decoys_get,
    on_wrong,
    on_success,
  );
}
