import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_statement_name_two } from "./app_code_lesson_statement_name_two.mjs";
export function app_code_lesson_step_name_two() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Two names at once's programs; asked for by the human 2026-10-15, straight after Two names at once");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: Two names at once",
    "console.log(b);",
    app_code_lesson_statement_name_two,
  );
  return lesson;
}
