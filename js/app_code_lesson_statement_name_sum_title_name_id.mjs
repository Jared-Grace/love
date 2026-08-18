import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary } from "./js_code_binary.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_sum_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: adding what two names hold, the sixth Statements lesson, followed by the line that does it");
  ("The line shown is the whole lesson, and what makes it that line is where the names are standing - inside a sum, in the two places a number stood in every arithmetic lesson before it. Every title above this one shows a name being written to; this is the first that shows two being read.");
  ("Real names rather than a stand-in for a value, because what is being added has to be names for the line to say anything at all.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "adding what two names hold";
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let sum = js_code_binary(name_first, plus, name_last);
  let code = js_code_console_log_statement(sum);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
