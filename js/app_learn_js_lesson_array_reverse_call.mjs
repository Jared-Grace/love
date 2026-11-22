import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_reverse } from "./app_learn_js_lesson_array_reverse.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_reverse_call() {
  arguments_assert(arguments, 0);
  ("an array turned around with reverse: let a = [5, 8, 3, 9]; a.reverse(); console.log(a); writes out [9, 3, 8, 5]");
  ("2026-11-22, at the human's asking: a.reverse() as the short way to do what Reversing an array does with a loop, popping each item of a and pushing it onto b. Like splice, it changes a itself rather than making a new array, so the splice lessons' words are said again.");
  ("Numbers rather than words, three to five of them, all different, so turning one around always changes it and five fit a phone's width.");
  ("The wrong programs are: a.pop() (only the last item goes), a.shift() (only the first item goes), and no line between (a as it was written).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = [5, 8, 3, 9];
  function inputs_get() {
    "six arrays of different numbers, three, four and five long twice each, shuffled";
    function input_sized(size) {
      let numbers = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], size);
      return numbers;
    }
    let inputs = list_map([3, 4, 5, 3, 4, 5], input_sized);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function program_with(numbers, middle) {
    "let a = numbers; then the middle lines; console.log(a);";
    let codes = list_map(numbers, json_to);
    let lines = [
      "let a = " + js_code_array(codes) + ";",
      ...middle,
      "console.log(a);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(numbers2) {
    let code2 = program_with(numbers2, ["a.reverse();"]);
    return code2;
  }
  function wrong_programs_of(numbers3) {
    let v = program_with(numbers3, ["a.pop();"]);
    let v2 = program_with(numbers3, ["a.shift();"]);
    let v3 = program_with(numbers3, []);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(numbers4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the loop reversing into a new array remembered, then reverse doing it to the array itself";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_reverse,
      [
        "",
        "b.push(a.pop());",
        " in a loop put the items of ",
        "a",
        " into ",
        "b",
        " the other way round",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.reverse()",
      " turns ",
      "a",
      " around: its last item comes first",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "However ",
      "reverse",
      " does not create a new array",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Like ",
      "splice",
      ", ",
      "a.reverse",
      " changes the existing array ",
      "a",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Reverse",
    "a.reverse()",
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
