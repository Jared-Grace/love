import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_statement_name_plus_assign } from "./app_code_lesson_statement_name_plus_assign.mjs";
export function app_code_lesson_step_name_plus_assign() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in A shorter way to add to a name's programs; the first step lesson where a line is written the short way, a += b;, so the guide writes it the long way and solves that, straight after A shorter way to add to a name");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: A shorter way to add to a name",
    "a += b;",
    app_code_lesson_statement_name_plus_assign,
  );
  return lesson;
}
