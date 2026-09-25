import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_true_false_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: giving true or false a name, followed by the line that does it");
  ("Or rather than a comma, because a name holds one of the two and never both - which of them is the choice the line makes.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "Giving true or false a name";
  let name = app_code_lesson_statement_name_value_name();
  let t = js_keyword_true();
  let code = js_code_let_statement(name, t);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
