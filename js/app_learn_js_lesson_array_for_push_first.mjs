import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_push_from } from "./app_learn_js_lesson_array_for_push_from.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_push_first() {
  arguments_assert(arguments, 0);
  ("the first few items, pushed into a new array: let a = [5, 8, 2, 9]; let c = []; for (let i = 0; i < 2; i++) { c.push(a[i]); } console.log(c); writes out [5, 8]");
  ("2026-11-22, at the human's asking: the other end of From an index on - that one keeps every item from an index on, this one every item before it. Nothing new: the loop stops at a number instead of a.length.");
  ("A set is six questions, four or five different numbers from 1 to 9, keeping the first 2 or 3.");
  ("The wrong programs are: i < a.length (every item), i <= the number (one too many), and the loop starting at 1 (the first item missed).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: [5, 8, 2, 9],
    count: 2,
  };
  function program_with(items, start, condition) {
    "let a = items; let c = []; for (let i = start; condition; i++) { c.push(a[i]); } console.log(c);";
    let lines = [
      "let a = " + js_code_array(items) + ";",
      "let c = [];",
      "for (let i = " + start + "; " + condition + "; i++) {",
      "  c.push(a[i]);",
      "}",
      "console.log(c);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input) {
    let code2 = program_with(input.items, 0, "i < " + input.count);
    return code2;
  }
  function wrong_programs_of(input2) {
    let v = program_with(input2.items, 0, "i < a.length");
    let v2 = program_with(input2.items, 0, "i <= " + input2.count);
    let v3 = program_with(input2.items, 1, "i < " + input2.count);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function input_shaped(shape) {
    "shape is [how many items, how many to keep]";
    let items2 = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], shape[0]);
    let input4 = {
      items: items2,
      count: shape[1],
    };
    return input4;
  }
  function inputs_get() {
    "six inputs, four or five items, keeping 2 or 3";
    let shapes = [
      [4, 2],
      [4, 3],
      [5, 2],
      [5, 3],
      [4, 2],
      [5, 3],
    ];
    let inputs = list_map(shapes, input_shaped);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "skipping the first items remembered, then keeping only them";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_from,
      [
        "a loop starting at ",
        "let i = 1",
        " pushed every item but the first into ",
        "c",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Suppose we want only the first 2 items of ",
      "a",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Then the loop starts at ",
      "let i = 0",
      " and stops before ",
      "2",
      ", with ",
      "i < 2",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "First items",
    "i < 2",
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
