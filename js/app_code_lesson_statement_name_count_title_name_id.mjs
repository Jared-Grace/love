import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary } from "./js_code_binary.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_count_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: counting with a name, the tenth Statements lesson, followed by the line that does it said twice");
  ("The line is shown twice and that is the whole title, because the line on its own is the lesson before this one. One copy would name that lesson again; two copies are the only thing this screen adds, and a learner who has read the screen before recognises the difference at a glance.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "Counting with a name";
  let name = app_code_lesson_statement_name_value_name();
  let plus = js_operator_plus_symbol();
  let more = js_code_binary(name, plus, 1);
  let grown = js_code_assign_statement(name, more);
  let code = list_join_newline([grown, grown]);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
