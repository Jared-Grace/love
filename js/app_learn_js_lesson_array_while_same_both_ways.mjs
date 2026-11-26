import { divide_ceil } from "./divide_ceil.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { range_1 } from "./range_1.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_set } from "./list_set.mjs";
import { modulo } from "./modulo.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_while_reverse } from "./app_learn_js_lesson_array_while_reverse.mjs";
import { app_learn_js_lesson_array_for_found } from "./app_learn_js_lesson_array_for_found.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_while_same_both_ways() {
  arguments_assert(arguments, 0);
  ("an array read the same both ways, checked by two indexes meeting: let same = true; while (i < j) { if (a[i] !== a[j]) { same = false; } i++; j--; } console.log(same);");
  ("2026-11-25, at the human's asking: the two indexes of Turn round with two indexes, now comparing instead of swapping, with the flag of Found with a for, which starts true here and is set false.");
  ("The inputs are 3 to 5 numbers from 1 to 9: half read the same both ways, and the other half differ in just one place, at the ends or one in, so the whole walk matters.");
  ("The wrong programs are: === in place of !== (one matching pair is enough to set false), same starting false (always false), and no j-- (each item is compared with the last).");
  ("The writing is a first draft by Claude 2026-11-25.");
  function program_with(items, start, test, moves) {
    "the array, i and j at the two ends, same, then a while comparing a[i] and a[j]";
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let i = 0;",
      "let j = a.length - 1;",
      "let same = " + start + ";",
      "while (i < j) {",
      "  if (" + test + ") {",
      "    same = false;",
      "  }",
    ];
    for (let line of moves) {
      lines.push("  " + line);
    }
    lines.push("}");
    lines.push("console.log(same);");
    let code = list_join_newline(lines);
    return code;
  }
  let differ = "a[i] !== a[j]";
  function program_of(items2) {
    let code2 = program_with(items2, "true", differ, ["i++;", "j--;"]);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "true", "a[i] === a[j]", ["i++;", "j--;"]);
    let v2 = program_with(items3, "false", differ, ["i++;", "j--;"]);
    let v3 = program_with(items3, "true", differ, ["i++;"]);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function mirrored(count) {
    "count numbers that read the same both ways";
    let half = divide_ceil(count, 2);
    let list = range_1(9);
    let front = list_shuffle_take(list, half);
    let difference = subtract(count, half);
    let back = front.slice(0, difference).reverse();
    let items5 = [...front, ...back];
    return items5;
  }
  function input_drawn(kind) {
    "kind is [count, place]: place -1 reads the same both ways, otherwise the item at place is changed";
    let count2 = kind[0];
    let place = kind[1];
    let items6 = mirrored(count2);
    if (greater_than_equal(place, 0)) {
      let left = subtract(count2, 1);
      let other = items6[subtract(left, place)];
      list_set(items6, place, modulo(other, 9) + 1);
    }
    return items6;
  }
  function inputs_get() {
    "three that read the same both ways, and three that differ at the ends or one in";
    let kinds = [
      [3, -1],
      [4, -1],
      [5, -1],
      [4, 0],
      [5, 1],
      [4, 1],
    ];
    let inputs = list_map(kinds, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Turn round with two indexes and Found with a for remembered, then comparing";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_while_reverse,
      [
        "",
        "i",
        " from the start and ",
        "j",
        " from the end move towards each other with ",
        "while (i < j)",
        "",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_found,
      [
        "a name like ",
        "found",
        " starts one way and an ",
        "if",
        " inside the loop can change it",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      [
        "Here they compare instead of swap. ",
        "same",
        " starts ",
        "true",
        ", and one pair that differs sets it ",
        "false",
        "",
      ],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of([1, 2, 2, 1]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "1",
      " and ",
      "1",
      " are the same, then ",
      "2",
      " and ",
      "2",
      ", so ",
      "same",
      " stays ",
      "true",
      "",
    ]);
    let code4 = program_of([1, 2, 3, 1]);
    let lines3 = text_split_newline(code4);
    let value2 = eval_console_log_lines(code4);
    app_learn_js_code_lines_writes_out(box_three, lines3, value2);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "2",
      " and ",
      "3",
      " differ, so ",
      "same",
      " becomes ",
      "false",
      "",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Same both ways",
    "a[i] !== a[j]",
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
