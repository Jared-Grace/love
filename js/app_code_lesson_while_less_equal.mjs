import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while } from "./app_code_lesson_while.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_while_generic } from "./app_learn_js_lesson_while_generic.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { js_code_while_lines } from "./js_code_while_lines.mjs";
export function app_code_lesson_while_less_equal() {
  arguments_assert(arguments, 0);
  ("a while asking <=: let n = 1; while (n <= 7) { n += 3; } console.log(n); writes out 10, because when n is 7, 7 <= 7 is still true and the { ... } runs once more");
  ("The one new fact is that with <= a while keeps going when n lands exactly on the number it is compared against, and stops only once n is past it.");
  ("Chosen by Claude 2026-11-01, when the human asked for a while lesson with a simpler shape before An if inside a while: the same one-line { ... } as While, only the comparison new. Not picked: >=, which is the same fact counting down, and would be a second lesson saying it; < and <= in one lesson, which would ask two things at once.");
  ("Each screen has four programs: one that never runs, one that runs once because n starts on the number, one that runs twice and lands on the number, and one that runs twice and passes it without landing, so a learner cannot pass by always adding one more run.");
  ("No program runs more than twice, so the backwards wrong program, compared against where n ends, runs once more and still no more than three times.");
  ("Reading forwards, the wrong answers are n after one run fewer - what < would write out when n lands on the number - one run more, and where n starts; each once and never the answer.");
  ("The writing is a first draft by Claude 2026-11-01.");
  let less_equal = js_operator_less_than_equal_symbol();
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  let groups = [
    [
      [6, 4, 2],
      [9, 5, 3],
    ],
    [
      [4, 4, 3],
      [3, 3, 2],
    ],
    [
      [2, 5, 3],
      [1, 3, 2],
    ],
    [
      [1, 6, 3],
      [2, 5, 2],
    ],
  ];
  function possible(start, value) {
    "a wrong answer is never below where n starts, since n only grows";
    let p = less_than_equal(start, value);
    return p;
  }
  function bound_past(ended) {
    "compared against where n ends, n <= ended is true there, so it runs once more";
    return ended;
  }
  function above(root, context, program_lines, said) {
    "While remembered, then a while asking <=, which runs once more when n lands on the number";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_while, [
      "a ",
      "while",
      " runs its ",
      app_learn_js_braces_dots(),
      " again and again, while what it asks is ",
      "true",
      ".",
    ]);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "A ",
      "while",
      " can ask ",
      less_equal,
      ". When ",
      name,
      " lands exactly on the number, ",
      less_equal,
      " is still ",
      "true",
      ", so the ",
      app_learn_js_braces_dots(),
      " runs once more:",
    ]);
    let lines = program_lines(1, 7, 3);
    app_learn_js_code_lines_writes_out(box_two, lines, "10");
    said(box_two, 1, 7, 4, true);
    said(box_two, 4, 7, 7, true);
    said(box_two, 7, 7, 10, true);
    said(box_two, 10, 7, 10, false);
    let box_three = app_learn_js_container_light_blue(root);
    let landed = js_code_binary_spaced_nb(7, less, 7);
    app_learn_js_div_cycle_code(box_three, [
      "With ",
      less,
      " instead, ",
      landed,
      " is ",
      "false",
      ", so it would stop at ",
      "7",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "While asking <=",
    "while (n <= 7) { ... }",
  );
  let lesson = app_learn_js_lesson_while_generic({
    name_id,
    comparison: less_equal,
    change: plus,
    groups,
    step: add,
    step_back: subtract,
    possible,
    bound_past,
    above,
    loop_lines: js_code_while_lines,
  });
  return lesson;
}
