import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_slice } from "./app_learn_js_lesson_array_slice.mjs";
import { app_learn_js_lesson_array_for_push_range } from "./app_learn_js_lesson_array_for_push_range.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_slice_range() {
  arguments_assert(arguments, 0);
  ("the items from one index up to another, with slice: let a = [5, 8, 2, 9, 4]; let c = a.slice(1, 3); console.log(c); writes out [8, 2]");
  ("2026-11-22, at the human's asking: after the loop From and to, which does the same. Slice is given a second number, where it stops, and that index is left out, as i < 3 left it out.");
  ("A set is six questions, the same shapes as From and to.");
  ("The wrong programs are: slice(the start) (no stop, so every item from the start on), slice(the start, the stop + 1) (one too many, the stop read as included), and console.log(a).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: [5, 8, 2, 9, 4],
    start: 1,
    stop: 3,
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
    let code2 = program_with(input.items, input.start + ", " + input.stop, "c");
    return code2;
  }
  function wrong_programs_of(input2) {
    let start = input2.start;
    let stop = input2.stop;
    let v = program_with(input2.items, "" + start, "c");
    let v2 = program_with(input2.items, start + ", " + (stop + 1), "c");
    let v3 = program_with(input2.items, start + ", " + stop, "a");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function input_shaped(shape) {
    "shape is [how many items, the start, the stop]; the stop is always at least 2 before the end";
    let items2 = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], shape[0]);
    let input4 = {
      items: items2,
      start: shape[1],
      stop: shape[2],
    };
    return input4;
  }
  function inputs_get() {
    "six inputs";
    let shapes = [
      [5, 1, 3],
      [5, 1, 3],
      [6, 1, 4],
      [6, 2, 4],
      [6, 2, 4],
      [5, 2, 3],
    ];
    let inputs = list_map(shapes, input_shaped);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "the loop and slice remembered, then slice with a stop";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_slice,
      ["", "a.slice(1)", " gave every item from index ", "1", " on"],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_range,
      ["a loop from ", "let i = 1", " while ", "i < 3", " kept index 1 and 2"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.slice(1, 3)",
      " does the same in one line. The second number is where it stops, and that index is left out:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Slice from and to",
    "a.slice(1, 3)",
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
