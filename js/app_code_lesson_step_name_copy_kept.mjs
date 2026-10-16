import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_before_lesson_generic } from "./app_code_lesson_step_before_lesson_generic.mjs";
import { app_code_lesson_statement_name_copy_kept } from "./app_code_lesson_statement_name_copy_kept.mjs";
export function app_code_lesson_step_name_copy_kept() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Changing a name after copying it's programs; the first step lesson where a name changes after another name was filled from it, so the learner sees the copy keep what it was given, straight before Changing a name after copying it");
  let lesson = app_code_lesson_step_before_lesson_generic(
    "Step by step: Changing a name after copying it",
    'let c = a; a = "...";',
    app_code_lesson_statement_name_copy_kept,
  );
  return lesson;
}
