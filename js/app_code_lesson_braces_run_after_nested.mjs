import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_run_generic } from "./app_code_lesson_braces_run_generic.mjs";
import { app_code_braces_three_after_nested } from "./app_code_braces_three_after_nested.mjs";
export function app_code_lesson_braces_run_after_nested() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs of an if inside an if and then an if after them; asked for by the human 2026-10-11, straight before the lesson on that shape");
  ("The writing is a first draft by Claude 2026-10-11.");
  let rules = [
    [
      "An ",
      "if",
      " after another's ",
      "}",
      " is outside it, so it is reached whatever that one asks",
    ],
  ];
  let lesson = app_code_lesson_braces_run_generic(
    "Does this section run? An if after an if inside an if",
    rules,
    app_code_braces_three_after_nested,
    ["a", "b"],
  );
  return lesson;
}
