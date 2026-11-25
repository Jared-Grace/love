import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { range_1 } from "./range_1.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_while_two_indexes } from "./app_learn_js_lesson_array_while_two_indexes.mjs";
import { app_learn_js_lesson_array_reverse_mirror } from "./app_learn_js_lesson_array_reverse_mirror.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_while_reverse() {
  arguments_assert(arguments, 0);
  ("an array turned round by two indexes meeting: let i = 0; let j = a.length - 1; while (i < j) { let temp = a[i]; a[i] = a[j]; a[j] = temp; i++; j--; } console.log(a);");
  ("2026-11-25, at the human's asking: Two numbers meeting, now as two places in an array. Turn round by mirror worked j out from i inside a for; here j is its own name, moving down as i moves up.");
  ("The inputs are 2 to 5 numbers from 1 to 9, each different, so every swap shows; odd lengths show the middle item staying where it is.");
  ("The wrong programs are: no i++ (a[0] is swapped with each item from the end down), no j-- (each item is swapped with the last), and no temp, setting a[i] = a[j] then a[j] = a[i] (the end half is copied over the front half).");
  ("The writing is a first draft by Claude 2026-11-25.");
  function program_with(items, body) {
    "the array, i at the start and j at the end, then a while running body while i < j, then the array written out";
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let i = 0;",
      "let j = a.length - 1;",
      "while (i < j) {",
    ];
    for (let line of body) {
      lines.push("  " + line);
    }
    lines.push("}");
    lines.push("console.log(a);");
    let code = list_join_newline(lines);
    return code;
  }
  let swap = ["let temp = a[i];", "a[i] = a[j];", "a[j] = temp;"];
  function program_of(items2) {
    let code2 = program_with(items2, [...swap, "i++;", "j--;"]);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, [...swap, "j--;"]);
    let v2 = program_with(items3, [...swap, "i++;"]);
    let v3 = program_with(items3, [
      "a[i] = a[j];",
      "a[j] = a[i];",
      "i++;",
      "j--;",
    ]);
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
    "two of each length from 3 to 5";
    let counts = [3, 4, 5, 3, 4, 5];
    let inputs = list_map(counts, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Two indexes meeting and Turn round by mirror remembered, then the swap at each pair";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_while_two_indexes,
      [
        "",
        "while (i < j)",
        ", with ",
        "i++;",
        " and ",
        "j--;",
        ", pairs each index ",
        "i",
        " with its mirror ",
        "j",
        ", every pair once",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_reverse_mirror,
      [
        "swapping each item with its mirror, from the other end, turns an array round",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      [
        "Here, each time, ",
        "a[i]",
        " and ",
        "a[j]",
        " are swapped, then ",
        "i",
        " moves up and ",
        "j",
        " moves down",
      ],
      [
        "When they meet in the middle, ",
        "i < j",
        " is ",
        "false",
        ", and the array is turned round:",
      ],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of([3, 4, 2, 8]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "First ",
      "3",
      " and ",
      "8",
      " are swapped, then ",
      "4",
      " and ",
      "2",
      "",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Turn round with two indexes",
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
