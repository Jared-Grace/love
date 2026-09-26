import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_statement_name_again } from "./app_code_lesson_statement_name_again.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_lesson_statement_name_watch_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: the program the lesson on giving a name another value taught, then the same program with the name also written out before it changes");
  ("The second box is the first with one line added and nothing else changed, so the extra answer can only come from that line. The same name is written out twice and says two different things, which is the whole point: a line that writes out a name writes what it holds at that moment.");
  ("The last sentence says why a person would do this. Writing a name out at each step is how a programmer finds where a program stopped doing what they meant.");
  ("The words are grapes and olives, the ones the lesson before shows, and not among the words the questions below pick.");
  let name = app_code_lesson_statement_name_value_name();
  let right = app_code_string_code("grapes");
  let held = js_code_let_statement(name, right);
  let right2 = app_code_string_code("olives");
  let again = js_code_assign_statement(name, right2);
  let logged = js_code_console_log_statement(name);
  let box_one = app_code_container_light_blue(root);
  app_code_remember_from_lesson(
    box_one,
    context,
    app_code_lesson_statement_name_again,
    ["a name can be given another value:"],
  );
  app_code_code_lines_writes_out(box_one, [held, again, logged], "olives");
  let box_two = app_code_container_light_blue(root);
  html_div_cycle_code(box_two, [
    "We can also write out ",
    name,
    " before it changes:",
  ]);
  let both = list_join_newline(["grapes", "olives"]);
  app_code_code_lines_writes_out(box_two, [held, logged, again, logged], both);
  html_div_cycle_code(box_two, [
    "Each ",
    logged,
    " writes out what ",
    name,
    " holds at that moment",
  ]);
  html_div_cycle_code(box_two, [
    "Writing out a name at each step shows how it changes, which helps find mistakes",
  ]);
}
