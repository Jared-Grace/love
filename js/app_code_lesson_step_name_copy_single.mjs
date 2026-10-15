import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { app_code_lesson_statement_name_copy_single } from "./app_code_lesson_statement_name_copy_single.mjs";
export function app_code_lesson_step_name_copy_single() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Giving a name what another name holds's programs; asked for by the human 2026-10-15, straight after that lesson");
  let lesson = app_code_lesson_step_of_lesson_generic(
    "Step by step: Giving a name what another name holds",
    "let b = a;",
    app_code_lesson_statement_name_copy_single,
  );
  return lesson;
}
