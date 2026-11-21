import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_start_two } from "./app_learn_js_lesson_array_for_start_two.mjs";
import { app_learn_js_lesson_array_for_push_both } from "./app_learn_js_lesson_array_for_push_both.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_push_from() {
  arguments_assert(arguments, 0);
  ("every item from an index on, pushed into a new array: let a = [5, 8, 2, 9]; let c = []; for (let i = 1; i < a.length; i++) { c.push(a[i]); } console.log(c); writes out [8, 2, 9]");
  ("2026-11-22, at the human's asking: the long way first, before slice. A loop starting past 0 (430) and pushing into a new array (Two arrays into a new one) put together - nothing new.");
  ("A set is six questions, a four or five different numbers from 1 to 9, the loop starting at 1 or 2.");
  ("The wrong programs are: the loop starting at 0 (every item), console.log(a) in place of console.log(c) (a is not changed), and i < a.length - 1 (the last item missed).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: [5, 8, 2, 9],
    start: 1,
  };
  function program_with(items, start, stop, logged) {
    "let a = items; let c = []; for (let i = start; i < stop; i++) { c.push(a[i]); } console.log(logged);";
    let lines = [
      "let a = " + js_code_array(items) + ";",
      "let c = [];",
      "for (let i = " + start + "; i < " + stop + "; i++) {",
      "  c.push(a[i]);",
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input) {
    let code2 = program_with(input.items, input.start, "a.length", "c");
    return code2;
  }
  function wrong_programs_of(input2) {
    let v = program_with(input2.items, 0, "a.length", "c");
    let v2 = program_with(input2.items, input2.start, "a.length", "a");
    let v3 = program_with(input2.items, input2.start, "a.length - 1", "c");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function input_shaped(shape) {
    "shape is [how many items, where the loop starts]";
    let items2 = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], shape[0]);
    let input4 = {
      items: items2,
      start: shape[1],
    };
    return input4;
  }
  function inputs_get() {
    "six inputs, four or five items, starting at 1 or 2";
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
    "a loop starting past 0 and pushing into a new array remembered, then the two put together";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_start_two,
      ["a loop can start at ", "let i = 2", " to skip the first two items"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_push_both,
      ["", "c.push(a[i]);", " in a loop put items into a new array ", "c"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Suppose we want a new array with every item of ",
      "a",
      " except the first",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "The loop starts at ",
      "let i = 1",
      " and pushes each item into ",
      "c",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "From an index on",
    "let i = 1",
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
