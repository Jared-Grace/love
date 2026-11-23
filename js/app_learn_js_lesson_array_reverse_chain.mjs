import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_reverse_word } from "./app_learn_js_lesson_array_reverse_word.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_reverse_chain() {
  arguments_assert(arguments, 0);
  ('a word turned around with join called straight on what reverse hands back: let s = "joy"; let a = s.split(""); let r = a.reverse().join(""); console.log(r); writes out yoj');
  ('2026-11-23, at the human\'s asking, the one-line version agreed for Turn a word around: the one new idea is that a.reverse() hands a back as well as turning it, so .join("") can go straight after it. Only reverse and join are joined, on a name, so the one new idea is all that is new.');
  ('PICKED: a.reverse().join("") on a name, rather than s.split("").reverse().join(""). The step-through can turn a name around as one step and write the array it hands back into the line, as it does for a.pop(); turning around what split hands back, which has no name, it cannot yet. Not picked: the whole one line now, which waits on the step-through learning that.');
  ("Words of three to five letters from the fruits of the Spirit and hope, none the same backwards, so turning one around always changes it.");
  ('The wrong programs are: a.join("") with no reverse (the word as it was), a.reverse() with no join (the letters as an array), and join(", ") (a comma and space between the letters).');
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "joy";
  function inputs_get() {
    "five words of three to five letters, shuffled";
    let words = ["joy", "love", "peace", "faith", "hope"];
    let shuffled = list_shuffle_take(words, 5);
    return shuffled;
  }
  function program_with(word, chain) {
    'let s = "..."; let a = s.split(""); let r = a.chain; console.log(r);';
    let lines = [
      "let s = " + json_to(word) + ";",
      'let a = s.split("");',
      "let r = a." + chain + ";",
      "console.log(r);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word2) {
    let code2 = program_with(word2, 'reverse().join("")');
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(word3, 'join("")');
    let v2 = program_with(word3, "reverse()");
    let v3 = program_with(word3, 'reverse().join(", ")');
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the three lines remembered, then reverse handing a back so join follows it";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_reverse_word,
      [
        "",
        "a.reverse();",
        " then ",
        'let r = a.join("");',
        " turns a word around",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.reverse()",
      " also hands ",
      "a",
      " back, turned around, so ",
      '.join("")',
      " can go straight after it:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Reverse, then join",
    'a.reverse().join("")',
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
