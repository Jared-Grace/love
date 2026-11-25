import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_1 } from "./range_1.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_while_two_indexes } from "./app_learn_js_lesson_array_while_two_indexes.mjs";
import { app_learn_js_lesson_else_if_compare_three } from "./app_learn_js_lesson_else_if_compare_three.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_pair_sum_step() {
  arguments_assert(arguments, 0);
  ('one step of looking for two numbers that add up to 10 in an array in order: let sum = a[i] + a[j]; if (sum === 10) { console.log("found"); } else if (sum < 10) { i++; } else { j--; } - too small moves i right, too big moves j left');
  ("2026-11-25, at the human's asking: the second of three lessons ending in two numbers that add up to 10. The sum is worked out once, and the three branches are ordering - the same, smaller or bigger - which Same, smaller or bigger teaches on its own. No loop yet: one step, then i and j are written out.");
  ("Each input is five different numbers from 1 to 9 in order, with i before j; a set holds a sum of 10 twice, too small twice and too big twice, so every branch is seen.");
  ("The wrong programs are: i++ and j-- swapped (too small moves j, too big moves i), and two ifs in place of if and else if (when the sum is 10, the else still runs j--). Neither has a loop, so both stop.");
  ("The writing is a first draft by Claude 2026-11-25.");
  function program_with(input, small_move, big_move, joiner) {
    "the array and its two indexes, the sum, then the three branches, then i and j written out";
    let items = input.items;
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let i = " + input.i + ";",
      "let j = " + input.j + ";",
      "let sum = a[i] + a[j];",
      "if (sum === 10) {",
      '  console.log("found");',
      "}" + joiner + "if (sum < 10) {",
      "  " + small_move,
      "} else {",
      "  " + big_move,
      "}",
      "console.log(i);",
      "console.log(j);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "i++;", "j--;", " else ");
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "j--;", "i++;", " else ");
    let v2 = program_with(input3, "i++;", "j--;", "\n");
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function kind_of(sum) {
    if (sum === 10) {
      return "same";
    }
    if (sum < 10) {
      return "small";
    }
    return "big";
  }
  function input_drawn(kind) {
    "five different numbers in order and two indexes, j at least two past i so a move never lands i on j, whose sum is of kind";
    while (true) {
      let items2 = list_sort_number(list_shuffle_take(range_1(9), 5));
      let picked = list_sort_number(list_shuffle_take([0, 1, 2, 3, 4], 2));
      let input5 = {
        items: items2,
        i: picked[0],
        j: picked[1],
      };
      let sum2 = items2[input5.i] + items2[input5.j];
      let apart = input5.j - input5.i >= 2;
      if (apart && kind_of(sum2) === kind) {
        return input5;
      }
    }
  }
  function inputs_get() {
    "a sum of 10 twice, too small twice and too big twice";
    let kinds = ["same", "same", "small", "small", "big", "big"];
    let inputs = list_map(kinds, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Two indexes and the three branches remembered, then which index moves";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_while_two_indexes,
      ["", "i", " can start at the first index and ", "j", " at the last"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_else_if_compare_three,
      [
        "",
        "if",
        ", ",
        "else if",
        " and ",
        "else",
        " pick one of three: the same, smaller or bigger",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      ["Here ", "a", " is in order, smallest first"],
      ["We look for two numbers that add up to ", "10", ""],
      [
        "",
        "let sum = a[i] + a[j];",
        " adds the numbers at ",
        "i",
        " and ",
        "j",
        "",
      ],
      ["If ", "sum", " is too small, ", "i++;", " moves to a bigger number"],
      ["If ", "sum", " is too big, ", "j--;", " moves to a smaller number:"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of({
      items: [1, 3, 4, 6, 8],
      i: 0,
      j: 4,
    });
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "1 + 8",
      " is ",
      "9",
      ", too small, so ",
      "i",
      " moves from ",
      "0",
      " to ",
      "1",
      "",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Too small or too big",
    "let sum = a[i] + a[j];",
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
