import { app_code_lesson_statement_name_again_title_code } from "./app_code_lesson_statement_name_again_title_code.mjs";
import { app_code_lesson_statement_title_name_id_dots } from "./app_code_lesson_statement_title_name_id_dots.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_statement_name_again_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: giving a name a new value, followed by the line nobody has written yet");
  ("The line is the whole lesson, and it is a line a learner has not seen: the same line that first gives a value a name, with the let taken off. Shown here, the difference between the two is one word, seen before the lesson is opened.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "Giving a name a new value";
  let code = app_code_lesson_statement_name_again_title_code();
  let built = app_code_lesson_statement_title_name_id_dots(words, code);
  return built;
}
