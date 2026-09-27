import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_count_pair } from "./app_code_lesson_statement_name_count_pair.mjs";
import { app_code_lesson_statement_name_pair_last } from "./app_code_lesson_statement_name_pair_last.mjs";
import { app_code_lesson_statement_name_count } from "./app_code_lesson_statement_name_count.mjs";
export function app_code_lesson_statement_name_count_last() {
  arguments_assert(arguments, 0);
  ("counting with a name, written out only at the end: let a = 4; a = a + 1; a = a + 1; console.log(a); writes out 6");
  ("Of the end-only lessons this is the one that asks most of a learner's head: two changes, and only where they end is written out. A learner who reads the second line as doing nothing answers one too low, and the lesson before showed them every step.");
  let pair = app_code_lesson_statement_name_count_pair();
  let lesson = app_code_lesson_statement_name_pair_last(
    app_code_lesson_statement_name_count,
    pair,
  );
  return lesson;
}
