import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_watched } from "./app_code_lesson_statement_name_watched.mjs";
import { app_code_lesson_statement_name_count } from "./app_code_lesson_statement_name_count.mjs";
import { app_code_lesson_statement_name_count_batch } from "./app_code_lesson_statement_name_count_batch.mjs";
export function app_code_lesson_statement_name_count_watched() {
  arguments_assert(arguments, 0);
  ("counting with a name, written out at every step: let a = 4; console.log(a); a = a + 1; console.log(a); a = a + 1; console.log(a); writes out 4, 5 and 6");
  ("Of the lessons that get a watched twin this one gains most: the answer to the lesson before is only where the count ends, and here every number it passes through is on the screen.");
  let lesson = app_code_lesson_statement_name_watched(
    app_code_lesson_statement_name_count,
    app_code_lesson_statement_name_count_batch,
    "Watching a count",
  );
  return lesson;
}
