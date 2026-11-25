import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_code_array_while_smaller } from "./app_learn_js_code_array_while_smaller.mjs";
import { range_1 } from "./range_1.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { list_take } from "./list_take.mjs";
import { not_equal } from "./not_equal.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_includes } from "./list_includes.mjs";
import { json_to } from "./json_to.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_while_smaller_first } from "./app_learn_js_lesson_array_while_smaller_first.mjs";
import { app_learn_js_lesson_while_log_skipped } from "./app_learn_js_lesson_while_log_skipped.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_while_merge() {
  arguments_assert(arguments, 0);
  ("merging two arrays in order, smallest first: Smaller first's while, then while (i < a.length) { console.log(a[i]); i++; } and while (j < b.length) { console.log(b[j]); j++; }, one after the other, writes out 1, 2, 3, 4, 7, 9 for a = [1, 4, 7] and b = [2, 3, 9]");
  ("2026-11-25, at the human's asking, the last of three steps towards merging two sorted arrays, after In order inside a? and Smaller first. The one new fact is the two leftover loops: once one array runs out, what is left of the other is written out. Only one of them ever runs - the other's question is false at the start, as in A log inside a skipped while. No loop is inside another.");
  ("The inputs are a and b, two numbers each, four different numbers from 1 to 12 between them, each array sorted - two, like Smaller first's, so the step-by-step walkthrough stays short. Half of them have something left in a, half in b, so both leftover loops are seen running. An input is drawn again until both i and j move in the first while.");
  ("The wrong programs are: no leftover loops (Smaller first's program), only a's leftover loop, and only b's. The one with no leftover loops is always wrong, since with every number different one array always has something left.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [
    [1, 4, 7],
    [2, 3, 9],
  ];
  function program_of(input) {
    let code = app_learn_js_code_array_while_smaller(input, "<", "i", "j", [
      "a",
      "b",
    ]);
    return code;
  }
  function wrong_programs_of(input2) {
    let v = app_learn_js_code_array_while_smaller(input2, "<", "i", "j", []);
    let v2 = app_learn_js_code_array_while_smaller(input2, "<", "i", "j", [
      "a",
    ]);
    let v3 = app_learn_js_code_array_while_smaller(input2, "<", "i", "j", [
      "b",
    ]);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function input_drawn(left_in) {
    "four different numbers from 1 to 12, two to a and two to b, each sorted; drawn again until the largest number is in left_in (so that array has something left) and both i and j move in the first while";
    while (true) {
      let list = range_1(12);
      let numbers = list_shuffle_take(list, 4);
      let list2 = list_take(numbers, 2);
      let v4 = list_sort_number(list2);
      let list3 = numbers.slice(2);
      let v5 = list_sort_number(list3);
      let left_a = greater_than(v4[1], v5[1]);
      let left = left_a ? "a" : "b";
      if (not_equal(left, left_in)) {
        continue;
      }
      let input4 = [v4, v5];
      let first = app_learn_js_code_array_while_smaller(
        input4,
        "<",
        "i",
        "j",
        [],
      );
      ("i has moved in the first while exactly when a[0] was written out by it, and j exactly when b[0] was");
      let s = eval_console_log_lines(first);
      let written = text_split_newline(s);
      let item = json_to(v4[0]);
      let i_moved = list_includes(written, item);
      let item2 = json_to(v5[0]);
      let j_moved = list_includes(written, item2);
      if (i_moved && j_moved) {
        return input4;
      }
    }
  }
  function inputs_get() {
    let lefts = ["a", "b", "a", "b", "a", "b"];
    let inputs = list_map(lefts, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Smaller first and a skipped while remembered, then the two leftover loops";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_while_smaller_first,
      [
        "the ",
        "while",
        " writes out the smaller of ",
        "a[i]",
        " and ",
        "b[j]",
        " until one of them runs out",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_while_log_skipped,
      [
        "a ",
        "while",
        " whose question is ",
        "false",
        " at the start never runs what is inside it",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("one thought to a line");
    let lines_said = [
      [
        "Once the first ",
        "while",
        " stops, one array may still have items left",
      ],
      [
        "Those items are in order, and larger than every item written out so far",
      ],
      [
        "So two more ",
        "while",
        " loops write out what is left, one after the other",
      ],
      [
        "Only one of them runs: the other array has nothing left, so its question is ",
        "false",
        " at the start",
      ],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code2 = program_of(example_input);
    let lines = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "The ",
      "while",
      " for ",
      "a",
      " is skipped, and the one for ",
      "b",
      " writes out ",
      "9",
      "",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Every item of ",
      "a",
      " and ",
      "b",
      " is written out, in order: the two arrays are merged",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Merge",
    "while (i < a.length) {...}",
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
