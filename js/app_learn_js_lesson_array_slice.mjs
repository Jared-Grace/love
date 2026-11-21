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
export function app_learn_js_lesson_array_slice() {
  arguments_assert(arguments, 0);
  ("every item from an index on, in one call: let a = [5, 8, 2, 9]; let c = a.slice(1); console.log(c); writes out [8, 2, 9]");
  ("2026-11-22, at the human's asking: right after the loop that pushes every item from an index on into c, so the long way comes first, as with concat. Only slice with one number: slice(1, 3), with an end, is left for later, since the step-through reads a dot action with one thing in its brackets.");
  ("A set is six questions, a four or five different numbers from 1 to 9, slicing from 1 or 2.");
  ("The wrong programs are: slice(0) (every item), slice one further on (one item fewer), and console.log(a) in place of console.log(c) (slice does not change a).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: [5, 8, 2, 9],
    start: 1,
  };
  function program_with(items, start, logged) {
    "let a = items; let c = a.slice(start); console.log(logged);";
    let lines = [
      "let a = " + js_code_array(items) + ";",
      "let c = a.slice(" + start + ");",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input) {
    let code2 = program_with(input.items, input.start, "c");
    return code2;
  }
  function wrong_programs_of(input2) {
    let v = program_with(input2.items, 0, "c");
    let v2 = program_with(input2.items, input2.start + 1, "c");
    let v3 = program_with(input2.items, input2.start, "a");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function input_shaped(shape) {
    "shape is [how many items, where the slice starts]";
    let items2 = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], shape[0]);
    let input4 = {
      items: items2,
      start: shape[1],
    };
    return input4;
  }
  function inputs_get() {
    "six inputs, four or five items, slicing from 1 or 2";
    let shapes = [
      [4, 1],
      [4, 2],
      [5, 1],
      [5, 2],
      [4, 1],
      [5, 2],
    ];
    let inputs = list_map(shapes, input_shaped);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "the loop remembered, then slice doing it in one call";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_from,
      [
        "a loop starting at ",
        "let i = 1",
        " pushed every item but the first into a new array ",
        "c",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.slice(1)",
      " does the same in one line:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "The number in the brackets is the index to start from",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Just like the loop, ",
      "a.slice(1)",
      " does not change ",
      "a",
      ", it gives back a new array",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Slice",
    "a.slice(1)",
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
