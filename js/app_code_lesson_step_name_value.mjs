import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_statement_name_value } from "./app_code_lesson_statement_name_value.mjs";
export function app_code_lesson_step_name_value() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Giving a value a name's programs; asked for by the human 2026-10-15, straight after Giving a value a name");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: Giving a value a name",
    'let a = "...";',
    app_code_lesson_statement_name_value,
  );
  return lesson;
}
