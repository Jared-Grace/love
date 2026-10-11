import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_run_generic } from "./app_code_lesson_braces_run_generic.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
export function app_code_lesson_braces_run_nested() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs of an if inside an if; asked for by the human 2026-10-11, straight before If inside an if");
  ("The writing is a first draft by Claude 2026-10-11.");
  let rules = [
    [
      "An ",
      "if",
      " inside another's ",
      "{ ... }",
      " is reached only when the outer one runs",
    ],
  ];
  let lesson = app_code_lesson_braces_run_generic(
    "Does this section run? If inside an if",
    rules,
    app_code_braces_two_nested,
    ["a", "b"],
  );
  return lesson;
}
