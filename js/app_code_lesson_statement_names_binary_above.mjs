import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { json_to } from "./json_to.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { html_div_code_lines } from "./html_div_code_lines.mjs";
export function app_code_lesson_statement_names_binary_above({
  root,
  context,
  symbol,
  pair,
  remember_lesson,
  remember_parts,
}) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question of a lesson about one symbol between two names: the symbol written with two numbers the way the learner already knows it, and then the same two numbers given names and the symbol written with the names instead");
  ("Both boxes use the same two numbers, so both write out the same answer. The answer the learner already knows sits one box above the answer they are being shown, which is what lets them check the new form against the old one rather than be told it works.");
  ("The answer is worked out by running the line rather than written in, so it cannot disagree with the program drawn above it whatever symbol and numbers a lesson hands in.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let number_first = list_first(pair);
  let number_last = list_last(pair);
  let numbers_asked = js_code_binary_spaced_nb(
    number_first,
    symbol,
    number_last,
  );
  let names_asked = js_code_binary_spaced_nb(name_first, symbol, name_last);
  let logged_numbers = js_code_console_log_statement(numbers_asked);
  let logs = eval_console_log_to_list(logged_numbers);
  let logged_args = list_first(logs);
  let value = list_first(logged_args);
  let written = json_to(value);
  let box_remember = app_code_container_light_blue(root);
  app_code_remember_from_lesson(
    box_remember,
    context,
    remember_lesson,
    remember_parts,
  );
  app_code_code_lines_writes_out(box_remember, [logged_numbers], written);
  let box_names = app_code_container_light_blue(root);
  html_div_cycle_code(box_names, [
    "Suppose we give names (",
    name_first,
    ", ",
    name_last,
    ") to two numbers (",
    number_first,
    ", ",
    number_last,
    "):",
  ]);
  let held_first = js_code_let_statement(name_first, number_first);
  let held_last = js_code_let_statement(name_last, number_last);
  html_div_code_lines(box_names, [held_first, held_last]);
  html_div_cycle_code(box_names, [
    "So far we have only used ",
    symbol,
    " with numbers (like ",
    numbers_asked,
    ")",
  ]);
  html_div_cycle_code(box_names, [
    "We can also use ",
    symbol,
    " with names (like ",
    names_asked,
    "):",
  ]);
  let logged_names = js_code_console_log_statement(names_asked);
  let lines_names = [held_first, held_last, logged_names];
  app_code_code_lines_writes_out(box_names, lines_names, written);
}
