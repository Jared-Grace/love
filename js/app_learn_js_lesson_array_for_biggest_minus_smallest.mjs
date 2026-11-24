import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_biggest } from "./app_learn_js_lesson_array_for_biggest.mjs";
import { app_learn_js_lesson_array_for_smallest } from "./app_learn_js_lesson_array_for_smallest.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_biggest_minus_smallest() {
  arguments_assert(arguments, 0);
  ("how far apart the biggest and smallest numbers of an array are: let big = 0; let small = 10; one loop with if (a[i] > big) { big = a[i]; } and then if (a[i] < small) { small = a[i]; }, then console.log(big - small); writes out 7 for [4, 2, 9]");
  ("2026-11-24, at the human's asking: Biggest number and Smallest number in one loop - two ifs one after the other, neither inside the other - and then their difference. The arrays hold different numbers 1 to 9, as those two lessons' do, so big starting at 0 and small at 10 still work.");
  ("Each set has arrays of 2, 3, 4 and 5 numbers and two more of 3 and 4, so the step-by-step quiz and the guided example, which draw only the questions whose loops run 1, 2 or 3 times, always have some.");
  ("The wrong programs are: small starting at 0 (stays 0, so it writes out big), big starting at 10 (stays 10, so it writes out 10 - small), console.log(small - big) (the difference turned around, below zero) and console.log(big + small).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = [4, 2, 9];
  let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function inputs_get() {
    "six arrays of different numbers 1 to 9, of 2, 3, 4, 5, 3 and 4 numbers, shuffled";
    let sizes = [2, 3, 4, 5, 3, 4];
    function array_of(size) {
      let taken = list_shuffle_take(pool, size);
      return taken;
    }
    let arrays = list_map(sizes, array_of);
    list_shuffle(arrays);
    return arrays;
  }
  function program_with(items, big_start, small_start, logged) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let lines = [
      "let a = " + array + ";",
      "let big = " + big_start + ";",
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
  let right_logged = "big - small";
  function program_of(items2) {
    let code2 = program_with(items2, "0", "10", right_logged);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "0", "0", right_logged);
    let v2 = program_with(items3, "10", "10", right_logged);
    let v3 = program_with(items3, "0", "10", "small - big");
    let v4 = program_with(items3, "0", "10", "big + small");
    let programs = [v, v2, v3, v4];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "biggest and smallest remembered, then both kept in one loop and their difference written out";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_biggest,
      ["", "if (a[i] > big) { big = a[i]; }", " keeps the biggest number"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_smallest,
      ["", "if (a[i] < small) { small = a[i]; }", " keeps the smallest number"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "One loop can keep both the smallest and biggest numbers: put one ",
      "if",
      " after the other. After the loop, ",
      right_logged,
      " is how far apart the biggest and smallest numbers are:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Biggest minus smallest",
    right_logged,
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
