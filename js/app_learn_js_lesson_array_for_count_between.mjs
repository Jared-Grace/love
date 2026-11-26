import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { multiply } from "./multiply.mjs";
import { floor } from "./floor.mjs";
import { not } from "./not.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_expression_in_between } from "./app_learn_js_lesson_expression_in_between.mjs";
import { app_learn_js_lesson_array_for_count } from "./app_learn_js_lesson_array_for_count.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_count_between() {
  arguments_assert(arguments, 0);
  ("how many numbers are from 3 to 7: let count = 0; for (let i = 0; i < a.length; i++) { if (3 <= a[i] && a[i] <= 7) { count++; } } console.log(count);");
  ("2026-11-26, changed the same day: written 3 <= a[i] && a[i] <= 7 rather than a[i] >= 3, since In between teaches a < b && b < c with the middle repeated and the ends outside; only <= for < is new.");
  ("2026-11-26, at the human's asking, just after the counting and keeping lessons with an if. In between already joins two comparisons with &&, and How many joys? already counts; the new fact is the joined test inside a loop's if. Always 3 to 7, so the title can say it.");
  ("Each input is six numbers from 1 to 9, drawn again until 3 or 7 is among them, some are inside and some outside, and the wrong programs all give other answers.");
  ("The wrong programs are: || (every number is at least 3 or at most 7, so all are counted), > 3 && < 7 (3 and 7 left out), and >= 3 alone (the big ones counted too). The loop counts up to a.length, so all stop. The other wrong answer offered is how many are outside.");
  ("The writing is a first draft by Claude 2026-11-26.");
  function program_with(items, test) {
    "the array, count at 0, the loop counting when test is true, and count written out";
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let count = 0;",
      "for (let i = 0; i < a.length; i++) {",
      "  if (" + test + ") {",
      "    count++;",
      "  }",
      "}",
      "console.log(count);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let right_test = "3 <= a[i] && a[i] <= 7";
  let tests_wrong = [
    "3 <= a[i] || a[i] <= 7",
    "3 < a[i] && a[i] < 7",
    "3 <= a[i]",
  ];
  function program_of(items2) {
    let code2 = program_with(items2, right_test);
    return code2;
  }
  function wrong_programs_of(items3) {
    function lambda(t) {
      let r = program_with(items3, t);
      return r;
    }
    let programs = list_map(tests_wrong, lambda);
    return programs;
  }
  function inside(items4) {
    function lambda2(x) {
      let r2 = greater_than_equal(x, 3) && less_than_equal(x, 7);
      return r2;
    }
    let n = items4.filter(lambda2).length;
    return n;
  }
  function wrong_outputs_of(items5) {
    let right = inside(items5);
    let difference = subtract(items5.length, right);
    let v = String(difference);
    let outputs = [v];
    return outputs;
  }
  function fits(items6) {
    let n2 = inside(items6);
    function lambda3(x) {
      let r3 = greater_than(x, 3) && less_than(x, 7);
      return r3;
    }
    function lambda4(x) {
      let ge = greater_than_equal(x, 3);
      return ge;
    }
    let difference2 = subtract(items6.length, n2);
    let answers = [
      n2,
      items6.length,
      items6.filter(lambda3).length,
      items6.filter(lambda4).length,
      difference2,
    ];
    let differ = equal(new Set(answers).size, answers.length);
    let r4 = differ && (items6.includes(3) || items6.includes(7));
    return r4;
  }
  function draw() {
    function lambda5() {
      let left = Math.random();
      let p = multiply(left, 9);
      let r5 = 1 + floor(p);
      return r5;
    }
    let list = new Array(6).fill(0);
    let items7 = list_map(list, lambda5);
    return items7;
  }
  function input_drawn() {
    "six numbers, drawn again until every program gives its own answer";
    let items8 = draw();
    while (not(fits(items8))) {
      items8 = draw();
    }
    return items8;
  }
  function inputs_get() {
    "six arrays of six numbers";
    function lambda6() {
      let r6 = input_drawn();
      return r6;
    }
    let inputs = list_map([0, 0, 0, 0, 0, 0], lambda6);
    return inputs;
  }
  function above(root, context) {
    "&& for in between and counting remembered, then the numbers from 3 to 7 counted";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_expression_in_between,
      [
        "",
        "a < b && b < c",
        " is ",
        "true",
        " when ",
        "b",
        " is between ",
        "a",
        " and ",
        "c",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_count,
      [
        "",
        "count++;",
        " in the ",
        "if",
        " counts each time the ",
        "if",
        " is ",
        "true",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "With ",
      "<=",
      " in place of ",
      "<",
      ", ",
      "3",
      " and ",
      "7",
      " count too:",
    ]);
    let code3 = program_of([2, 5, 8, 3, 7, 9]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "5",
      ", ",
      "3",
      " and ",
      "7",
      " are from ",
      "3",
      " to ",
      "7",
      "",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "How many are from 3 to 7?",
    "if (3 <= a[i] && a[i] <= 7)",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
