import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_join_between } from "./app_learn_js_lesson_array_for_join_between.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_join() {
  arguments_assert(arguments, 0);
  ('the words of an array joined in one call: let a = ["love", "joy", "peace"]; let s = a.join(", "); console.log(s); writes out love, joy, peace');
  ("2026-11-22, at the human's asking: after the loop that puts a comma only between the words, so the long way comes first, as with concat and slice.");
  ("A set is six questions, three or four words from the fruits of the Spirit.");
  ('The wrong programs are: join("") (the words run together), join(",") (no space after each comma), and console.log(a) in place of console.log(s) (join does not change a).');
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["love", "joy", "peace"];
  function program_with(items, separator, logged) {
    "let a = [...]; let s = a.join(separator); console.log(logged);";
    let codes = list_map(items, json_to);
    let lines = [
      "let a = " + js_code_array(codes) + ";",
      "let s = a.join(" + json_to(separator) + ");",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, ", ", "s");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "", "s");
    let v2 = program_with(items3, ",", "s");
    let v3 = program_with(items3, ", ", "a");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function input_sized(size) {
    let list = fruits_of_the_spirit();
    let items5 = list_shuffle_take(list, size);
    return items5;
  }
  function inputs_get() {
    "three or four words, three times each, shuffled";
    let inputs = list_map([3, 3, 3, 4, 4, 4], input_sized);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "the loop remembered, then join doing it in one call";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_join_between,
      ["a loop with ", "if (i > 0)", " put a comma only between the words"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      'a.join(", ")',
      " does the same in one line:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "What is in the brackets goes between the words, and never after the last one",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Join",
    'a.join(", ")',
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
