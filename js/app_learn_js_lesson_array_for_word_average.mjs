import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_words_loop_program } from "./app_learn_js_words_loop_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_total_letters } from "./app_learn_js_lesson_array_for_total_letters.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_word_average() {
  arguments_assert(arguments, 0);
  ('how long the words of a sentence are on average: the Total letters loop, then console.log(total / a.length); writes out 4 for "let love be genuine"');
  ("2026-11-23, at the human's asking: after Where is the longest word?. Total letters divided by how many words there are, as for_average divides a total by a.length. Nothing in it is new.");
  ("The wrong programs are: console.log(total) (not divided), console.log(s.length / a.length) (the spaces counted as letters) and console.log(a.length / total) (divided the wrong way round).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "let love be genuine";
  function inputs_get() {
    "five sayings, shuffled";
    let sayings = [
      "let love be genuine",
      "God is love",
      "pray without ceasing",
      "peace be with you",
      "give thanks in everything",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, logged) {
    let code = app_learn_js_words_loop_program(
      saying,
      ["let total = 0;"],
      ["  total += w.length;"],
      logged,
    );
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, "total / a.length");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "total");
    let v2 = program_with(saying3, "s.length / a.length");
    let v3 = program_with(saying3, "a.length / total");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "total letters remembered, then divided by how many words";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_total_letters,
      ["", "total += w.length;", " adds up the letters of every word"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Then ",
      "total / a.length",
      " shares the letters out between the words, which is how long a word is on average:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Average word length",
    "total / a.length",
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
