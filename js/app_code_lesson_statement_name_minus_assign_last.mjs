import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_minus_assign_pair } from "./app_code_lesson_statement_name_minus_assign_pair.mjs";
import { app_code_lesson_statement_name_pair_last } from "./app_code_lesson_statement_name_pair_last.mjs";
import { app_code_lesson_statement_name_minus_assign } from "./app_code_lesson_statement_name_minus_assign.mjs";
export function app_code_lesson_statement_name_minus_assign_last() {
  arguments_assert(arguments, 0);
  ("the shorter way to take from what a name holds, written out only at the end: let a = 17; let b = 11; a -= b; console.log(a); writes out 6");
  let pair = app_code_lesson_statement_name_minus_assign_pair();
  let lesson = app_code_lesson_statement_name_pair_last(
    app_code_lesson_statement_name_minus_assign,
    pair,
  );
  return lesson;
}
