import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_while_log } from "./app_code_lesson_while_log.mjs";
export function app_code_lesson_step_while_log() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in the programs of A log inside a while; asked for by the human 2026-10-28, straight after that lesson");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: A log inside a while",
    "{ console.log(n); ... }",
    app_code_lesson_while_log,
  );
  return lesson;
}
