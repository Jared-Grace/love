import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_split_letters } from "./app_learn_js_lesson_array_split_letters.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_split_empty() {
  arguments_assert(arguments, 0);
  ('an empty string split into letters: let s = ""; let a = s.split(""); console.log(a); writes out [], an array with no items');
  ("2026-11-23, at the human's asking: after Split into letters, the string with no letters at all. Nothing in it is new: it is Split into letters given the shortest string there is.");
  ('PICKED: the empty string once in every set of four words, beside "a", "jo" and "joy", so it is always asked and the words around it show what one, two and three letters give. Not picked: the empty string half the time, which the human asked about - there is only one empty string, so a second and third would ask the very same question again.');
  ('Not picked: also joining an empty array, [].join(""). It writes out an empty string, which shows as nothing at all, so its right answer would be a blank button.');
  ('The wrong programs are: split(" ") (the whole string as one item, which for the empty string is [""], an array holding one empty string, not an empty array), and console.log(a.length) (how many letters, 0 for the empty string). Not picked: console.log(a[0]), since an empty array has no item 0 and the step-by-step guide cannot read one.');
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "";
  function inputs_get() {
    "the empty string and words of one, two and three letters, shuffled";
    let words = ["", "a", "jo", "joy"];
    let shuffled = list_shuffle_take(words, 4);
    return shuffled;
  }
  function program_with(word, separator, logged) {
    'let s = "..."; let a = s.split(separator); console.log(logged);';
    let lines = [
      "let s = " + json_to(word) + ";",
      "let a = s.split(" + json_to(separator) + ");",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word2) {
    let code2 = program_with(word2, "", "a");
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(word3, " ", "a");
    let v2 = program_with(word3, "", "a.length");
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "split into letters remembered, then given a string with no letters";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_split_letters,
      ["", 's.split("")', " cuts between every letter of ", "s"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "A string with no letters, ",
      '""',
      ", has nothing to cut, so ",
      "a",
      " is an array with no items:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Splitting nothing",
    '"".split("")',
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
