import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { add } from "./add.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while } from "./app_code_lesson_while.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_while_lines } from "./js_code_while_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_while_generic } from "./app_code_lesson_while_generic.mjs";
import { subtract } from "./subtract.mjs";
import { js_code_for_condition_lines } from "./js_code_for_condition_lines.mjs";
export function app_code_lesson_for() {
  arguments_assert(arguments, 0);
  ("the first for: let n = 1; for (; n < 9;) { n += 3; } console.log(n); writes out 10, the same as while (n < 9) { n += 3; }");
  ("The one new fact is that for, holding only its condition between two semicolons, does what while does: it asks, runs its lines while what it asks is true, and stops once it is false. What may stand before the first semicolon and after the second is left to the lessons after this one.");
  ("Asked for by the human 2026-11-01 as the next lesson, the first for lesson the roadmap names; the first box writes the first while lesson's program and this one side by side, so the two are seen to write out the same.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three - with the numbers of While, which already keep n from landing on the number it is compared against, except in the backwards wrong program.");
  ("Reading forwards, the wrong answers are n after one run fewer, one run more, and where n starts; reading backwards, the wrong program is compared against one more than the answer, so it runs once more - as in While.");
  ("The writing is a first draft by Claude 2026-11-01.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  let groups = [
    [
      [6, 4, 2],
      [9, 5, 3],
    ],
    [
      [3, 5, 4],
      [2, 4, 3],
    ],
    [
      [1, 6, 3],
      [2, 5, 2],
    ],
    [
      [1, 9, 3],
      [2, 7, 2],
    ],
  ];
  function possible(start, value) {
    "a wrong answer is never below where n starts, since n only grows";
    let p = less_than_equal(start, value);
    return p;
  }
  function bound_past(ended) {
    let past = add(ended, 1);
    return past;
  }
  function above(root, context, program_lines, said) {
    "the first while remembered, then a for holding only its condition doing the same";
    let condition = js_code_binary_spaced_nb(name, less, 9);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_while, [
      "a ",
      "while",
      " asks again each time its lines run:",
    ]);
    let code = js_code_let_statement(name, 1);
    let changed = js_code_assign_operator_statement(name, plus, 3);
    let while_lines = js_code_while_lines(condition, changed);
    let statement = js_code_console_log_statement(name);
    let up_lines = list_concat_multiple([[code], while_lines, [statement]]);
    app_code_code_lines_writes_out(box_one, up_lines, "10");
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "A ",
      "for",
      " with only its condition, between two ",
      ";",
      ", does the same:",
    ]);
    let for_lines = program_lines(1, 9, 3);
    app_code_code_lines_writes_out(box_two, for_lines, "10");
    said(box_two, 1, 9, 4, true);
    said(box_two, 4, 9, 7, true);
    said(box_two, 7, 9, 10, true);
    said(box_two, 10, 9, 10, false);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "For",
    "for (; n < 9;) { ... }",
  );
  let lesson = app_code_lesson_while_generic({
    name_id,
    comparison: less,
    change: plus,
    groups,
    step: add,
    step_back: subtract,
    possible,
    bound_past,
    above,
    loop_lines: js_code_for_condition_lines,
  });
  return lesson;
}
