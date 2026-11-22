import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_push_from } from "./app_learn_js_lesson_array_for_push_from.mjs";
import { app_learn_js_lesson_array_for_push_first } from "./app_learn_js_lesson_array_for_push_first.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_push_range() {
  arguments_assert(arguments, 0);
  ("the items from one index up to another, pushed into a new array: let a = [5, 8, 2, 9, 4]; let c = []; for (let i = 1; i < 3; i++) { c.push(a[i]); } console.log(c); writes out [8, 2]");
  ("2026-11-22, at the human's asking: the long way before a.slice(1, 3), as with slice, join and split. It puts together From an index on (the loop starts at 1) and First items (the loop stops before a number).");
  ("A set is six questions, five or six different numbers from 1 to 9, starting at index 1 or 2 and keeping 2 or 3 items.");
  ("The wrong programs are: starting at 0 (the start missed), i <= the stop (one too many), and i < a.length (every item from the start on).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: [5, 8, 2, 9, 4],
    start: 1,
    stop: 3,
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
    let code2 = program_with(input.items, input.start, "i < " + input.stop);
    return code2;
  }
  function wrong_programs_of(input2) {
    let v = program_with(input2.items, 0, "i < " + input2.stop);
    let v2 = program_with(input2.items, input2.start, "i <= " + input2.stop);
    let v3 = program_with(input2.items, input2.start, "i < a.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function input_shaped(shape) {
    "shape is [how many items, the start, the stop]; the stop is always at least 2 before the end, so i < a.length differs from i <= the stop";
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
    "starting late and stopping early remembered, then both at once";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_from,
      ["a loop starting at ", "let i = 1", " left out the first item"],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_first,
      ["", "i < 2", " kept only the first 2 items"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Suppose we want the items of ",
      "a",
      " from index ",
      "1",
      " up to, but not including, index ",
      "3",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Then the loop starts at ",
      "let i = 1",
      " and stops with ",
      "i < 3",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "From and to",
    "let i = 1; i < 3",
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
