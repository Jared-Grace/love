import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_one_step_title_name_id(
  words,
  operator,
) {
  arguments_assert(arguments, 2);
  ("the home title of a one-step lesson: its words, followed by the line that keeps one more or one less under a new name");
  ("Only what is painted changes; the id is built from the words.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let stepped = js_code_binary_spaced_nb(name_first, operator, 1);
  let code = js_code_let_statement(name_last, stepped);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
