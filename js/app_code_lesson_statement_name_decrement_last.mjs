import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_decrement_pair } from "./app_code_lesson_statement_name_decrement_pair.mjs";
import { app_code_lesson_statement_name_pair_last } from "./app_code_lesson_statement_name_pair_last.mjs";
import { app_code_lesson_statement_name_decrement } from "./app_code_lesson_statement_name_decrement.mjs";
export function app_code_lesson_statement_name_decrement_last() {
  arguments_assert(arguments, 0);
  ("the shorter way to take one from a name, written out only at the end: let a = 7; a--; console.log(a); writes out 6");
  let pair = app_code_lesson_statement_name_decrement_pair();
  let lesson = app_code_lesson_statement_name_pair_last(
    app_code_lesson_statement_name_decrement,
    pair,
  );
  return lesson;
}
