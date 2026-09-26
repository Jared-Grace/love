import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_watched } from "./app_code_lesson_statement_name_watched.mjs";
import { app_code_lesson_statement_name_count } from "./app_code_lesson_statement_name_count.mjs";
import { app_code_lesson_statement_name_count_batch } from "./app_code_lesson_statement_name_count_batch.mjs";
export function app_code_lesson_statement_name_count_watched() {
  arguments_assert(arguments, 0);
  ("counting with a name, written out only at the end: let a = 4; a = a + 1; a = a + 1; console.log(a); writes out 6");
  ("Of the end-only lessons this is the one that asks most of a learner's head: two changes, and only where they end is written out. A learner who reads the second line as doing nothing answers one too low, and the lesson before showed them every step.");
  let lesson = app_code_lesson_statement_name_watched(
    app_code_lesson_statement_name_count,
    app_code_lesson_statement_name_count_batch,
    "Counting, last value only",
    null,
  );
  return lesson;
}
