import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_longest_word } from "./app_learn_js_lesson_array_for_longest_word.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_shortest_word() {
  arguments_assert(arguments, 0);
  ('the shortest word of a sentence: split at a space, let short = a[0], then for each word w, if (w.length < short.length) { short = w; }; writes out the shortest word, for "rejoice in hope" in');
  ("2026-11-23, at the human's asking: after How many times a word?. The Longest word loop turned around: < for >, and short starting as the first word rather than as empty, since nothing is shorter than empty.");
  ("Sayings whose shortest word is shorter than every other, so there is one answer.");
  ("The wrong programs are: the loop with > (the longest word), the loop with no if (short = w every time, so the last word) and console.log(short.length) (how long the shortest word is, not the word).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "rejoice in hope";
  function inputs_get() {
    "five sayings each with one shortest word, shuffled";
    let sayings = [
      "rejoice in hope",
      "let love be genuine",
      "encourage one another",
      "do all things without grumbling",
      "rejoice always",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, body, logged) {
    "the split, the loop over the words with body inside, then the log";
    let lines = [
      "let s = " + json_to(saying) + ";",
      'let a = s.split(" ");',
      "let short = a[0];",
      "for (let i = 0; i < a.length; i++) {",
      "  let w = a[i];",
      ...body,
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function body_if(operator) {
    let body = [
      "  if (w.length " + operator + " short.length) {",
      "    short = w;",
      "  }",
    ];
    return body;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, body_if("<"), "short");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, body_if(">"), "short");
    let v2 = program_with(saying3, ["  short = w;"], "short");
    let v3 = program_with(saying3, body_if("<"), "short.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "longest word remembered, then the same loop with < and starting from the first word";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_longest_word,
      [
        "",
        "if (w.length > long.length) { long = w; }",
        " keeps the longest word seen so far",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With ",
      "<",
      " it keeps the shortest word instead, starting from ",
      "a[0]",
      ", the first word:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Shortest word",
    "w.length < short.length",
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
