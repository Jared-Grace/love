import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_swap_name } from "./app_learn_js_lesson_array_swap_name.mjs";
import { app_learn_js_lesson_string_palindrome_half } from "./app_learn_js_lesson_string_palindrome_half.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_reverse_mirror() {
  arguments_assert(arguments, 0);
  ("an array turned around in place, each item in its first half swapped with its mirror: let a = [5, 8, 3, 9]; let half = a.length / 2; for (let i = 0; i < half; i++) { let j = a.length - 1 - i; let temp = a[i]; a[i] = a[j]; a[j] = temp; } console.log(a); writes out [9, 3, 8, 5]");
  ("2026-11-22, at the human's asking: the mirror index and stopping at half, from the palindrome lessons, put together with the swap of Swapping at a name, so the array is turned around without a new one. It stands just before Reverse, which then names it as the long way of a.reverse(), since both change a itself.");
  ("half is a line of its own, and j too, because for (let i = 0; i < a.length / 2; i++) { is forty characters, past what a phone shows on one line. An odd count still works: the middle item is swapped with itself.");
  ("Numbers rather than words, three to five of them, all different, so turning one around always changes it and five fit a phone's width.");
  ("The wrong programs are: i < a.length (every pair swapped twice, so a comes back as it was - the lesson of Only half again), no temp (one item lost), and j as a.length - 1 (every item swapped with the last).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = [5, 8, 3, 9];
  let swap_body = ["  let temp = a[i];", "  a[i] = a[j];", "  a[j] = temp;"];
  function inputs_get() {
    "six arrays of different numbers, three, four and five long twice each, shuffled";
    function input_sized(size) {
      let numbers = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], size);
      return numbers;
    }
    let inputs = list_map([3, 4, 5, 3, 4, 5], input_sized);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function program_with(numbers, until, j_value, body) {
    "let a = numbers; let half = a.length / 2; a loop to until, j set to j_value, then body; console.log(a);";
    let codes = list_map(numbers, json_to);
    let lines = [
      "let a = " + js_code_array(codes) + ";",
      "let half = a.length / 2;",
      "for (let i = 0; i < " + until + "; i++) {",
      "  let j = " + j_value + ";",
      ...body,
      "}",
      "console.log(a);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(numbers2) {
    let code2 = program_with(numbers2, "half", "a.length - 1 - i", swap_body);
    return code2;
  }
  function wrong_programs_of(numbers3) {
    let v = program_with(numbers3, "a.length", "a.length - 1 - i", swap_body);
    let v2 = program_with(numbers3, "half", "a.length - 1 - i", [
      "  a[i] = a[j];",
      "  a[j] = a[i];",
    ]);
    let v3 = program_with(numbers3, "half", "a.length - 1", swap_body);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(numbers4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the swap and the mirror index stopping at half remembered, then the two put together";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_swap_name,
      [
        "",
        "let temp = a[i]; a[i] = a[i + 1]; a[i + 1] = temp;",
        " swaps ",
        "a[i]",
        " and ",
        "a[i + 1]",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_string_palindrome_half,
      [
        "",
        "w.length - 1 - i",
        " is the mirror index of ",
        "i",
        ", and ",
        "i < w.length / 2",
        " stops at the middle",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "With ",
      "j",
      " as the mirror index in place of ",
      "i + 1",
      ", swapping each item in the first half with its mirror turns ",
      "a",
      " around, without a new array:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "Going past ",
      "half",
      " would swap each pair back again",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Reversing in place",
    "a[j] = temp;",
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
