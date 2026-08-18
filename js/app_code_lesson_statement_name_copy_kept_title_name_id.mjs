import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_third } from "./app_code_lesson_statement_name_third.mjs";
import { app_code_string_any_code } from "./app_code_string_any_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_copy_kept_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: changing a name after another was given what it held, the tenth Statements lesson, followed by the two lines it takes to do it");
  ("Two lines rather than one, because neither of them on its own is anything a learner has not seen. The copying line is the fifth lesson's and the changing line is the fourth's; what this lesson is about is only what happens when the second follows the first, so the title has to show both or it shows nothing.");
  ("A stand-in for the new value rather than a word, because which word is put in second makes no difference to anything here - and a picked one would be read as part of what the lesson is about.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "changing a name after another was given what it held";
  let name_first = app_code_lesson_statement_name_value_name();
  let name_copy = app_code_lesson_statement_name_third();
  let any = app_code_string_any_code();
  let copied = js_code_let_statement(name_copy, name_first);
  let changed = js_code_assign_statement(name_first, any);
  let code = text_combine_multiple([copied, " ", changed]);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
