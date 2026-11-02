import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_while_update_log_generic } from "./app_code_lesson_while_update_log_generic.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { app_code_lesson_statement_name_decrement } from "./app_code_lesson_statement_name_decrement.mjs";
export function app_code_lesson_while_decrement() {
  arguments_assert(arguments, 0);
  ("n-- in a while: let n = 3; while (n > 0) { console.log(n); n--; } writes out 3, 2 and 1");
  ("The one new fact is that the n-- already taught works inside a while, moving n one at a time, the way While adding one did with n++.");
  ("Only a program already running three times compares against zero. Another is offered a wrong program one further on, and a number below zero has not been shown in this course.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let name_id = app_code_lesson_statement_title_name_id(
    "While taking away one",
    "while (n > 0) { n--; }",
  );
  let lesson = app_code_lesson_while_update_log_generic({
    name_id,
    comparison: js_operator_greater_than_symbol(),
    asks: greater_than,
    change: js_operator_minus_symbol(),
    step: subtract,
    step_back: add,
    groups: [
      [
        [2, 1],
        [6, 5],
      ],
      [
        [3, 1],
        [7, 5],
      ],
      [
        [3, 0],
        [6, 3],
      ],
    ],
    remembered: app_code_lesson_statement_name_decrement,
    remembered_parts: ["", "n--", " takes one away from ", "n", "."],
    intro_parts: [
      "Inside a ",
      "while",
      ", it takes one away each time, and a ",
      "console.log",
      " shows every run:",
    ],
    start: 3,
    bound: 0,
  });
  return lesson;
}
