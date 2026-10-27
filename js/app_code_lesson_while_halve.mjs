import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { integer_is } from "./integer_is.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { divide } from "./divide.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_down } from "./app_code_lesson_while_down.mjs";
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
import { multiply } from "./multiply.mjs";
export function app_code_lesson_while_halve() {
  arguments_assert(arguments, 0);
  ("a while that halves: let n = 16; while (n > 3) { n /= 2; } console.log(n); writes out 2");
  ("The one new fact is that the change inside a while need not be the same amount each run: halving takes 8 away the first time, 4 the next, then 2, so each run has to be worked out rather than counted.");
  ("Asked for by the human 2026-10-27, as the lesson after While counting down: /= 2 on a power of 2.");
  ("Every start is a power of 2 and every end is 2 or more, so n stays a whole number on every run, and so does every wrong answer and the bound of every wrong program; halving 1 would give a number with a point, which this course has not shown inside a while.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three - no more than ",
    fn_name("app_code_while_runs_max"),
    " allows, as in While.");
  ("Reading forwards, the wrong answers are n after one run fewer, one run more, and where n starts, each once and never the answer, never above where n starts and never a number with a point.");
  ("Reading backwards, the wrong program is the same program compared against half of what it writes out, so it runs once more; or, for a program already running three times, against twice what it writes out, so it runs once fewer.");
  ("The numbers are chosen so that n never lands exactly on the number it is compared against, except in the backwards wrong program.");
  ("The writing is a first draft by Claude 2026-10-27.");
  let greater = js_operator_greater_than_symbol();
  let minus = js_operator_minus_symbol();
  let slash = text_slash_forward();
  let name = "n";
  let groups = [
    [
      [4, 5, 2],
      [8, 9, 2],
    ],
    [
      [8, 5, 2],
      [4, 3, 2],
    ],
    [
      [8, 3, 2],
      [16, 5, 2],
    ],
    [
      [16, 3, 2],
      [32, 5, 2],
    ],
  ];
  function possible(start, value) {
    "a wrong answer is a whole number, never above where n starts, since n only shrinks, and never below 1";
    let p =
      integer_is(value) &&
      less_than_equal(value, start) &&
      less_than_equal(1, value);
    return p;
  }
  function bound_past(ended) {
    "half of where n ends, so n is still greater once more, and then lands on it";
    let past = divide(ended, 2);
    return past;
  }
  function above(root, context, program_lines, said) {
    "the last while remembered, taking away the same amount each time; then a while halving n";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_down,
      [
        "a ",
        "while",
        " can take the same amount away from ",
        name,
        " each time:",
      ],
    );
    let code = js_code_let_statement(name, 10);
    let condition = js_code_binary_spaced_nb(name, greater, 2);
    let changed = js_code_assign_operator_statement(name, minus, 3);
    let while_lines = js_code_while_lines(condition, changed);
    let statement = js_code_console_log_statement(name);
    let down_lines = list_concat_multiple([[code], while_lines, [statement]]);
    app_code_code_lines_writes_out(box_one, down_lines, "1");
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "A ",
      "while",
      " can also halve ",
      name,
      " each time, with ",
      "/=",
      ", so it takes away less each run:",
    ]);
    let halve_lines = program_lines(16, 3, 2);
    app_code_code_lines_writes_out(box_two, halve_lines, "2");
    said(box_two, 16, 3, 8, true);
    said(box_two, 8, 3, 4, true);
    said(box_two, 4, 3, 2, true);
    said(box_two, 2, 3, 2, false);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "While halving",
    "while (n > 3) { n /= 2; }",
  );
  let lesson = app_code_lesson_while_generic({
    name_id,
    comparison: greater,
    change: slash,
    groups,
    step: divide,
    step_back: multiply,
    possible,
    bound_past,
    above,
  });
  return lesson;
}
