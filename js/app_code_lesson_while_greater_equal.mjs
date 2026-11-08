import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_equal_symbol } from "./js_operator_greater_than_equal_symbol.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_less_equal } from "./app_code_lesson_while_less_equal.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_while_generic } from "./app_learn_js_lesson_while_generic.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { js_code_while_lines } from "./js_code_while_lines.mjs";
export function app_code_lesson_while_greater_equal() {
  arguments_assert(arguments, 0);
  ("a while counting down asking >=: let n = 9; while (n >= 3) { n -= 3; } console.log(n); writes out 0, because when n is 3, 3 >= 3 is still true and the { ... } runs once more");
  ("The one new fact is the one While asking <= taught, counting down: with >= a while keeps going when n lands exactly on the number, and stops only once n is below it.");
  ("Asked for by the human 2026-11-01, as >= counting down, straight after While asking <=.");
  ("Each screen has four programs: one that never runs, one that runs once because n starts on the number, one that runs twice and lands on the number, and one that runs twice and passes it without landing, as in While asking <=.");
  ("No program runs more than twice, so the backwards wrong program, compared against where n ends, runs once more and still no more than three times. Every start is big enough that the wrong program never takes n below zero, since this course has not shown a number below zero.");
  ("Reading forwards, the wrong answers are n after one run fewer - what > would write out when n lands on the number - one run more, and where n starts; each once, never the answer, never above where n starts and never below zero.");
  ("The writing is a first draft by Claude 2026-11-01.");
  let greater_equal = js_operator_greater_than_equal_symbol();
  let greater = js_operator_greater_than_symbol();
  let minus = js_operator_minus_symbol();
  let name = "n";
  let groups = [
    [
      [3, 5, 2],
      [2, 4, 2],
    ],
    [
      [8, 8, 3],
      [7, 7, 3],
    ],
    [
      [10, 8, 2],
      [9, 6, 3],
    ],
    [
      [13, 8, 4],
      [12, 7, 3],
    ],
  ];
  function possible(start, value) {
    "a wrong answer is never above where n starts, since n only shrinks, and never below zero";
    let p = less_than_equal(value, start) && less_than_equal(0, value);
    return p;
  }
  function bound_past(ended) {
    "compared against where n ends, n >= ended is true there, so it runs once more";
    return ended;
  }
  function above(root, context, program_lines, said) {
    "While asking <= remembered, then the same counting down with >=";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_less_equal,
      [
        "with ",
        "<=",
        ", a ",
        "while",
        " runs once more when ",
        name,
        " lands exactly on the number.",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Counting down, ",
      greater_equal,
      " does the same. When ",
      name,
      " lands exactly on the number, ",
      greater_equal,
      " is still ",
      "true",
      ", so the ",
      app_learn_js_braces_dots(),
      " runs once more:",
    ]);
    let lines = program_lines(9, 3, 3);
    app_learn_js_code_lines_writes_out(box_two, lines, "0");
    said(box_two, 9, 3, 6, true);
    said(box_two, 6, 3, 3, true);
    said(box_two, 3, 3, 0, true);
    said(box_two, 0, 3, 0, false);
    let box_three = app_learn_js_container_light_blue(root);
    let landed = js_code_binary_spaced_nb(3, greater, 3);
    app_learn_js_div_cycle_code(box_three, [
      "With ",
      greater,
      " instead, ",
      landed,
      " is ",
      "false",
      ", so it would stop at ",
      "3",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "While asking >=",
    "while (n >= 3) { ... }",
  );
  let lesson = app_learn_js_lesson_while_generic({
    name_id,
    comparison: greater_equal,
    change: minus,
    groups,
    step: subtract,
    step_back: add,
    possible,
    bound_past,
    above,
    loop_lines: js_code_while_lines,
  });
  return lesson;
}
