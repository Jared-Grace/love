import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_1 } from "./range_1.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_while_two_meet } from "./app_learn_js_lesson_while_two_meet.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_while_two_indexes() {
  arguments_assert(arguments, 0);
  ("two indexes of one array moving towards each other, written out each time: let i = 0; let j = a.length - 1; while (i < j) { console.log(i); console.log(j); i++; j--; } - each i is paired with its mirror j, every pair once, and the middle item of an odd-length array pairs with nothing");
  ("2026-11-25, at the human's asking: Turn round with two indexes was the first to use while (i < j) on an array, and never said it visits every mirror pair once. This lesson shows only that, writing out the indexes, before anything is swapped or compared.");
  ("The inputs are arrays of 2 to 7 numbers, so both even and odd lengths are drawn; only the indexes are written out.");
  ("The wrong programs are: i <= j (the middle index of an odd length is written out, paired with itself), no j-- (i is paired with the last index every time), and j starting at a.length (one past the last index).");
  ("The writing is a first draft by Claude 2026-11-25.");
  function program_with(items, j_start, test, moves) {
    "the array, i at the start and j at j_start, then a while asking test, writing out i and j, then moves";
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let i = 0;",
      "let j = " + j_start + ";",
      "while (" + test + ") {",
      "  console.log(i);",
      "  console.log(j);",
    ];
    for (let line of moves) {
      lines.push("  " + line);
    }
    lines.push("}");
    let code = list_join_newline(lines);
    return code;
  }
  let last = "a.length - 1";
  let both = ["i++;", "j--;"];
  function program_of(items2) {
    let code2 = program_with(items2, last, "i < j", both);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, last, "i <= j", both);
    let v2 = program_with(items3, last, "i < j", ["i++;"]);
    let v3 = program_with(items3, "a.length", "i < j", both);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function input_drawn(count) {
    let list = range_1(9);
    let items5 = list_shuffle_take(list, count);
    return items5;
  }
  function inputs_get() {
    "one of each length from 2 to 7";
    let counts = [2, 3, 4, 5, 6, 7];
    let inputs = list_map(counts, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Two numbers meeting remembered, then i and j as two places in an array";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_while_two_meet,
      [
        "",
        "while (a < b) { a++; b--; }",
        " moves two numbers towards each other until they meet",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    let lines_said = [
      [
        "Now the two numbers are places in an array: ",
        "i",
        " starts at the first index and ",
        "j",
        " at the last",
      ],
      [
        "Each time, ",
        "i",
        " is paired with its mirror ",
        "j",
        ": the first with the last, the second with the second last, and so on",
      ],
      ["Every pair is visited once:"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_two, said);
    }
    let code3 = program_of([3, 4, 2, 8, 1]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "After ",
      "1",
      " and ",
      "3",
      ", both are ",
      "2",
      ", so ",
      "i < j",
      " is ",
      "false",
      ". Index ",
      "2",
      ", the middle, pairs with nothing",
    ]);
    let code4 = program_of([3, 4, 2, 8]);
    app_learn_js_div_cycle_code(box_two, [
      "With an even length there is no middle:",
    ]);
    let lines3 = text_split_newline(code4);
    let value2 = eval_console_log_lines(code4);
    app_learn_js_code_lines_writes_out(box_two, lines3, value2);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Two indexes meeting",
    "while (i < j)",
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
