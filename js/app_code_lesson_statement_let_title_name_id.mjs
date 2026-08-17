import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_string_any_code } from "./app_code_string_any_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function app_code_lesson_statement_let_title_name_id(words, name) {
  arguments_assert(arguments, 2);
  ("a home title for a Statements lesson whose line is the one that first gives a value a name, shown with the name it teaches and the value left as three dots");
  ("Two lessons show that line and differ only in what the name is - a letter in one, a whole word in the other - so the name is the one thing asked for here and everything else is the same both times.");
  let any = app_code_string_any_code();
  let code = js_code_let_statement(name, any);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
