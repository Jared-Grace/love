import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_smallest } from "./app_learn_js_lesson_array_for_smallest.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_range() {
  arguments_assert(arguments, 0);
  ("how far apart the biggest and smallest items of an array are: let big = 0; let small = 10; one loop keeping both with an if each; console.log(big - small); writes out 7 for [4, 9, 2, 6]");
  ("2026-11-23, at the human's asking: after Count the doubled words. Biggest number and Smallest number in one loop, two ifs one after the other, then one minus the other. Nothing in it is new; the ifs sit side by side, neither inside the other.");
  ("The arrays hold numbers 1 to 9, as Biggest number's and Smallest number's do, so big starting at 0 and small at 10 are below and above every item.");
  ("The wrong programs are: console.log(small - big) (taken the wrong way round, below zero), console.log(big + small) (added) and small starting at 0 (small stays 0, so it writes out the biggest).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = [4, 9, 2, 6];
  function inputs_get() {
    "five arrays of numbers 1 to 9, shuffled";
    let arrays = [
      [4, 9, 2, 6],
      [3, 8, 5],
      [7, 1, 6, 4],
      [2, 5, 9],
      [8, 3, 6, 5],
    ];
    let shuffled = list_shuffle_take(arrays, 5);
    return shuffled;
  }
  function program_with(items, small_start, logged) {
    let list = list_map(items, json_to);
    let written = list_join_comma_space(list);
    let lines = [
      "let a = [" + written + "];",
      "let big = 0;",
      "let small = " + small_start + ";",
      "for (let i = 0; i < a.length; i++) {",
      "  if (a[i] > big) {",
      "    big = a[i];",
      "  }",
      "  if (a[i] < small) {",
      "    small = a[i];",
      "  }",
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, "10", "big - small");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "10", "small - big");
    let v2 = program_with(items3, "10", "big + small");
    let v3 = program_with(items3, "0", "big - small");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "smallest remembered, then biggest and smallest in one loop, one minus the other";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_smallest,
      [
        "",
        "if (a[i] < small) { small = a[i]; }",
        " keeps the smallest, as ",
        "if (a[i] > big) { big = a[i]; }",
        " keeps the biggest",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Both ",
      "if",
      "s can go in one loop, one after the other. Then ",
      "big - small",
      " is how far apart they are:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Biggest minus smallest",
    "big - small",
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
