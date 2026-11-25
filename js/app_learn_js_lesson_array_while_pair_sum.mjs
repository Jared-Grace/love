import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_1 } from "./range_1.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_while_true_find } from "./app_learn_js_lesson_array_while_true_find.mjs";
import { app_learn_js_lesson_array_pair_sum_step } from "./app_learn_js_lesson_array_pair_sum_step.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_while_pair_sum() {
  arguments_assert(arguments, 0);
  ("two numbers that add up to 10 in an array in order: i at the first index, j at the last, while (true) { let sum = a[i] + a[j]; if (sum === 10) { break; } else if (sum < 10) { i++; } else { j--; } } then a[i] and a[j] written out");
  ("2026-11-25, at the human's asking, in the shape the human gave: while (true), the sum worked out once each time round, and the three ordering branches. Loop until break and Too small or too big come just before it, so the one new thing is the step inside the loop.");
  ("Why it never misses a pair: when sum is too small, a[i] is too small even with the biggest number left, so no pair holds it and i can move on; too big is the same for a[j]. So it stops at the outermost pair adding up to 10.");
  ("Each input is five or six different numbers from 1 to 9 in order, holding at least one pair that adds up to 10, because without one i and j pass each other and the loop never stops; the lesson says so.");
  ("The wrong programs are: writing out i and j in place of a[i] and a[j], and writing out sum. Both have the right loop, so both stop. Wrong loops - the moves swapped, or j starting one early - are left out on purpose: they can walk off the array and never stop. The other wrong answers offered are any other pair adding up to 10, and the found pair written out the other way round.");
  ("The writing is a first draft by Claude 2026-11-25.");
  function program_with(items, logged) {
    "the array, i and j at the ends, the loop that breaks at a sum of 10, then logged written out";
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let i = 0;",
      "let j = a.length - 1;",
      "while (true) {",
      "  let sum = a[i] + a[j];",
      "  if (sum === 10) {",
      "    break;",
      "  } else if (sum < 10) {",
      "    i++;",
      "  } else {",
      "    j--;",
      "  }",
      "}",
    ];
    for (let name of logged) {
      lines.push("console.log(" + name + ");");
    }
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, ["a[i]", "a[j]"]);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, ["i", "j"]);
    let v2 = program_with(items3, ["sum"]);
    let programs = [v, v2];
    return programs;
  }
  function pairs_of(items4) {
    "every pair of items adding up to 10, smaller first";
    let pairs = [];
    for (let x of items4) {
      if (less_than(x, 5) && items4.includes(subtract(10, x))) {
        let difference = subtract(10, x);
        pairs.push([x, difference]);
      }
    }
    return pairs;
  }
  function wrong_outputs_of(items5) {
    let r = [];
    for (let pair of pairs_of(items5)) {
      r.push(pair[0] + "\n" + pair[1]);
      r.push(pair[1] + "\n" + pair[0]);
    }
    return r;
  }
  function input_drawn(count) {
    "count different numbers from 1 to 9 in order, holding a pair that adds up to 10";
    while (true) {
      let list = range_1(9);
      let list2 = list_shuffle_take(list, count);
      let items6 = list_sort_number(list2);
      if (greater_than(pairs_of(items6).length, 0)) {
        return items6;
      }
    }
  }
  function inputs_get() {
    "three of five numbers and three of six";
    let counts = [5, 5, 5, 6, 6, 6];
    let inputs = list_map(counts, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Loop until break and Too small or too big remembered, then the step inside the loop";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_while_true_find,
      ["", "while (true)", " stops only at ", "break;", ""],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_pair_sum_step,
      [
        "If ",
        "sum",
        " is too small, ",
        "i++;",
        ", and if too big, ",
        "j--;",
        "",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Put that step in a ",
      "while (true)",
      ", with ",
      "break;",
      " when ",
      "sum",
      " is ",
      "10",
      ":",
    ]);
    let code3 = program_of([1, 2, 4, 6, 7]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    let lines_said = [
      ["", "1 + 7", " is ", "8", ", too small: ", "i++;", ""],
      ["", "2 + 7", " is ", "9", ", too small: ", "i++;", ""],
      ["", "4 + 7", " is ", "11", ", too big: ", "j--;", ""],
      ["", "4 + 6", " is ", "10", ": ", "break;", ""],
      [
        "There must be two numbers that add up to ",
        "10",
        ": with none, the loop never stops",
      ],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Two that add up to 10",
    "sum === 10",
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
