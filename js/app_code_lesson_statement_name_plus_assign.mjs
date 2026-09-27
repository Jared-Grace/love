import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_plus_assign_pair } from "./app_code_lesson_statement_name_plus_assign_pair.mjs";
import { app_code_lesson_statement_name_pair_first } from "./app_code_lesson_statement_name_pair_first.mjs";
export function app_code_lesson_statement_name_plus_assign() {
  arguments_assert(arguments, 0);
  ("the shorter way to add to what a name holds: let a = 1; let b = 8; a += b; console.log(a); writes out 1 and then 9");
  let pair = app_code_lesson_statement_name_plus_assign_pair();
  let lesson = app_code_lesson_statement_name_pair_first(pair);
  return lesson;
}
