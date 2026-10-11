import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_run_generic } from "./app_code_lesson_braces_run_generic.mjs";
import { app_code_braces_two_else_if } from "./app_code_braces_two_else_if.mjs";
export function app_code_lesson_braces_run_else_if() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs of an if and an else if; asked for by the human 2026-10-11, straight before the first lesson on else if");
  ("The writing is a first draft by Claude 2026-10-11.");
  let rules = [
    ["", "else if (b) { ... }", " runs when a is false and b is true"],
  ];
  let lesson = app_code_lesson_braces_run_generic(
    "Does this section run? Else if",
    rules,
    app_code_braces_two_else_if,
    ["a", "b"],
  );
  return lesson;
}
