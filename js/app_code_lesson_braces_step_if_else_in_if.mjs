import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_step_generic } from "./app_code_lesson_braces_step_generic.mjs";
import { app_code_braces_three_if_else_in_if } from "./app_code_braces_three_if_else_in_if.mjs";
export function app_code_lesson_braces_step_if_else_in_if() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in programs of an if and its else inside an if; asked for by the human 2026-10-13, straight after Does this section run? of the same shape");
  let lesson = app_code_lesson_braces_step_generic(
    "Step by step: If and else inside an if",
    app_code_braces_three_if_else_in_if,
    ["a", "b"],
  );
  return lesson;
}
