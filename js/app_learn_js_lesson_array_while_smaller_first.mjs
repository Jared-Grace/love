import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_code_array_while_smaller } from "./app_learn_js_code_array_while_smaller.mjs";
import { range_1 } from "./range_1.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_take } from "./list_take.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { json_to } from "./json_to.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_map } from "./list_map.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_while_and } from "./app_learn_js_lesson_while_and.mjs";
import { app_learn_js_lesson_for_if_else } from "./app_learn_js_lesson_for_if_else.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_while_smaller_first() {
  arguments_assert(arguments, 0);
  ("two arrays in order, smallest first, walked together: let i = 0; let j = 0; while (i < a.length && j < b.length) { if (a[i] < b[j]) { console.log(a[i]); i++; } else { console.log(b[j]); j++; } } writes out 1, 2, 3, 4, 7 for a = [1, 4, 7] and b = [2, 3, 9]");
  ("2026-11-25, at the human's asking, the second of three steps towards merging two sorted arrays, after In order inside a? and before the merge itself. The one new fact is that the if chooses which index moves: each time exactly one of i and j goes up. What is left of the other array once one runs out is not written out; writing it out is the merge's leftover loops, the next step.");
  ("The inputs are a and b, two numbers each, four different numbers from 1 to 12 between them, each array sorted. Two, at the human's asking 2026-11-25, so the step-by-step walkthrough, which is drawn from the same inputs, stays short. An input is drawn again until both i and j move - so both the if and the else run - and at least one wrong program writes out something else.");
  ("The wrong programs are: > for < (the larger first), each branch moving the other index (i++ and j++ swapped), and the else moving i (j never moves).");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [
    [1, 4, 7],
    [2, 3, 9],
  ];
  function program_with(input, compare, move_if, move_else) {
    "no leftover loops: what is left once one array runs out is not written out";
    let code = app_learn_js_code_array_while_smaller(
      input,
      compare,
      move_if,
      move_else,
      [],
    );
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "<", "i", "j");
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, ">", "i", "j");
    let v2 = program_with(input3, "<", "j", "i");
    let v3 = program_with(input3, "<", "i", "i");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function input_drawn(n) {
    "four different numbers from 1 to 12, two to a and two to b, each sorted; drawn again until both i and j move and some wrong program writes out something else";
    while (true) {
      let list2 = range_1(12);
      let numbers = list_shuffle_take(list2, 4);
      let list3 = list_take(numbers, 2);
      let v4 = list_sort_number(list3);
      let list4 = numbers.slice(2);
      let v5 = list_sort_number(list4);
      let input5 = [v4, v5];
      let code4 = program_of(input5);
      let answer = eval_console_log_lines(code4);
      ("i has moved exactly when a[0] was written out, and j exactly when b[0] was");
      let written = text_split_newline(answer);
      let item = json_to(v4[0]);
      let i_moved = list_includes(written, item);
      let item2 = json_to(v5[0]);
      let j_moved = list_includes(written, item2);
      if (not(i_moved) || not(j_moved)) {
        continue;
      }
      let list = wrong_programs_of(input5);
      let outputs = list_map(list, eval_console_log_lines);
      function lambda(out) {
        let neq = not_equal(out, answer);
        return neq;
      }
      let others = outputs.filter(lambda);
      if (greater_than(others.length, 0)) {
        return input5;
      }
    }
  }
  function inputs_get() {
    let list5 = range_1(6);
    let inputs = list_map(list5, input_drawn);
    return inputs;
  }
  function above(root, context) {
    "a while asking && and an else inside a loop remembered, then two indexes where the if chooses which moves";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_while_and,
      [
        "a ",
        "while",
        " asking ",
        "&&",
        " keeps going only while both sides are ",
        "true",
        "",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_for_if_else,
      ["the ", "else", " runs when the ", "if", " is ", "false", ""],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("one thought to a line");
    let lines_said = [
      ["", "a", " and ", "b", " are both in order, smallest first"],
      ["", "i", " is where we are in ", "a", ""],
      ["", "j", " is where we are in ", "b", ""],
      [
        "Each time, the ",
        "if",
        " writes out the smaller of ",
        "a[i]",
        " and ",
        "b[j]",
        "",
      ],
      [
        "Then only the one that was written out moves on: ",
        "i++",
        " or ",
        "j++",
        "",
      ],
      [
        "The ",
        "while",
        " stops once ",
        "i",
        " or ",
        "j",
        " reaches the end of its array:",
      ],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "9",
      " is never written out, because ",
      "a",
      " ran out first",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Smaller first",
    "if (a[i] < b[j])",
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
