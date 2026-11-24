import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_in_order } from "./app_learn_js_lesson_array_for_in_order.mjs";
import { app_learn_js_lesson_array_for_count } from "./app_learn_js_lesson_array_for_count.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_steps_up() {
  arguments_assert(arguments, 0);
  ("how many times the next number of an array is bigger: let count = 0; for (let i = 0; i < a.length - 1; i++) { if (a[i] < a[i + 1]) { count++; } } console.log(count); writes out 2 for [3, 7, 4, 9]");
  ("2026-11-25, at the human's asking (item 2 of the array lessons offered that day). The loop of Is it in order?, which stops one early and compares each pair side by side, counting with count++ as Count did rather than setting false. Nothing in it is new.");
  ("The arrays hold different numbers 1 to 9, 3 to 5 numbers long. An array is kept only when every wrong program writes out something other than the answer, so each wrong answer is always on offer.");
  ("The wrong programs are: a[i] > a[i + 1] (the steps down), let count = 1 (one too many) and count = 1 in place of count++ (only whether there was a step up).");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [3, 7, 4, 9];
  let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function program_with(items, start, condition, counted) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let lines = [
      "let a = " + array + ";",
      "let count = " + start + ";",
      "for (let i = 0; i < a.length - 1; i++) {",
      "  if (" + condition + ") {",
      "    " + counted,
      "  }",
      "}",
      "console.log(count);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let right_condition = "a[i] < a[i + 1]";
  function program_of(items2) {
    let code2 = program_with(items2, "0", right_condition, "count++;");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "0", "a[i] > a[i + 1]", "count++;");
    let v2 = program_with(items3, "1", right_condition, "count++;");
    let v3 = program_with(items3, "0", right_condition, "count = 1;");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function every_wrong_differs(items5) {
    let code4 = program_of(items5);
    let answer = eval_console_log_lines(code4);
    let list = wrong_programs_of(items5);
    let outputs = list_map(list, eval_console_log_lines);
    let same = list_includes(outputs, answer);
    let n = not(same);
    return n;
  }
  function array_of(size) {
    "different numbers 1 to 9, tried again until every wrong program writes out something else";
    while (true) {
      let taken = list_shuffle_take(pool, size);
      if (every_wrong_differs(taken)) {
        return taken;
      }
    }
  }
  function inputs_get() {
    let sizes = [3, 4, 3, 4, 5, 5];
    let arrays = list_map(sizes, array_of);
    return arrays;
  }
  function above(root, context) {
    "the pairs side by side and count++ remembered, then the steps up counted";
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
      app_learn_js_lesson_array_for_count,
      ["", "count++;", " inside an ", "if", " counts the times it runs"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      right_condition,
      " is true when the next number is bigger, a step up. Counting it for every pair gives how many steps up there are:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Count the steps up",
    right_condition,
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
