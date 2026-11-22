import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_slice } from "./app_learn_js_lesson_array_slice.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_slice_last() {
  arguments_assert(arguments, 0);
  ("the last few items, with slice: let a = [5, 8, 2, 9, 4]; let c = a.slice(a.length - 2); console.log(c); writes out [9, 4]");
  ("2026-11-22, at the human's asking: right after Slice. Slice starts at an index; to keep the last 2, start 2 before the end, at a.length - 2 - nothing new, a.length and minus put inside the brackets.");
  ("A set is six questions, four, five or seven different numbers from 1 to 9, keeping the last 2 or 3. An array never has twice as many items as are kept, since then slice(2) and the last 2 are the same items and the first wrong program would be right.");
  ("The wrong programs are: slice(the number) (skips that many from the front), slice(a.length - one more) (one item too many), and console.log(a).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: [5, 8, 2, 9, 4],
    count: 2,
  };
  function program_with(items, inside, logged) {
    "let a = items; let c = a.slice(inside); console.log(logged);";
    let lines = [
      "let a = " + js_code_array(items) + ";",
      "let c = a.slice(" + inside + ");",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input) {
    let code2 = program_with(input.items, "a.length - " + input.count, "c");
    return code2;
  }
  function wrong_programs_of(input2) {
    let count = input2.count;
    let v = program_with(input2.items, "" + count, "c");
    let v2 = program_with(input2.items, "a.length - " + (count + 1), "c");
    let v3 = program_with(input2.items, "a.length - " + count, "a");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function input_shaped(shape) {
    "shape is [how many items, how many to keep from the end]";
    let items2 = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], shape[0]);
    let input4 = {
      items: items2,
      count: shape[1],
    };
    return input4;
  }
  function inputs_get() {
    "six inputs; never twice as many items as are kept";
    let shapes = [
      [4, 3],
      [5, 2],
      [5, 3],
      [7, 2],
      [7, 3],
      [5, 2],
    ];
    let inputs = list_map(shapes, input_shaped);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "slice remembered, then starting it a few before the end";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_slice,
      ["", "a.slice(1)", " gave every item from index ", "1", " on"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Suppose we want only the last 2 items of ",
      "a",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.slice(a.length)",
      " starts past the last item, so it includes no items",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.slice(a.length - 1)",
      " includes only the last item",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "So ",
      "a.slice(a.length - 2)",
      " includes only the last 2 items:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Last items",
    "a.slice(a.length - 2)",
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
