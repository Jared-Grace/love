import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_run_generic } from "./app_code_lesson_braces_run_generic.mjs";
import { app_code_braces_three_else_if_else } from "./app_code_braces_three_else_if_else.mjs";
export function app_code_lesson_braces_run_else_if_else() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs of an if, an else if and an else; asked for by the human 2026-10-11, straight before Else if and else");
  ("The writing is a first draft by Claude 2026-10-11.");
  let rules = [
    ["The last ", "else { ... }", " runs when no test before it is true"],
  ];
  let lesson = app_code_lesson_braces_run_generic(
    "Does this section run? Else if and else",
    rules,
    app_code_braces_three_else_if_else,
    ["a", "b"],
  );
  return lesson;
}
