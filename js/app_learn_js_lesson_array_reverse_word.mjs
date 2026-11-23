import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_reverse } from "./app_learn_js_lesson_string_reverse.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_reverse_word() {
  arguments_assert(arguments, 0);
  ('a word turned around by splitting, reversing and joining: let s = "joy"; let a = s.split(""); a.reverse(); let r = a.join(""); console.log(r); writes out yoj');
  ("2026-11-23, at the human's asking: Reverse, Split into letters and Join with nothing put together, so a word is turned around without a loop. It names Reversing a string, whose loop does the same.");
  ('PICKED: three lines, one call each, rather than the one line s.split("").reverse().join("") that was first offered. Every line here is a call already taught on its own; the one line also needs a call made on what the call before it hands back, and reverse handing back its array has never been said, since Reverse teaches only that it changes a. Not picked: the one line now, which can follow as a lesson of its own once handing back is taught.');
  ("Words of three to five letters from the fruits of the Spirit and hope, none the same backwards, so turning one around always changes it.");
  ('The wrong programs are: no a.reverse() line (the word as it was), console.log(a) in place of console.log(r) (the letters as an array), and join(", ") (a comma and space between the letters).');
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "joy";
  function inputs_get() {
    "five words of three to five letters, shuffled";
    let words = ["joy", "love", "peace", "faith", "hope"];
    let shuffled = list_shuffle_take(words, 5);
    return shuffled;
  }
  function program_with(word, middle, separator, logged) {
    'let s = "..."; let a = s.split(""); middle; let r = a.join(separator); console.log(logged);';
    let lines = [
      "let s = " + json_to(word) + ";",
      'let a = s.split("");',
      ...middle,
      "let r = a.join(" + json_to(separator) + ");",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word2) {
    let code2 = program_with(word2, ["a.reverse();"], "", "r");
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(word3, [], "", "r");
    let v2 = program_with(word3, ["a.reverse();"], "", "a");
    let v3 = program_with(word3, ["a.reverse();"], ", ", "r");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the loop reversing a string remembered, then split, reverse and join doing it";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_reverse,
      [
        "a loop running down from the last letter, ",
        "b = b + a[i];",
        ", builds a word backwards",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Split into letters, ",
      "reverse",
      ", then join with nothing does the same with no loop:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Turn a word around",
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
