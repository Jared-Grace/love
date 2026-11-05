import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_while_update_log_generic } from "./app_code_lesson_while_update_log_generic.mjs";
import { app_code_lesson_decrement_log_options } from "./app_code_lesson_decrement_log_options.mjs";
import { app_code_lesson_statement_name_decrement } from "./app_code_lesson_statement_name_decrement.mjs";
export function app_code_lesson_while_decrement() {
  arguments_assert(arguments, 0);
  ("n-- in a while: let n = 3; while (n > 0) { console.log(n); n--; } writes out 3, 2 and 1");
  ("The one new fact is that the n-- already taught works inside a while, moving n one at a time, the way While adding one did with n++.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let name_id = app_code_lesson_statement_title_name_id(
    "While taking away one",
    "while (n > 0) { n--; }",
  );
  let lesson = app_code_lesson_while_update_log_generic({
    ...app_code_lesson_decrement_log_options(),
    name_id,
    remembered: app_code_lesson_statement_name_decrement,
    remembered_parts: ["", "n--", " takes one away from ", "n", "."],
    intro_parts: [
      "Inside a ",
      "while",
      ", it takes one away each time, and a ",
      "console.log",
      " shows every run:",
    ],
  });
  return lesson;
}
