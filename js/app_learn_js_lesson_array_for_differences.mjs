import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_in_order } from "./app_learn_js_lesson_array_for_in_order.mjs";
import { app_learn_js_lesson_array_for_push_double } from "./app_learn_js_lesson_array_for_push_double.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_differences() {
  arguments_assert(arguments, 0);
  ("how much each number of an array goes up or down to the next: let d = []; for (let i = 0; i < a.length - 1; i++) { d.push(a[i + 1] - a[i]); } and a for loop writing out each item of d writes out 4, -3 and 5 for [3, 7, 4, 9]");
  ("2026-11-24, at the human's asking (differences between neighbours, agreed in the plan of that day). The loop of Is it in order?, which stops one early and reads a[i] beside a[i + 1], pushing something worked out from them as Doubled into a new array pushed a[i] * 2. Nothing in it is new. The plan wrote a[i] - a[i - 1] from i = 1; the same numbers come out of a[i + 1] - a[i], and that is the shape every neighbour lesson here already uses.");
  ("The arrays hold different numbers 1 to 9, so a difference is never 0 and goes down as well as up. Each set has arrays of 2 and 3 numbers twice and one each of 4 and 5, so the step-by-step quiz and the guided example, which draw only the questions whose loops run few times, always have some.");
  ("The wrong programs are: i < a.length (one run too many, reading past the end, so the last difference is NaN), a[i] - a[i + 1] (every difference turned around) and d.push(a[i + 1]) (the next numbers, not how far they move).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = [3, 7, 4, 9];
  let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function inputs_get() {
    "six arrays of different numbers 1 to 9, of 2, 3, 2, 3, 4 and 5 numbers, shuffled";
    let sizes = [2, 3, 2, 3, 4, 5];
    function array_of(size) {
      let taken = list_shuffle_take(pool, size);
      return taken;
    }
    let arrays = list_map(sizes, array_of);
    list_shuffle(arrays);
    return arrays;
  }
  function program_with(items, bound, pushed) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let lines = [
      "let a = " + array + ";",
      "let d = [];",
      "for (let i = 0; i < " + bound + "; i++) {",
      "  d.push(" + pushed + ");",
      "}",
      "for (let i = 0; i < d.length; i++) {",
      "  console.log(d[i]);",
      "}",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let right_pushed = "a[i + 1] - a[i]";
  function program_of(items2) {
    let code2 = program_with(items2, "a.length - 1", right_pushed);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "a.length", right_pushed);
    let v2 = program_with(items3, "a.length - 1", "a[i] - a[i + 1]");
    let v3 = program_with(items3, "a.length - 1", "a[i + 1]");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "comparing neighbours and pushing into a new array remembered, then the differences pushed";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_in_order,
      [
        "",
        "i < a.length - 1",
        " stops one early, so ",
        "a[i]",
        " and ",
        "a[i + 1]",
        " are every pair side by side",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_push_double,
      ["", "b.push(a[i] * 2);", " builds a new array from ", "a"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      right_pushed,
      " is how much the next number goes up, or down when it is below zero. Pushing it for every pair gives the differences between neighbours:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Differences between neighbours",
    "d.push(" + right_pushed + ");",
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
