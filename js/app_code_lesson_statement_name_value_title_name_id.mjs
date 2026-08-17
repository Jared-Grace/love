import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_string_any_code } from "./app_code_string_any_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_statement_name_value_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: giving a value a name, the first Statements lesson, followed by the shape of the line it teaches");
  ("The line is shown as well as named, because the home list is read to find a lesson again rather than to meet it, and by then the line is what is remembered. The value is left as three dots: this lesson keeps the name fixed, so the name is the part of the shape worth showing.");
  ("Only what is painted changes. The id a learner's finished lessons are stored under is built from the words below and not from this, so the line can be shown, reworded or taken away without any learner losing their place.");
  let words = "giving a value a name";
  let names = app_code_lesson_statement_name_value_names();
  let name = list_first(names);
  let any = app_code_string_any_code();
  let code = js_code_let_statement(name, any);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
