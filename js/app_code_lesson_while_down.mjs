import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while } from "./app_code_lesson_while.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_while_lines } from "./js_code_while_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_while_generic } from "./app_code_lesson_while_generic.mjs";
import { add } from "./add.mjs";
export function app_code_lesson_while_down() {
  arguments_assert(arguments, 0);
  ("a while that counts down: let n = 10; while (n > 2) { n -= 3; } console.log(n); writes out 1");
  ("The one new fact is that a while works the same whichever way n moves: it asks, runs its lines while what it asks is true, and stops asking once it is false, here with n growing smaller and compared with greater than.");
  ("Asked for by the human 2026-10-09, as the lesson after While.");
  ("Each screen has four programs drawn from five counts of runs - none, one, two, three and four - as in While.");
  ("Reading forwards, the wrong answers are n after one run fewer, one run more, and where n starts, each once and never the answer, and never below zero or above where n starts, since n only shrinks and this course has not shown a number below zero.");
  ("Reading backwards, the wrong program is the same program compared against one less than the answer, so it runs once more.");
  ("The numbers are chosen so that n never lands exactly on the number it is compared against, except in the backwards wrong program.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let greater = js_operator_greater_than_symbol();
  let minus = js_operator_minus_symbol();
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  let groups = [
    [
      [3, 5, 2],
      [4, 6, 3],
    ],
    [
      [7, 5, 3],
      [9, 6, 4],
    ],
    [
      [9, 4, 3],
      [10, 3, 4],
    ],
    [
      [10, 2, 3],
      [11, 3, 3],
    ],
    [
      [9, 2, 2],
      [14, 3, 3],
    ],
  ];
  function possible(start, value) {
    "a wrong answer is never above where n starts, since n only shrinks, and never below zero";
    let p = less_than_equal(value, start) && less_than_equal(0, value);
    return p;
  }
  function bound_past(ended) {
    let past = subtract(ended, 1);
    return past;
  }
  function above(root, context, program_lines, said) {
    "the first while remembered, adding to n; then a while taking away from n, asked with greater than";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_while, [
      "a ",
      "while",
      " can add to ",
      name,
      " until what it asks is false:",
    ]);
    let code = js_code_let_statement(name, 1);
    let condition = js_code_binary_spaced_nb(name, less, 9);
    let changed = js_code_assign_operator_statement(name, plus, 3);
    let while_lines = js_code_while_lines(condition, changed);
    let statement = js_code_console_log_statement(name);
    let up_lines = list_concat_multiple([[code], while_lines, [statement]]);
    app_code_code_lines_writes_out(box_one, up_lines, "10");
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "A ",
      "while",
      " can also take away from ",
      name,
      ", and ask whether ",
      name,
      " is still greater than a number:",
    ]);
    let down_lines = program_lines(10, 2, 3);
    app_code_code_lines_writes_out(box_two, down_lines, "1");
    said(box_two, 10, 2, 7, true);
    said(box_two, 7, 2, 4, true);
    said(box_two, 4, 2, 1, true);
    said(box_two, 1, 2, 1, false);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "While counting down",
    "while (n > 2) { ... }",
  );
  let lesson = app_code_lesson_while_generic({
    name_id,
    comparison: greater,
    change: minus,
    groups,
    step: subtract,
    step_back: add,
    possible,
    bound_past,
    above,
  });
  return lesson;
}
