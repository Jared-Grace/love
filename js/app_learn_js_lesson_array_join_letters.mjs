import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_join_words } from "./app_learn_js_lesson_array_for_join_words.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_join_letters() {
  arguments_assert(arguments, 0);
  ('words or letters put together with nothing between them: let a = ["love", "joy"]; let s = a.join(""); console.log(s); writes out lovejoy');
  ("2026-11-23, at the human's asking: join with nothing between the quotes, which Join showed only as a wrong answer. Right after Split into letters, it can undo it.");
  ('2026-11-23, at the human\'s asking, whose words were: would join words, not just letters? So half the questions join words and half join letters, and the reminder is Words together, the loop s = s + a[i] that join("") replaces, rather than Join. Not picked: words only, which would leave the letters of Split into letters never put back.');
  ("Words: two or three of love, joy and peace. Letters: one word of three to five letters. Both fit a phone's width.");
  ('The wrong programs are: join(", ") (a comma and space between the letters), join(" ") (a space between them), and console.log(a) (join does not change a).');
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = ["love", "joy"];
  let example_letters = ["j", "o", "y"];
  function inputs_get() {
    "three arrays of words and three of the letters of a word, shuffled";
    function words_sized(size) {
      let words = list_shuffle_take(["love", "joy", "peace"], size);
      return words;
    }
    function letters_of(word) {
      let letters = word.split("");
      return letters;
    }
    let word_inputs = list_map([2, 3, 2], words_sized);
    let letter_inputs = list_shuffle_take_map(
      ["joy", "love", "peace", "faith"],
      3,
      letters_of,
    );
    let inputs = list_concat(word_inputs, letter_inputs);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function program_with(list, separator, logged) {
    "let a = list; let s = a.join(separator); console.log(logged);";
    let codes = list_map(list, json_to);
    let lines = [
      "let a = " + js_code_array(codes) + ";",
      "let s = a.join(" + json_to(separator) + ");",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word2) {
    let code2 = program_with(word2, "", "s");
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(word3, ", ", "s");
    let v2 = program_with(word3, " ", "s");
    let v3 = program_with(word3, "", "a");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the loop adding every word onto a string remembered, then join doing it in one call, for words and for letters";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_join_words,
      [
        "",
        "s = s + a[i];",
        " in a loop adds every item of ",
        "a",
        " onto ",
        "s",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      'a.join("")',
      " does the same in one line. With nothing between the quotes, it puts nothing between the items:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, ["So letters make a word again:"]);
    let code4 = program_of(example_letters);
    let lines3 = text_split_newline(code4);
    let value2 = eval_console_log_lines(code4);
    app_learn_js_code_lines_writes_out(box_two, lines3, value2);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Join with nothing",
    'a.join("")',
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
