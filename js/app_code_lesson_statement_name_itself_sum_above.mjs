import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { app_code_lesson_statement_names_added } from "./app_code_lesson_statement_names_added.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { add } from "./add.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
export function app_code_lesson_statement_name_itself_sum_above(root) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: a name being given a new value, a sum of two names, and then the two of them in one line - the sum given back to a name the sum was read from");
  ("The two reminders are the two lessons this line is made of, and neither of them is new. What is new is only that they may happen in the same line, which is why the third box is the only one that says anything a learner has not been told.");
  ("The order of the reminders is the order the line is read in. The sum is worked out first and the name is filled second, so the box about filling a name comes first and the box about the sum comes second, and the third box does them in that same order with nothing left over.");
  ("The one thing a learner can get wrong here is thinking the line means the name equals the sum forever - that filling the cup and reading it are the same act. So the third box does not say what the line means; it shows the sum already worked out and the line rewritten with the answer standing where the sum stood, and lets a learner check that the two say the same thing.");
  ("Each box is its own small program, and the two names are given the same two numbers in every one of them. A reminder shown with a different pair would put arithmetic a learner has to do afresh in front of the one line the screen is actually about.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let number_first = 2;
  let number_last = 3;
  let number_new = 9;
  let total = add(number_first, number_last);
  let names_sum = app_code_lesson_statement_names_added();
  let box_again = app_code_container_light_blue(root);
  html_div_cycle_code(box_again, ["Remember, we can give a name a new value"]);
  ("each box's lines are handed over together rather than one at a time, because nothing is said between them: each box is one program, and the quiz and the worked example of this same lesson have always drawn a program as one chip.");
  let held_again = js_code_let_statement(name_first, number_first);
  let given_again = js_code_assign_statement(name_first, number_new);
  let logged_again = js_code_console_log_statement(name_first);
  let lines_again = [held_again, given_again, logged_again];
  app_code_code_lines_writes_out(box_again, lines_again, number_new);
  html_div_cycle_code(box_again, ["The value it held before is gone"]);
  let box_sum = app_code_container_light_blue(root);
  html_div_cycle_code(box_sum, ["Remember, we can add what two names hold"]);
  let held_first = js_code_let_statement(name_first, number_first);
  let held_last = js_code_let_statement(name_last, number_last);
  let logged_sum = js_code_console_log_statement(names_sum);
  let lines_sum = [held_first, held_last, logged_sum];
  app_code_code_lines_writes_out(box_sum, lines_sum, total);
  let box_itself = app_code_container_light_blue(root);
  html_div_cycle_code(box_itself, [
    "So we can give a name what it and another name add up to",
  ]);
  let given_sum = js_code_assign_statement(name_first, names_sum);
  html_div_code(box_itself, given_sum);
  ("the total is a code chip like the sum beside it. A number written in a program is code, and every other number on this screen is drawn as code, so a total set in plain writing would be the one number here dressed as prose.");
  ("The lesson before this one says at length why a sum may be swapped for its value, with the two lines set side by side and the reason underneath. Here it is one line, because a learner has just read that and this screen is about a different thing - that the name being filled may be one the sum was read from.");
  html_div_cycle_code(box_itself, [
    "",
    names_sum,
    " comes to ",
    total,
    ", so this is the same line",
  ]);
  let given_total = js_code_assign_statement(name_first, total);
  html_div_code(box_itself, given_total);
  html_div_cycle_code(box_itself, ["Then we can write that name on its own"]);
  let logged_total = js_code_console_log_statement(name_first);
  app_code_code_lines_writes_out(box_itself, [logged_total], total);
}
