import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_set } from "./app_learn_js_lesson_array_set.mjs";
import { app_learn_js_lesson_array_splice_in } from "./app_learn_js_lesson_array_splice_in.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_array_splice_inputs } from "./app_learn_js_array_splice_inputs.mjs";
export function app_learn_js_lesson_array_splice_set() {
  arguments_assert(arguments, 0);
  ("one item put into an array in place of the one at an index: let a = [5, 8, 2, 9]; a.splice(1, 1, 7); console.log(a); writes out [5, 7, 2, 9], as a[1] = 7; does");
  ("2026-11-22, at the human's asking: right after the splice lessons taking one out and putting one in, a lesson showing a.splice(i, 1, x) is the same as a[i] = x. Both programs are shown writing out the same array.");
  ("The wrong programs are: a.splice(index, 0, item) (nothing taken out), a.splice(index, 2, item) (two taken out), and a[index + 1] = item (one place too far).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: [5, 8, 2, 9],
    index: 1,
    item: 7,
  };
  function program_with(items, line) {
    "let a = items; line; console.log(a);";
    let lines = [
      "let a = " + js_code_array(items) + ";",
      line,
      "console.log(a);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input) {
    let code2 = program_with(
      input.items,
      "a.splice(" + input.index + ", 1, " + input.item + ");",
    );
    return code2;
  }
  function wrong_programs_of(input2) {
    let index = input2.index;
    let item = input2.item;
    let v = program_with(
      input2.items,
      "a.splice(" + index + ", 0, " + item + ");",
    );
    let v2 = program_with(
      input2.items,
      "a.splice(" + index + ", 2, " + item + ");",
    );
    let v3 = program_with(
      input2.items,
      "a[" + (index + 1) + "] = " + item + ";",
    );
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "setting an item and splice putting one in remembered, then splice taking one out and putting one in its place, beside the same change made by setting the item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_set,
      [
        "",
        'a[1] = "kindness"',
        " put a new item at index 1, in place of the one there",
      ],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_splice_in,
      ["", "a.splice(2, 0, 7)", " took no items out and put 7 in at index 2"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.splice(1, 1, 7)",
      " takes ",
      "1",
      " item out at index ",
      "1",
      " and puts ",
      "7",
      " in its place:",
    ]);
    let code3 = program_of(example_input);
    let value = eval_console_log_lines(code3);
    let lines2 = text_split_newline(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "That is the same as ",
      "a[1] = 7",
      ":",
    ]);
    let code4 = program_with(example_input.items, "a[1] = 7;");
    let value2 = eval_console_log_lines(code4);
    let lines3 = text_split_newline(code4);
    app_learn_js_code_lines_writes_out(box_two, lines3, value2);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Splice in place",
    "a.splice(1, 1, 7)",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get: app_learn_js_array_splice_inputs,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
