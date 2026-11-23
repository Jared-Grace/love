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
export function app_learn_js_lesson_array_reverse_words() {
  arguments_assert(arguments, 0);
  ('the words of a sentence turned around: let s = "love one another"; let a = s.split(" "); let r = a.reverse().join(" "); console.log(r); writes out another one love');
  ("2026-11-23, at the human's asking: after Reverse, then join. The same three steps, cut and joined at a space instead of between letters, so the words move and each word's letters stay as they were.");
  ("PICKED: short sayings from the New Testament letters - love one another, pray without ceasing, rejoice always, give thanks, be kind - each of two or three different words, so turning one around always changes it. Not picked: God is love, which turned around reads love is God, a different claim; nor any saying whose words turned around make a statement about God.");
  ('The wrong programs are: join(" ") with no reverse (the sentence as it was), reverse().join("") (the words run together with no spaces), and reverse() with no join (the words as an array).');
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "love one another";
  function inputs_get() {
    "five short sayings, shuffled";
    let sayings = [
      "love one another",
      "pray without ceasing",
      "rejoice always",
      "give thanks",
      "be kind",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, chain) {
    'let s = "..."; let a = s.split(" "); let r = a.chain; console.log(r);';
    let lines = [
      "let s = " + json_to(saying) + ";",
      'let a = s.split(" ");',
      "let r = a." + chain + ";",
      "console.log(r);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, 'reverse().join(" ")');
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, 'join(" ")');
    let v2 = program_with(saying3, 'reverse().join("")');
    let v3 = program_with(saying3, "reverse()");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "reverse then join remembered, then the same at a space";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_reverse_chain,
      ["", 'a.reverse().join("")', " turns the letters of a word around"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Cut and join at a space, ",
      '" "',
      ", and the words turn around instead, each word's letters staying as they were:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Turn the words around",
    'a.reverse().join(" ")',
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
