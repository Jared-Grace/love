import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_run_generic } from "./app_code_lesson_braces_run_generic.mjs";
import { app_code_braces_three_if_in_else } from "./app_code_braces_three_if_in_else.mjs";
export function app_code_lesson_braces_run_if_in_else() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs of an if inside an else; asked for by the human 2026-10-11, straight before the lesson on that shape");
  ("The writing is a first draft by Claude 2026-10-11.");
  let rules = [
    ["An ", "if", " inside an ", "else", " is reached only when the else runs"],
  ];
  let lesson = app_code_lesson_braces_run_generic(
    "Does this section run? If inside an else",
    rules,
    app_code_braces_three_if_in_else,
    ["a", "b"],
  );
  return lesson;
}
