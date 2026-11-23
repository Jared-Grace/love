import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_reverse_chain } from "./app_learn_js_lesson_array_reverse_chain.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_reverse_same() {
  arguments_assert(arguments, 0);
  ('whether a word reads the same backwards: let s = "noon"; let a = s.split(""); let r = a.reverse().join(""); console.log(s === r); writes out true');
  ("2026-11-23, at the human's asking: after Turn the words around. The word turned around with Reverse, then join, and then compared with the word as it was. A palindrome lesson with a loop is already there; this is the short way, made only of steps already taught.");
  ("PICKED: three words that read the same backwards - noon, level, wow - and three that do not - joy, love, peace - so the answer is true about half the time and the learner has to work each one out. Not picked: the word palindrome in the lesson, which would be one more new word for an idea the title already says.");
  ("The wrong programs are: console.log(r) (the word turned around, not whether it is the same), and console.log(s !== r) (the opposite answer). Not picked: console.log(s === a), comparing a string with an array, which is always false - true, but a second idea.");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "noon";
  function inputs_get() {
    "three words the same backwards and three not, shuffled";
    let words = ["noon", "level", "wow", "joy", "love", "peace"];
    let shuffled = list_shuffle_take(words, 6);
    return shuffled;
  }
  function program_with(word, logged) {
    'let s = "..."; let a = s.split(""); let r = a.reverse().join(""); console.log(logged);';
    let lines = [
      "let s = " + json_to(word) + ";",
      'let a = s.split("");',
      'let r = a.reverse().join("");',
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word2) {
    let code2 = program_with(word2, "s === r");
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(word3, "r");
    let v2 = program_with(word3, "s !== r");
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "reverse then join remembered, then the word compared with itself turned around";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_reverse_chain,
      ["", 'a.reverse().join("")', " turns the letters of a word around"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "s === r",
      " is ",
      "true",
      " when a word reads the same backwards as forwards:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Same backwards?",
    "s === r",
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
