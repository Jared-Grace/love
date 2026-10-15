import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_if_true } from "./app_code_lesson_if_true.mjs";
export function app_code_lesson_braces_step_if_true() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in If true's programs; asked for by the human 2026-10-15, straight after If true");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: If true",
    "if (true) { ... }",
    app_code_lesson_if_true,
  );
  return lesson;
}
