import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_while_update_log_generic } from "./app_code_lesson_while_update_log_generic.mjs";
import { app_code_lesson_increment_log_options } from "./app_code_lesson_increment_log_options.mjs";
import { app_code_lesson_statement_name_increment } from "./app_code_lesson_statement_name_increment.mjs";
export function app_code_lesson_while_increment() {
  arguments_assert(arguments, 0);
  ("n++ in a while: let n = 1; while (n < 4) { console.log(n); n++; } writes out 1, 2 and 3");
  ("The one new fact is that the n++ already taught works inside a while, moving n one at a time.");
  ("n always ends on the number it is compared against, since it moves by one, which is why every run is written out here.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let name_id = app_code_lesson_statement_title_name_id(
    "While adding one",
    "while (n < 4) { n++; }",
  );
  let lesson = app_code_lesson_while_update_log_generic({
    ...app_code_lesson_increment_log_options(),
    name_id,
    remembered: app_code_lesson_statement_name_increment,
    remembered_parts: ["", "n++", " adds one to ", "n", "."],
    intro_parts: [
      "Inside a ",
      "while",
      ", it adds one each time, and a ",
      "console.log",
      " shows every run:",
    ],
  });
  return lesson;
}
