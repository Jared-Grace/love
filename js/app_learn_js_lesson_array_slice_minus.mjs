import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_slice_last } from "./app_learn_js_lesson_array_slice_last.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_slice_minus() {
  arguments_assert(arguments, 0);
  ("the last two items with a minus index: let a = [5, 8, 3, 9]; let c = a.slice(-2); console.log(c); writes out [3, 9]");
  ("2026-11-23, at the human's asking: a.slice(-2) as a shorter way to write a.slice(a.length - 2), which Last items teaches. It comes right after The last item with at, where a minus index counting back from the end is first met.");
  ("Numbers rather than words, four or five of them, all different. Not three: with three, a.slice(-3) is the whole array, the same as the wrong program that writes out a, and two wrong answers would read alike.");
  ("The wrong programs are: a.slice(-1) (only the last item), a.slice(-3) (one item too many), and console.log(a) (slice does not change a).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = [5, 8, 3, 9];
  function inputs_get() {
    "six arrays of different numbers, four and five long three times each, shuffled";
    function input_sized(size) {
      let numbers = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], size);
      return numbers;
    }
    let inputs = list_map([4, 5, 4, 5, 4, 5], input_sized);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function program_with(numbers, inside, logged) {
    "let a = numbers; let c = a.slice(inside); console.log(logged);";
    let codes = list_map(numbers, json_to);
    let lines = [
      "let a = " + js_code_array(codes) + ";",
      "let c = a.slice(" + inside + ");",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(numbers2) {
    let code2 = program_with(numbers2, "-2", "c");
    return code2;
  }
  function wrong_programs_of(numbers3) {
    let v = program_with(numbers3, "-1", "c");
    let v2 = program_with(numbers3, "-3", "c");
    let v3 = program_with(numbers3, "-2", "a");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(numbers4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the last items by length remembered, then slice with a minus index";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_slice_last,
      ["", "a.slice(a.length - 2)", " is the last two items of ", "a"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.slice(-2)",
      " is a shorter way to write ",
      "a.slice(a.length - 2)",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "As with ",
      "at",
      ", a minus index counts back from the end",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Last items with a minus",
    "a.slice(-2)",
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
