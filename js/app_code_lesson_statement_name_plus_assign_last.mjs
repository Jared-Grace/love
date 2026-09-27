import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_plus_assign_pair } from "./app_code_lesson_statement_name_plus_assign_pair.mjs";
import { app_code_lesson_statement_name_pair_last } from "./app_code_lesson_statement_name_pair_last.mjs";
import { app_code_lesson_statement_name_plus_assign } from "./app_code_lesson_statement_name_plus_assign.mjs";
export function app_code_lesson_statement_name_plus_assign_last() {
  arguments_assert(arguments, 0);
  ("the shorter way to add to what a name holds, written out only at the end: let a = 1; let b = 8; a += b; console.log(a); writes out 9");
  let pair = app_code_lesson_statement_name_plus_assign_pair();
  let lesson = app_code_lesson_statement_name_pair_last(
    app_code_lesson_statement_name_plus_assign,
    pair,
  );
  return lesson;
}
