import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_before_lesson_generic } from "./app_code_lesson_step_before_lesson_generic.mjs";
import { app_code_lesson_statement_name_average_three } from "./app_code_lesson_statement_name_average_three.mjs";
export function app_code_lesson_step_name_average_three() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Average of three names' programs: the first step lesson whose expressions have more than one operator in arithmetic alone, a + b + c, so the sum is solved one operator at a time - the names first, then the left + and then the right one; asked for by the human 2026-10-17, straight before Average of three names. Not picked: a lesson on values written out alone, as let a = 2 + 3 * 4;, which would show the solver before any name - no lesson's programs are written that way, so it would be a new lesson and not a step lesson over one. Not picked: Even numbers or the seat lessons, whose expressions mix comparing with working out, a harder first meeting");
  let lesson = app_code_lesson_step_before_lesson_generic(
    "Step by step: Average of three names",
    "let sum = a + b + c;",
    app_code_lesson_statement_name_average_three,
  );
  return lesson;
}
