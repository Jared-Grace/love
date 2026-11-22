import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_split } from "./app_learn_js_lesson_array_for_split.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_split() {
  arguments_assert(arguments, 0);
  ('a string cut at each comma in one call: let s = "joy,love"; let a = s.split(","); console.log(a); writes out ["joy", "love"]');
  ("2026-11-22, at the human's asking: after the loop that does the same by hand, and before the split at more than one letter.");
  ("A set is six questions, two or three of love, joy and peace joined by commas.");
  ('The wrong programs are: split("") (every letter apart), split(" ") (no space in s, so one item: the whole string), and console.log(s) (split does not change s).');
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["joy", "love"];
  function program_with(words, separator, logged) {
    'let s = "..."; let a = s.split(separator); console.log(logged);';
    let text = list_join(words, ",");
    let lines = [
      "let s = " + json_to(text) + ";",
      "let a = s.split(" + json_to(separator) + ");",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(words2) {
    let code2 = program_with(words2, ",", "a");
    return code2;
  }
  function wrong_programs_of(words3) {
    let v = program_with(words3, "", "a");
    let v2 = program_with(words3, " ", "a");
    let v3 = program_with(words3, ",", "s");
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
    "the loop remembered, then split doing it in one call";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_split,
      [
        "a loop pushed ",
        "word",
        " at each comma, and once more after the loop",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      's.split(",")',
      " does the same in one line:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "What is in the brackets is where ",
      "s",
      " is cut, and it is left out of the words",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Split",
    's.split(",")',
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
