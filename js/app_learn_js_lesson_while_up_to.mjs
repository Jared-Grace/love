import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_code_lesson_while_update_log_generic } from "./app_code_lesson_while_update_log_generic.mjs";
import { app_learn_js_lesson_up_to_log_options } from "./app_learn_js_lesson_up_to_log_options.mjs";
import { app_learn_js_lesson_while_less_equal } from "./app_learn_js_lesson_while_less_equal.mjs";
export function app_learn_js_lesson_while_up_to() {
  arguments_assert(arguments, 0);
  ("<= with a console.log and n++: let n = 1; while (n <= 3) { console.log(n); n++; } writes out 1, 2 and 3");
  ("The one new fact is that a console.log makes <= visible: the number compared against is written out too, where < would have stopped one line sooner.");
  ("Recommended by Claude 2026-11-02 and chosen by the human, to sit straight after While adding one, whose program is this one with < in place of <=.");
  ("The wrong answer of one run fewer is exactly what < would write out, so it is the mistake this lesson is here to catch.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Up to and including",
    "while (n <= 3) { n++; }",
  );
  let lesson = app_code_lesson_while_update_log_generic({
    ...app_learn_js_lesson_up_to_log_options(),
    name_id,
    remembered: app_learn_js_lesson_while_less_equal,
    remembered_parts: [
      "",
      "<=",
      " keeps going when ",
      "n",
      " lands exactly on the number it is compared with.",
    ],
    intro_parts: [
      "So with ",
      "n++",
      " and a ",
      "console.log",
      ", the number it is compared with is written out too:",
    ],
  });
  return lesson;
}
