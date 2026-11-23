import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_words_loop_program } from "./app_learn_js_words_loop_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_capital_first } from "./app_learn_js_lesson_string_capital_first.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_capital_words() {
  arguments_assert(arguments, 0);
  ('every word of a sentence given a capital first letter: split at a space, let r = [], then for each word w, let f = w[0]; let big = f.toUpperCase(); r.push(big + w.slice(1)); then console.log(r.join(" ")); writes out Love Is Kind for "love is kind"');
  ("2026-11-23, at the human's asking: after A capital first letter. The same three lines done to every word in a loop and pushed, as Reverse each word does. Nothing in it is new.");
  ("The wrong programs are: r.push(big) (only the capitals), r.push(w) (the words as they were) and console.log(r) (the array, not joined).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "love is kind";
  function inputs_get() {
    "five sayings in small letters, shuffled";
    let sayings = [
      "love is kind",
      "rejoice in hope",
      "pray for one another",
      "let love be genuine",
      "give thanks in everything",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  let capitalled = [
    "  let f = w[0];",
    "  let big = f.toUpperCase();",
    "  r.push(big + w.slice(1));",
  ];
  function program_with(saying, body, logged) {
    let code = app_learn_js_words_loop_program(
      saying,
      ["let r = [];"],
      body,
      logged,
    );
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, capitalled, 'r.join(" ")');
    return code2;
  }
  function wrong_programs_of(saying3) {
    let only_big = [
      "  let f = w[0];",
      "  let big = f.toUpperCase();",
      "  r.push(big);",
    ];
    let v = program_with(saying3, only_big, 'r.join(" ")');
    let v2 = program_with(saying3, ["  r.push(w);"], 'r.join(" ")');
    let v3 = program_with(saying3, capitalled, "r");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "a capital first letter remembered, then done to every word in a loop";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_capital_first,
      ["", "big + s.slice(1)", " gives a word a capital first letter"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Done to each word ",
      "w",
      " in a loop and pushed, every word gets a capital first letter:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "A capital on every word",
    "r.push(big + w.slice(1))",
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
