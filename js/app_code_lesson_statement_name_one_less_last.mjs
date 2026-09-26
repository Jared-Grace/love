import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_watched } from "./app_code_lesson_statement_name_watched.mjs";
import { app_code_lesson_statement_name_one_less } from "./app_code_lesson_statement_name_one_less.mjs";
import { app_code_lesson_statement_name_one_less_batch } from "./app_code_lesson_statement_name_one_less_batch.mjs";
export function app_code_lesson_statement_name_one_less_last() {
  arguments_assert(arguments, 0);
  ("taking one from a name, written out only at the end: let a = 7; a = a - 1; console.log(a); writes out 6");
  let lesson = app_code_lesson_statement_name_watched(
    app_code_lesson_statement_name_one_less,
    app_code_lesson_statement_name_one_less_batch,
    "Taking one away, last value only",
    null,
  );
  return lesson;
}
