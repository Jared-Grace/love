import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_length } from "./app_learn_js_lesson_array_length.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_count_words() {
  arguments_assert(arguments, 0);
  ('how many words a sentence has: let s = "pray for one another"; let a = s.split(" "); console.log(a.length); writes out 4');
  ("2026-11-23, at the human's asking: after Same backwards?. Split at a space makes one item per word, so how many items is how many words. Nothing in it is new.");
  ('PICKED: on a name, let a = s.split(" ") then a.length, rather than s.split(" ").length in one line, since the step-through cannot yet read a property of a value with no name.');
  ("Sayings from the New Testament letters of two to five words, so the answer changes from one to the next.");
  ("The wrong programs are: console.log(s.length) (how many letters and spaces, not words) and console.log(a) (the words themselves, not how many).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "pray for one another";
  function inputs_get() {
    "five sayings of two to five words, shuffled";
    let sayings = [
      "rejoice always",
      "pray without ceasing",
      "pray for one another",
      "let love be genuine",
      "do all things without grumbling",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, logged) {
    'let s = "..."; let a = s.split(" "); console.log(logged);';
    let lines = [
      "let s = " + json_to(saying) + ";",
      'let a = s.split(" ");',
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, "a.length");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "s.length");
    let v2 = program_with(saying3, "a");
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "length remembered, then split at a space making one item per word";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_length,
      ["", "a.length", " is how many items ", "a", " has"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      's.split(" ")',
      " makes one item for each word, so ",
      "a.length",
      " is how many words:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Count the words",
    "a.length",
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
