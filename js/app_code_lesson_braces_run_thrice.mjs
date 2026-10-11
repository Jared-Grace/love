import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_lesson_braces_run_explain_generic } from "./app_code_lesson_braces_run_explain_generic.mjs";
import { app_code_braces_run_three_ifs_explain } from "./app_code_braces_run_three_ifs_explain.mjs";
import { app_code_braces_three_ifs } from "./app_code_braces_three_ifs.mjs";
export function app_code_lesson_braces_run_thrice() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs of three ifs one after another; asked for by the human 2026-10-11, straight before The same if three times");
  ("The writing is a first draft by Claude 2026-10-11.");
  ("2026-10-11, at the human's asking that each Does this section run? introduce its shape: explained by ",
    fn_name("app_code_braces_run_three_ifs_explain"),
    ", which says why The same if three times keeps its own explanation.");
  let lesson = app_code_lesson_braces_run_explain_generic(
    "Does this section run? Three ifs",
    app_code_braces_run_three_ifs_explain,
    app_code_braces_three_ifs,
    ["a", "b", "c"],
  );
  return lesson;
}
