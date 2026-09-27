import { app_code_lesson_statement_name_single } from "./app_code_lesson_statement_name_single.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_times_assign_pair } from "./app_code_lesson_statement_name_times_assign_pair.mjs";
export function app_code_lesson_statement_name_times_assign() {
  arguments_assert(arguments, 0);
  ("the shorter way to multiply what a name holds: let a = 3; let b = 4; a *= b; console.log(a); writes out 3 and then 12");
  let pair = app_code_lesson_statement_name_times_assign_pair();
  let lesson = app_code_lesson_statement_name_single(pair);
  return lesson;
}
