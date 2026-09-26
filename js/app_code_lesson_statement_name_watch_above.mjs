import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_statement_name_one_more } from "./app_code_lesson_statement_name_one_more.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_lesson_statement_name_watch_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: the program the lesson on adding one to a name taught, then the same program with the name also written out before it changes");
  ("The second box is the first with one line added and nothing else changed, so the extra answer can only come from that line. The same name is written out twice and says two different things, which is the whole point: a line that writes out a name writes what it holds at that moment.");
  ("The last sentence says why a person would do this. Writing a name out at each step is how a programmer finds where a program stopped doing what they meant.");
  ("Both boxes start at 13, so neither number is a starting number or an answer of the programs asked about below, which start at 3, 5, 7, 9 or 11.");
  let name = app_code_lesson_statement_name_value_name();
  let plus = js_operator_plus_symbol();
  let more = js_code_binary_spaced_nb(name, plus, 1);
  let held = js_code_let_statement(name, 13);
  let grown = js_code_assign_statement(name, more);
  let logged = js_code_console_log_statement(name);
  let box_one = app_code_container_light_blue(root);
  app_code_remember_from_lesson(
    box_one,
    context,
    app_code_lesson_statement_name_one_more,
    ["a name can be given one more than it holds:"],
  );
  app_code_code_lines_writes_out(box_one, [held, grown, logged], "14");
  let box_two = app_code_container_light_blue(root);
  html_div_cycle_code(box_two, [
    "We can also write out ",
    name,
    " before it changes:",
  ]);
  let both = list_join_newline(["13", "14"]);
  app_code_code_lines_writes_out(box_two, [held, logged, grown, logged], both);
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
