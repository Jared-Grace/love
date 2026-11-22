import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_last } from "./app_learn_js_lesson_array_last.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_at_last() {
  arguments_assert(arguments, 0);
  ("the last item of an array read with at: let a = [5, 8, 3, 9]; console.log(a.at(-1)); writes out 9");
  ("2026-11-22, at the human's asking, the sixth of the array lessons asked for that day: a.at(-1) as a shorter way to write a[a.length - 1], which The last item of an array teaches.");
  ("Numbers rather than words, three to five of them, all different: five words would wrap the first line on a phone, and the count changing from question to question is what shows -1 is the last however many there are.");
  ("The wrong programs are: a.at(0) (the first item), a.at(-2) (the item before the last), and a.at(1) (the item at index 1, as if the minus were not there).");
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
  function program_with(numbers, index) {
    let lines = [
      "let a = " + json_to(numbers).replaceAll(",", ", ") + ";",
      "console.log(a.at(" + index + "));",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(numbers2) {
    let code2 = program_with(numbers2, "-1");
    return code2;
  }
  function wrong_programs_of(numbers3) {
    let v = program_with(numbers3, "0");
    let v2 = program_with(numbers3, "-2");
    let v3 = program_with(numbers3, "1");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(numbers4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the last item by its index remembered, then at with -1";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_last,
      ["", "a[a.length - 1]", " is the last item of ", "a"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.at(-1)",
      " is a shorter way to write ",
      "a[a.length - 1]",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "A minus index counts back from the end: ",
      "-1",
      " is the last item, ",
      "-2",
      " the one before it",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The last item with at",
    "a.at(-1)",
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
