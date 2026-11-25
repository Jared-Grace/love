import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_code_array_while_three_ways } from "./app_learn_js_code_array_while_three_ways.mjs";
import { range_1 } from "./range_1.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_while_smaller_first } from "./app_learn_js_lesson_array_while_smaller_first.mjs";
import { app_learn_js_lesson_else_if } from "./app_learn_js_lesson_else_if.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_while_compare_each() {
  arguments_assert(arguments, 0);
  ('comparing a[i] with b[j] each time round, three ways: while (i < a.length && j < b.length) { if (a[i] === b[j]) { console.log(a[i] + " === " + b[j]); i++; j++; } else if (a[i] < b[j]) { console.log(a[i] + " < " + b[j]); i++; } else { console.log(a[i] + " > " + b[j]); j++; } } writes out 1 < 2, 4 > 2, 4 === 4 and 6 < 9 for a = [1, 4, 6] and b = [2, 4, 9]');
  ("2026-11-25, at the human's asking, the step before In both, both in order: the body of that while on its own, each branch writing out the pair it compared with its sign, so which branch ran, and which index moved, is seen before anything is kept. The one new fact is a third branch, where the two are the same and both i and j move.");
  ("Not picked: each branch writing out only its sign. The pair says why that branch ran.");
  ("The inputs are a and b, two numbers each from 1 to 6, each sorted, one number in both - two, like Merge's, so the step-by-step walkthrough stays short. Built, not drawn again: half match last, writing out all three signs; half match first, so a wrong move after === shows - with two numbers each, a match that comes last ends the while whatever moves.");
  ("The wrong programs are: the === branch moving only i, the < branch moving j, and the > branch moving i. Each still moves one index every time round, so none runs forever.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [
    [1, 4, 6],
    [2, 4, 9],
  ];
  function program_with(input, move_same, move_less, move_greater) {
    "every branch writing out a[i] and b[j] with its sign between them";
    let code = app_learn_js_code_array_while_three_ways(
      input,
      true,
      move_same,
      move_less,
      move_greater,
    );
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, ["i", "j"], ["i"], ["j"]);
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, ["i"], ["i"], ["j"]);
    let v2 = program_with(input3, ["i", "j"], ["j"], ["j"]);
    let v3 = program_with(input3, ["i", "j"], ["i"], ["i"]);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function input_drawn(match_last) {
    "three different numbers from 1 to 6, x < y < z. Match last: a = [x, z] and b = [y, z], or the other way round, writing out < and > then ===. Match first: a = [x, y] and b = [x, z], or the other way round, writing out === then one more";
    let list = range_1(6);
    let numbers = list_shuffle_take(list, 3);
    let n = list_sort_number(numbers);
    let one = match_last ? [n[0], n[2]] : [n[0], n[1]];
    let two = match_last ? [n[1], n[2]] : [n[0], n[2]];
    let swapped = list_shuffle_take([true, false], 1)[0];
    let input5 = swapped ? [two, one] : [one, two];
    return input5;
  }
  function inputs_get() {
    let kinds = [true, false, true, false, true, false];
    let inputs = list_map(kinds, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Smaller first and else if remembered, then the three ways a[i] and b[j] can compare";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_while_smaller_first,
      [
        "the ",
        "while",
        " compares ",
        "a[i]",
        " with ",
        "b[j]",
        " until one of them runs out",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_else_if,
      [
        "",
        "else if",
        " asks its test only when the test before it was ",
        "false",
        "",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("one thought to a line");
    let lines_said = [
      ["", "a", " and ", "b", " are each in order, smallest first"],
      [
        "Each time round, ",
        "a[i]",
        " and ",
        "b[j]",
        " are the same, or one of them is smaller",
      ],
      [
        "Each branch writes out the two it compared, with ",
        "===",
        ", ",
        "<",
        " or ",
        ">",
        " between them",
      ],
      ["When they are the same, both ", "i", " and ", "j", " move"],
      ["Otherwise only the index of the smaller one moves"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code4 = program_of(example_input);
    let lines = text_split_newline(code4);
    let value = eval_console_log_lines(code4);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "After ",
      "6 < 9",
      ", ",
      "i",
      " is ",
      "3",
      ", past the end of ",
      "a",
      ", so the ",
      "while",
      " stops",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Same, smaller or larger",
    "else if (a[i] < b[j])",
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
