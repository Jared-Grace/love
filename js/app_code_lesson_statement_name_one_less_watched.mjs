import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_watched } from "./app_code_lesson_statement_name_watched.mjs";
import { app_code_lesson_statement_name_one_less } from "./app_code_lesson_statement_name_one_less.mjs";
import { app_code_lesson_statement_name_one_less_batch } from "./app_code_lesson_statement_name_one_less_batch.mjs";
export function app_code_lesson_statement_name_one_less_watched() {
  arguments_assert(arguments, 0);
  ("taking one from a name, with the name written out before and after: let a = 7; console.log(a); a = a - 1; console.log(a); writes out 7 and then 6");
  let lesson = app_code_lesson_statement_name_watched(
    app_code_lesson_statement_name_one_less,
    app_code_lesson_statement_name_one_less_batch,
    "Watching one taken away",
  );
  return lesson;
}
