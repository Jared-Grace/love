import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_if_inside_generic } from "./app_learn_js_lesson_if_inside_generic.mjs";
import { app_learn_js_lesson_for_same_as_while_above } from "./app_learn_js_lesson_for_same_as_while_above.mjs";
import { app_code_lesson_while_if } from "./app_code_lesson_while_if.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_keyword_for } from "./js_keyword_for.mjs";
export function app_learn_js_lesson_for_if() {
  arguments_assert(arguments, 0);
  ("an if inside a for: for (let n = 1; n < 6; n += 2) { if (n > 2) { console.log(n); } } writes out 3 and 5, and not 1, the same as An if inside a while");
  ("The one new fact is that an if inside a for is asked again every run, so its { ... } can run on some runs and be skipped on others. Counting the items of an array that match is this shape.");
  ("Chosen by the human 2026-11-06, to come after the three for lessons arrays need.");
  ("The writing is a first draft by Claude 2026-11-06.");
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "An if inside a for",
    "for (...) { if (...) {} }",
  );
  let lesson = app_learn_js_lesson_if_inside_generic({
    name_id,
    above: app_learn_js_lesson_for_same_as_while_above(
      app_code_lesson_while_if,
    ),
    program_write: js_code_for_start_condition_update_lines,
    keyword: js_keyword_for(),
  });
  return lesson;
}
