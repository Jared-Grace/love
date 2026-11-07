import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { add } from "./add.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_greater_equal } from "./app_code_lesson_while_greater_equal.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_code_lesson_while_generic } from "./app_code_lesson_while_generic.mjs";
import { subtract } from "./subtract.mjs";
import { js_code_while_lines } from "./js_code_while_lines.mjs";
export function app_code_lesson_while_not_equal() {
  arguments_assert(arguments, 0);
  ("a while asking !==: let n = 1; while (n !== 7) { n += 2; } console.log(n); writes out 7, because the { ... } runs until n is exactly 7");
  ("The one new fact: with !== a while stops only when n lands exactly on the number. Every program here lands on it, so none runs forever; that a step passing the number never stops is said once above and never asked.");
  ("Asked for by the human 2026-11-01, straight after While asking >=.");
  ("Each screen has four programs: one that never runs, because n starts on the number, and ones that run once, twice and three times.");
  ("The backwards wrong program is compared against a number n also lands on, one step further or, at the most runs, one step sooner, so it too always stops.");
  ("Reading forwards, the wrong answers are n after one run fewer, one run more, and where n starts; each once, never the answer, never below where n starts.");
  ("The writing is a first draft by Claude 2026-11-01.");
  let not_equal_symbol = js_operator_bang_double_equal_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  let groups = [
    [
      [4, 4, 2],
      [5, 5, 3],
    ],
    [
      [3, 5, 2],
      [2, 5, 3],
    ],
    [
      [2, 6, 2],
      [1, 7, 3],
    ],
    [
      [1, 7, 2],
      [2, 11, 3],
    ],
  ];
  function possible(start, value) {
    "a wrong answer is never below where n starts, since n only grows";
    let p = less_than_equal(start, value);
    return p;
  }
  function bound_past(ended, amount) {
    "compared against one step past where n ends, n lands there one run later, so it runs once more and still stops";
    let v = add(ended, amount);
    return v;
  }
  function above(root, context, program_lines, said) {
    "While asking >= remembered, then a while asking !==";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_greater_equal,
      [
        "with ",
        ">=",
        ", a ",
        "while",
        " runs once more when ",
        name,
        " lands exactly on the number.",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With ",
      not_equal_symbol,
      ", a ",
      "while",
      " keeps going until ",
      name,
      " is exactly the number:",
    ]);
    let lines = program_lines(1, 7, 2);
    app_learn_js_code_lines_writes_out(box_two, lines, "7");
    said(box_two, 1, 7, 3, true);
    said(box_two, 3, 7, 5, true);
    said(box_two, 5, 7, 7, true);
    said(box_two, 7, 7, 7, false);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "If ",
      name,
      " stepped past the number without landing on it, ",
      not_equal_symbol,
      " would stay ",
      "true",
      " and the ",
      "while",
      " would never stop. Every program here lands on it.",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "While asking !==",
    "while (n !== 7) { ... }",
  );
  let lesson = app_code_lesson_while_generic({
    name_id,
    comparison: not_equal_symbol,
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
