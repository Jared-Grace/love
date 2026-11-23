import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_reverse_call } from "./app_learn_js_lesson_array_reverse_call.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_split_reverse() {
  arguments_assert(arguments, 0);
  ('the letters of a word split into an array, then reversed: let s = "joy"; let a = s.split(""); a.reverse(); console.log(a); writes out ["y", "o", "j"]');
  ("2026-11-23, at the human's asking: after Split into letters and before Join with nothing, so Turn a word around adds only the join. Nothing in it is new: Split into letters makes the array and Reverse turns an array around.");
  ("Words of three to five letters from the fruits of the Spirit and hope, none the same backwards, so turning one around always changes it.");
  ('The wrong programs are: no a.reverse() line (the letters in order), console.log(s) in place of console.log(a) (the word as it was), and split(" ") (the whole word as one item, which reversing leaves as it was).');
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "joy";
  function inputs_get() {
    "five words of three to five letters, shuffled";
    let words = ["joy", "love", "peace", "faith", "hope"];
    let shuffled = list_shuffle_take(words, 5);
    return shuffled;
  }
  function program_with(word, separator, middle, logged) {
    'let s = "..."; let a = s.split(separator); middle; console.log(logged);';
    let lines = [
      "let s = " + json_to(word) + ";",
      "let a = s.split(" + json_to(separator) + ");",
      ...middle,
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word2) {
    let code2 = program_with(word2, "", ["a.reverse();"], "a");
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(word3, "", [], "a");
    let v2 = program_with(word3, "", ["a.reverse();"], "s");
    let v3 = program_with(word3, " ", ["a.reverse();"], "a");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "reverse remembered, then used on the letters split from a word";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_reverse_call,
      ["", "a.reverse();", " turns the items of ", "a", " around"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "After ",
      's.split("")',
      ", the letters are items of ",
      "a",
      ", so reversing ",
      "a",
      " puts the letters last to first:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Letters reversed",
    "a.reverse();",
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
