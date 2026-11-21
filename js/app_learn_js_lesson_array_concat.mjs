import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_take } from "./list_take.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_push_both } from "./app_learn_js_lesson_array_for_push_both.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_concat() {
  arguments_assert(arguments, 0);
  ("one array after another in one call: let a = [1, 2]; let b = [3, 4, 5]; let c = a.concat(b); console.log(c); writes out [1, 2, 3, 4, 5]");
  ("2026-11-22, at the human's asking: right after the two loops that push a and then b into a new array c (the human's suggestion), so the student has written exactly this the long way before meeting the short one, as includes followed the loop that found joy.");
  ("A set is six questions, a and b each two or three different numbers from 1 to 9, shuffled.");
  ("The wrong programs are: b.concat(a) (b's items first), console.log(a) in place of console.log(c) (a is not changed by concat), and a.concat(a) (a twice).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = [
    [1, 2],
    [3, 4, 5],
  ];
  function program_with(input, call, logged) {
    "let a = ...; let b = ...; let c = call; console.log(logged);";
    let lines = [
      "let a = " + js_code_array(input[0]) + ";",
      "let b = " + js_code_array(input[1]) + ";",
      "let c = " + call + ";",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "a.concat(b)", "c");
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "b.concat(a)", "c");
    let v2 = program_with(input3, "a.concat(b)", "a");
    let v3 = program_with(input3, "a.concat(a)", "c");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function input_sized(sizes) {
    "a and b, different numbers from 1 to 9, as many as each size says";
    let count = sizes[0] + sizes[1];
    let numbers = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], count);
    let taken = list_take(numbers, sizes[0]);
    let skipped = list_skip(numbers, sizes[0]);
    let input5 = [taken, skipped];
    return input5;
  }
  function inputs_get() {
    "six inputs, a and b each two or three numbers";
    let shapes = [
      [2, 2],
      [2, 3],
      [3, 2],
      [3, 3],
      [2, 3],
      [3, 2],
    ];
    let inputs = list_map(shapes, input_sized);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "the loop remembered, then concat doing it in one call";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_both,
      [
        "two loops pushed every item of ",
        "a",
        " and then of ",
        "b",
        " into a new array ",
        "c",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.concat(b)",
      " does the same in one line:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "Just like the loops, ",
      "a.concat(b)",
      " does not change ",
      "a",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "It gives back a new array, and we keep it in ",
      "c",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Concat",
    "a.concat(b)",
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
