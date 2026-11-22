import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_push_insert } from "./app_learn_js_lesson_array_for_push_insert.mjs";
import { app_learn_js_lesson_array_splice_out } from "./app_learn_js_lesson_array_splice_out.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_array_splice_inputs } from "./app_learn_js_array_splice_inputs.mjs";
export function app_learn_js_lesson_array_splice_in() {
  arguments_assert(arguments, 0);
  ("one item put into an array at an index: let a = [5, 8, 2, 9]; a.splice(2, 0, 7); console.log(a); writes out [5, 8, 7, 2, 9]");
  ("2026-11-22, at the human's asking: after Put one in, which builds the same array with a loop; splice changes a itself. The 0 says no item is taken out; what comes after it is put in at the index.");
  ("The wrong programs are: a.splice(index, 1, item) (the item there taken out too), a.splice(index + 1, 0, item) (one place too far), and a.push(item) (at the end).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: [5, 8, 2, 9],
    index: 2,
    item: 7,
  };
  function program_with(items, call) {
    "let a = items; a.call; console.log(a);";
    let lines = [
      "let a = " + js_code_array(items) + ";",
      "a." + call + ";",
      "console.log(a);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input) {
    let code2 = program_with(
      input.items,
      "splice(" + input.index + ", 0, " + input.item + ")",
    );
    return code2;
  }
  function wrong_programs_of(input2) {
    let index = input2.index;
    let item = input2.item;
    let v = program_with(
      input2.items,
      "splice(" + index + ", 1, " + item + ")",
    );
    let v2 = program_with(
      input2.items,
      "splice(" + (index + 1) + ", 0, " + item + ")",
    );
    let v3 = program_with(input2.items, "push(" + item + ")");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the loop putting one in and splice taking one out remembered, then splice putting one in";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_insert,
      ["", "if (i === 2)", " pushed 7 just before the item at index 2"],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_splice_out,
      ["", "a.splice(2, 1)", " took 1 item out of a at index 2"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.splice(2, 0, 7)",
      " puts ",
      "7",
      " in at index ",
      "2",
      " of ",
      "a",
      " itself",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "The ",
      "0",
      " says to take no items out; what comes after it is put in:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Put one in at an index",
    "a.splice(2, 0, 7)",
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
