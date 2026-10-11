import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_braces_run_explain_generic } from "./app_code_lesson_braces_run_explain_generic.mjs";
import { app_code_if_in_else_explain } from "./app_code_if_in_else_explain.mjs";
import { app_code_braces_three_if_in_else } from "./app_code_braces_three_if_in_else.mjs";
export function app_code_lesson_braces_run_if_in_else() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs of an if inside an else; asked for by the human 2026-10-11, straight before the lesson on that shape");
  ("The writing is a first draft by Claude 2026-10-11.");
  ("2026-10-11, at the human's asking: introduces the shape, with the explanation moved here from the lesson straight after, as for If inside an if. Its one rule now stands as that lesson's reminder of this one.");
  let lesson = app_code_lesson_braces_run_explain_generic(
    "Does this section run? If inside an else",
    app_code_if_in_else_explain,
    app_code_braces_three_if_in_else,
    ["a", "b"],
  );
  return lesson;
}
