import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_last } from "./app_code_lesson_statement_name_last.mjs";
import { app_code_lesson_statement_name_again } from "./app_code_lesson_statement_name_again.mjs";
import { app_code_lesson_statement_name_again_batch } from "./app_code_lesson_statement_name_again_batch.mjs";
import { app_code_lesson_decoy_code_words } from "./app_code_lesson_decoy_code_words.mjs";
export function app_code_lesson_statement_name_again_last() {
  arguments_assert(arguments, 0);
  ('a name given another word, written out only at the end: let a = "grapes"; a = "olives"; console.log(a); writes out olives');
  ("The wrong answers are the words the program holds, so the word that was replaced is always among them.");
  let lesson = app_code_lesson_statement_name_last(
    app_code_lesson_statement_name_again,
    app_code_lesson_statement_name_again_batch,
    "Another value, last value only",
    app_code_lesson_decoy_code_words,
  );
  return lesson;
}
