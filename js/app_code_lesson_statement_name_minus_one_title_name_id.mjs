import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary } from "./js_code_binary.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_minus_one_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: one less than a name, kept under a new name, followed by the line that does it");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "One less than a name";
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let minus = js_operator_minus_symbol();
  let less = js_code_binary(name_first, minus, 1);
  let code = js_code_let_statement(name_last, less);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
