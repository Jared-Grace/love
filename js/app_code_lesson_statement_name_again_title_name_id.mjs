import { app_code_category_statements } from "./app_code_category_statements.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { app_code_string_any_code } from "./app_code_string_any_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { list_first } from "./list_first.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_statement_name_again_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: giving a name a new value, the fourth Statements lesson, followed by the line nobody has written yet");
  ("The line is the whole lesson, and it is a line a learner has not seen: the same line that first gives a value a name, with the let taken off. Shown here, the difference between the two is one word, seen before the lesson is opened.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "giving a name a new value";
  let names = app_code_lesson_statement_name_value_names();
  let name = list_first(names);
  let any = app_code_string_any_code();
  let code = js_code_assign_statement(name, any);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
