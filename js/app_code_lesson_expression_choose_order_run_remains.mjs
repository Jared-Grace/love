import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
export function app_code_lesson_expression_choose_order_run_remains(
  run,
  current,
) {
  "Write the row that says what the line looks like now that a step has been taken - and whether that is the end of it - then hand back the parts of it that may still go.";
  "THE LAST ROW OF A STEP AND THE TEST FOR ANOTHER ONE ARE THE SAME READING. What is left is asked for once: if nothing in it may go, the row says the line is finished and names the value; if something may, the row says what is left and the walk goes round again. Asked twice - once to word the row and once to decide - the two answers could disagree, and the lesson would say the line is finished and then take another step.";
  "THE TWO WORDINGS ARE HERE TOGETHER because they are the same row said two ways, and a lesson that reworded one of them alone would be telling a learner that finishing is a different kind of step from continuing.";
  arguments_assert(arguments, 2);
  let current_code = app_code_expression_code(current);
  let ready = app_code_expression_nodes_ready(current);
  let done = list_empty_is(ready);
  if (done) {
    html_div_cycle_code(run, [
      "Nothing is left inside it, so the whole line is ",
      current_code,
    ]);
  }
  if (not(done)) {
    html_div_cycle_code(run, ["That leaves ", current_code]);
  }
  return ready;
}
