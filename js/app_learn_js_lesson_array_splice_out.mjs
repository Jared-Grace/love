import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_push_except } from "./app_learn_js_lesson_array_for_push_except.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_array_splice_inputs } from "./app_learn_js_array_splice_inputs.mjs";
export function app_learn_js_lesson_array_splice_out() {
  arguments_assert(arguments, 0);
  ("one item taken out of an array at an index: let a = [5, 8, 3, 9]; a.splice(2, 1); console.log(a); writes out [5, 8, 9]. 2026-11-22, at the human's asking: the example uses 2 and 1 rather than 1 and 1, so the index and the count are told apart");
  ("2026-11-22, at the human's asking: after All but one, which builds the same array with a loop and a new array; splice changes a itself. The first number in its ( ) is the index, the second how many items to take out - only ever 1 here.");
  ("The wrong programs are: a.splice(index, 2) (two items out), a.splice(index + 1, 1) (counting from 1), and a.slice(index, index + 1) (the piece is made, but a is not changed).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: [5, 8, 3, 9],
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
    let code2 = program_with(input.items, "splice(" + input.index + ", 1)");
    return code2;
  }
  function wrong_programs_of(input2) {
    let index = input2.index;
    let v = program_with(input2.items, "splice(" + index + ", 2)");
    let v2 = program_with(input2.items, "splice(" + (index + 1) + ", 1)");
    let v3 = program_with(
      input2.items,
      "slice(" + index + ", " + (index + 1) + ")",
    );
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the loop leaving out one index remembered, then splice doing it to the array itself";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_except,
      [
        "",
        "i !== 1",
        " pushed every item but the one at index 1 into a new array",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.splice(2, 1)",
      " removes the item at index ",
      "2",
      " from ",
      "a",
      " itself",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "However ",
      "splice",
      " does not create a new array",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.splice",
      " changes the existing array ",
      "a",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "For ",
      "a.splice(2, 1)",
      " the ",
      "2",
      " is the index; the ",
      "1",
      " is how many items to take out:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Take one out",
    "a.splice(2, 1)",
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
