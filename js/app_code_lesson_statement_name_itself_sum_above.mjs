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
  ("the boxes read before the first question: the line the screen before this one ended on, a name being given a new value, and then that same line with the new name taken out of it");
  ("This line is the line before it with one thing changed, so that is how it is shown - the earlier line, and then the change. The two lessons it could instead be assembled from are further back and neither of them is shaped like it, so assembling asks a learner to hold two things when the whole line is already in hand a screen ago.");
  ("The same two numbers as the screen before, and the same value coming out. A learner can then see that the two lines end in the same place, and that the only thing the change costs is the third name.");
  ("The reminder about giving a name a new value comes second, because it is what lets the changed line be written at all - the name on the left is one that already exists, so it is filled rather than made. Shown first it reads as a lesson of its own; shown second it reads as the permission for the change.");
  ("The one thing a learner can get wrong here is thinking the line means the name equals the sum forever - that filling the cup and reading it are the same act. So the third box does not say what the line means; it shows the sum already worked out and the line rewritten with the answer standing where the sum stood, and lets a learner check that the two say the same thing.");
  ("Each box is its own small program, and the two names are given the same two numbers in every one of them. A reminder shown with a different pair would put arithmetic a learner has to do afresh in front of the one line the screen is actually about.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let number_first = 2;
  let number_last = 3;
  let number_new = 9;
  let total = add(number_first, number_last);
  let names_sum = app_code_lesson_statement_names_added();
  let name_third = app_code_lesson_statement_name_third();
  let box_total = app_code_container_light_blue(root);
  html_div_cycle_code(box_total, [
    "Remember, we can give a name what two names add up to",
  ]);
  ("each box's lines are handed over together rather than one at a time, because nothing is said between them: each box is one program, and the quiz and the worked example of this same lesson have always drawn a program as one chip.");
  let held_first = js_code_let_statement(name_first, number_first);
  let held_last = js_code_let_statement(name_last, number_last);
  let code_total = js_code_let_statement(name_third, names_sum);
  let logged_third = js_code_console_log_statement(name_third);
  let lines_total = [held_first, held_last, code_total, logged_third];
  app_code_code_lines_writes_out(box_total, lines_total, total);
  let box_again = app_code_container_light_blue(root);
  html_div_cycle_code(box_again, ["Remember, we can give a name a new value"]);
  let held_again = js_code_let_statement(name_first, number_first);
  let given_again = js_code_assign_statement(name_first, number_new);
  let logged_again = js_code_console_log_statement(name_first);
  let lines_again = [held_again, given_again, logged_again];
  app_code_code_lines_writes_out(box_again, lines_again, number_new);
  html_div_cycle_code(box_again, ["The value it held before is gone"]);
  let box_itself = app_code_container_light_blue(root);
  ("the earlier line is set above the changed one so the change can be seen rather than described, which is the shape the screen before this one ended on and so the shape a learner read a moment ago.");
  ("Neither line is said to be the other. They do different things - one makes a name and one fills a name that is already there - and the whole misreading this screen guards against is a learner taking the sum to be tied to the name for good, so a word like instead, which would put the two lines forward as swaps for each other, is the one word that must not be used here.");
  html_div_cycle_code(box_itself, ["In the lesson before we wrote:"]);
  html_div_code(box_itself, code_total);
  html_div_cycle_code(box_itself, ["We do not need a new name for the sum"]);
  html_div_cycle_code(box_itself, [
    "We can give it to a name we already have:",
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
