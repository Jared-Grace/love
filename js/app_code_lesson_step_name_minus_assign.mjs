import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_statement_name_minus_assign } from "./app_code_lesson_statement_name_minus_assign.mjs";
export function app_code_lesson_step_name_minus_assign() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in A shorter way to take from a name's programs, straight after that lesson");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: A shorter way to take from a name",
    "a -= b;",
    app_code_lesson_statement_name_minus_assign,
  );
  return lesson;
}
