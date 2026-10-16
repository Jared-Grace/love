import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_before_lesson_generic } from "./app_code_lesson_step_before_lesson_generic.mjs";
import { app_code_lesson_statement_name_average_two } from "./app_code_lesson_statement_name_average_two.mjs";
export function app_code_lesson_step_name_average_two() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Average of two names' programs: the first where one line reads a name a line before it made, the sum, and halves it; straight before Average of two names, so the learner finds the sum and then the average one line at a time before being asked for the average all at once");
  let lesson = app_code_lesson_step_before_lesson_generic(
    "Step by step: Average of two names",
    "let average = sum / 2;",
    app_code_lesson_statement_name_average_two,
  );
  return lesson;
}
