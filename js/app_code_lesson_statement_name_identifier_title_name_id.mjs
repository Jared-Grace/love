import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_statement_name_identifier_name } from "./app_code_lesson_statement_name_identifier_name.mjs";
import { app_code_string_any_code } from "./app_code_string_any_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_category_statements } from "./app_code_category_statements.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function app_code_lesson_statement_name_identifier_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: any identifier as a name, the second Statements lesson, followed by the shape of the line it teaches");
  ("The same shape the lesson before shows, with a word where that one has a letter. Read down the home list the two titles differ in exactly the place the lessons differ, which says what this one adds before it is opened.");
  ("Only what is painted changes; the id is built from the words below. The note on the lesson before says why that matters.");
  let words = "any identifier as a name";
  let name = app_code_lesson_statement_name_identifier_name();
  let any = app_code_string_any_code();
  let code = js_code_let_statement(name, any);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
