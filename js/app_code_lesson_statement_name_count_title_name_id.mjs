import { app_code_lesson_statement_name_count_title_code } from "./app_code_lesson_statement_name_count_title_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_count_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: counting with a name, followed by the line that does it said twice");
  ("The line is shown twice and that is the whole title, because the line on its own is the lesson before this one. One copy would name that lesson again; two copies are the only thing this screen adds, and a learner who has read the screen before recognises the difference at a glance.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "Counting with a name";
  let code = app_code_lesson_statement_name_count_title_code();
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
