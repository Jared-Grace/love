import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_for } from "./app_learn_js_lesson_string_for.mjs";
import { app_learn_js_lesson_array_copy } from "./app_learn_js_lesson_array_copy.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_letters() {
  arguments_assert(arguments, 0);
  ('each letter of a string pushed into an array: let s = "joy"; let a = []; for (let i = 0; i < s.length; i++) { a.push(s[i]); } console.log(a); writes out ["j", "o", "y"]');
  ('2026-11-23, at the human\'s asking: the step before Split into letters, so s.split("") is met as the short way of a loop already written, the way Split follows Words apart. It puts together Every letter of a string, which reads s[i] in a loop, and Copying an array, which pushes each item into a new one.');
  ("One word of three to five letters from the fruits of the Spirit, so the array fits a phone's width.");
  ("The wrong programs are: a.push(s) (the whole word, once for each letter), i < s.length - 1 (the last letter left out), and a = s[i] in place of the push (only the last letter, and not an array).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "joy";
  function inputs_get() {
    "six words of three to five letters, shuffled";
    let words = ["joy", "love", "peace", "faith", "joy", "love"];
    let shuffled = list_shuffle_take(words, 6);
    return shuffled;
  }
  function program_with(word, until, body) {
    'let s = "..."; let a = []; a loop to until running body; console.log(a);';
    let lines = [
      "let s = " + json_to(word) + ";",
      "let a = [];",
      "for (let i = 0; i < " + until + "; i++) {",
      "  " + body,
      "}",
      "console.log(a);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word2) {
    let code2 = program_with(word2, "s.length", "a.push(s[i]);");
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(word3, "s.length", "a.push(s);");
    let v2 = program_with(word3, "s.length - 1", "a.push(s[i]);");
    let v3 = program_with(word3, "s.length", "a = s[i];");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "every letter of a string and copying an array remembered, then the two put together";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_for,
      ["a loop to ", "i < s.length", " reads every letter ", "s[i]"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_copy,
      [
        "",
        "b.push(a[i]);",
        " in a loop puts every item of ",
        "a",
        " into ",
        "b",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Pushing each letter ",
      "s[i]",
      " puts the letters of ",
      "s",
      " into an array:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Letters into an array",
    "a.push(s[i]);",
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
