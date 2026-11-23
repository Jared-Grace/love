import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_split } from "./app_learn_js_lesson_array_split.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_split_letters() {
  arguments_assert(arguments, 0);
  ('a string cut into its letters: let s = "joy"; let a = s.split(""); console.log(a); writes out ["j", "o", "y"]');
  ("2026-11-23, at the human's asking: split with nothing between the quotes, which Split showed only as a wrong answer. With nothing to cut at, every letter is its own item. Together with Join with nothing after it, a string can be turned around with reverse.");
  ("One word of three to five letters from the fruits of the Spirit, so the array fits a phone's width.");
  ('The wrong programs are: split(" ") (no space in s, so one item: the whole word), console.log(s) (split does not change s), and console.log(a[0]) (only the first letter).');
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "joy";
  function inputs_get() {
    "six words of three to five letters, shuffled";
    let words = ["joy", "love", "peace", "faith", "joy", "love"];
    let shuffled = list_shuffle_take(words, 6);
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
    let v2 = program_with(word3, "", "s");
    let v3 = program_with(word3, "", "a[0]");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "split at a comma remembered, then split with nothing between the quotes";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_split,
      ["", 's.split(",")', " cuts ", "s", " at each comma"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With nothing between the quotes, ",
      's.split("")',
      " cuts between every letter:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Split into letters",
    's.split("")',
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
