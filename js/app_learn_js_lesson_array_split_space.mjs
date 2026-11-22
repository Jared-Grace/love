import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_split } from "./app_learn_js_lesson_array_split.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_split_space() {
  arguments_assert(arguments, 0);
  ('a string cut at each comma and space: let s = "joy, love"; let a = s.split(", "); console.log(a); writes out ["joy", "love"]');
  ("2026-11-22, at the human's asking: after Split at one comma. The separator is two letters, so it is taught only with .split - a loop would have to look at two letters at once.");
  ("A set is six questions, two or three of love, joy and peace joined by a comma and a space.");
  ('The wrong programs are: split(",") (each word after the first keeps its space), split(" ") (each word but the last keeps its comma), and console.log(s).');
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["joy", "love"];
  function program_with(words, separator, logged) {
    'let s = "..."; let a = s.split(separator); console.log(logged);';
    let text = list_join(words, ", ");
    let lines = [
      "let s = " + json_to(text) + ";",
      "let a = s.split(" + json_to(separator) + ");",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(words2) {
    let code2 = program_with(words2, ", ", "a");
    return code2;
  }
  function wrong_programs_of(words3) {
    let v = program_with(words3, ",", "a");
    let v2 = program_with(words3, " ", "a");
    let v3 = program_with(words3, ", ", "s");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(words4) {
    let r = [];
    return r;
  }
  function input_sized(size) {
    let words5 = list_shuffle_take(["love", "joy", "peace"], size);
    return words5;
  }
  function inputs_get() {
    "two or three words, three times each, shuffled";
    let inputs = list_map([2, 2, 2, 3, 3, 3], input_sized);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "split at a comma remembered, then at a comma and a space";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_split,
      ["", 's.split(",")', " cut ", "s", " at each comma"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "When a space follows each comma, cut at both, with ",
      's.split(", ")',
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Split at a comma and space",
    's.split(", ")',
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
