import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { integer_is } from "./integer_is.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { add } from "./add.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_halve } from "./app_code_lesson_while_halve.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_while_generic } from "./app_learn_js_lesson_while_generic.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { js_code_while_lines } from "./js_code_while_lines.mjs";
export function app_learn_js_lesson_while_double() {
  arguments_assert(arguments, 0);
  ("a while that doubles: let n = 3; while (n < 20) { n *= 2; } console.log(n); writes out 24");
  ("The one new fact is that a while can grow n by more each run: doubling adds 3 the first time, 6 the next, then 12, so each run has to be worked out rather than counted - halving, turned the other way.");
  ("Asked for by the human 2026-11-01, as the lesson after While halving: *= 2 counting up.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three - no more than ",
    fn_name("app_code_while_runs_max"),
    " allows, as in While. No two groups write out the same number, so a screen never shows one answer twice.");
  ("Reading forwards, the wrong answers are n after one run fewer, one run more, and where n starts, each once and never the answer, never below where n starts and never a number with a point.");
  ("Reading backwards, the wrong program is the same program compared against one more than what it writes out, so it runs once more; or, for a program already running three times, against half of what it writes out, so it runs once fewer.");
  ("The numbers are chosen so that n never lands exactly on the number it is compared against, except in the backwards wrong program.");
  ("The writing is a first draft by Claude 2026-11-01.");
  let less = js_operator_less_than_symbol();
  let asterisk = js_operator_asterisk_symbol();
  let name = "n";
  let groups = [
    [
      [9, 5, 2],
      [7, 4, 2],
    ],
    [
      [3, 5, 2],
      [4, 7, 2],
    ],
    [
      [3, 10, 2],
      [5, 15, 2],
    ],
    [
      [3, 20, 2],
      [5, 30, 2],
    ],
  ];
  function possible(start, value) {
    "a wrong answer is a whole number, never below where n starts, since n only grows";
    let p = integer_is(value) && less_than_equal(start, value);
    return p;
  }
  function bound_past(ended) {
    "one more than where n ends, so n is still less once more";
    let past = add(ended, 1);
    return past;
  }
  function above(root, context, program_lines, said) {
    "While halving remembered, then a while doubling n";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_halve,
      ["a ", "while", " can halve ", name, " each time, with ", "/=", "."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "A ",
      "while",
      " can also double ",
      name,
      " each time, with ",
      "*=",
      ", so it adds more each run:",
    ]);
    let double_lines = program_lines(3, 20, 2);
    app_learn_js_code_lines_writes_out(box_two, double_lines, "24");
    said(box_two, 3, 20, 6, true);
    said(box_two, 6, 20, 12, true);
    said(box_two, 12, 20, 24, true);
    said(box_two, 24, 20, 24, false);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "While doubling",
    "while (n < 20) { n *= 2; }",
  );
  let lesson = app_learn_js_lesson_while_generic({
    name_id,
    comparison: less,
    change: asterisk,
    groups,
    step: multiply,
    step_back: divide,
    possible,
    bound_past,
    above,
    loop_lines: js_code_while_lines,
  });
  return lesson;
}
