import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_functions_console_log_string } from "./app_code_lesson_functions_console_log_string.mjs";
export function app_code_lesson_step_log_string() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in the programs of the lesson that logs a string; asked for by the human 2026-10-15, straight after that lesson");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: Logging a string",
    'console.log("...");',
    app_code_lesson_functions_console_log_string,
  );
  return lesson;
}
