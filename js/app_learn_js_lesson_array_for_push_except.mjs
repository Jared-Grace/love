import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_push_first } from "./app_learn_js_lesson_array_for_push_first.mjs";
import { app_learn_js_lesson_expression_not_equal } from "./app_learn_js_lesson_expression_not_equal.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_push_except() {
  arguments_assert(arguments, 0);
  ("every item but the one at an index, pushed into a new array: let a = [5, 8, 2, 9]; let c = []; for (let i = 0; i < a.length; i++) { if (i !== 1) { c.push(a[i]); } } console.log(c); writes out [5, 2, 9]");
  ("2026-11-22, at the human's asking: after First items. An if inside the loop, comparing the index rather than the item, and !== from the comparison lessons - nothing new.");
  ("A set is six questions, four or five different numbers from 1 to 9, leaving out index 1 or 2.");
  ("The wrong programs are: i === the index (only that item), no if (every item), and i > the index (only the items after it).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: [5, 8, 2, 9],
    skipped: 1,
  };
  function program_with(items, condition) {
    "let a = items; let c = []; for (...) { if (condition) { c.push(a[i]); } } console.log(c); - no if when condition is null";
    let head = [
      "let a = " + js_code_array(items) + ";",
      "let c = [];",
      "for (let i = 0; i < a.length; i++) {",
    ];
    let body = ["  c.push(a[i]);"];
    if (not_equal(condition, null)) {
      body = ["  if (" + condition + ") {", "    c.push(a[i]);", "  }"];
    }
    let lines = [...head, ...body, "}", "console.log(c);"];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input) {
    let code2 = program_with(input.items, "i !== " + input.skipped);
    return code2;
  }
  function wrong_programs_of(input2) {
    let v = program_with(input2.items, "i === " + input2.skipped);
    let v2 = program_with(input2.items, null);
    let v3 = program_with(input2.items, "i > " + input2.skipped);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function input_shaped(shape) {
    "shape is [how many items, the index left out]";
    let items2 = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], shape[0]);
    let input4 = {
      items: items2,
      skipped: shape[1],
    };
    return input4;
  }
  function inputs_get() {
    "six inputs, four or five items, leaving out index 1 or 2";
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
    "keeping the first items and !== remembered, then leaving out one index";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_first,
      ["", "i < 2", " kept only the first 2 items"],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_expression_not_equal,
      ["", "!==", " is true when the two sides are different"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Suppose we want every item of ",
      "a",
      " except the one at index ",
      "1",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Then we push only when ",
      "i !== 1",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "All but one",
    "i !== 1",
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
