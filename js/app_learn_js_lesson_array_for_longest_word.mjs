import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_biggest } from "./app_learn_js_lesson_array_for_biggest.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_longest_word() {
  arguments_assert(arguments, 0);
  ('the longest word of a sentence: split at a space, then for each word w, if (w.length > long.length) { long = w; }; writes out the longest word, for "pray for one another" another');
  ("2026-11-23, at the human's asking: after First two words. The biggest lesson's loop, comparing how long each word is rather than how big each number is. One loop, nothing inside another.");
  ("PICKED: let w = a[i]; then w.length, rather than a[i].length, since the step-through cannot yet read a property of an item read by index.");
  ("Sayings whose longest word is longer than every other, so there is one answer, and in three of them it is not the last word.");
  ("The wrong programs are: the loop with no if (long = w every time, so the last word) and console.log(long.length) (how long the longest word is, not the word).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "pray for one another";
  function inputs_get() {
    "five sayings each with one longest word, shuffled";
    let sayings = [
      "rejoice always",
      "encourage one another",
      "rejoice in hope",
      "pray for one another",
      "let love be genuine",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, body, logged) {
    "the split, the loop over the words with body inside, then the log";
    let lines = [
      "let s = " + json_to(saying) + ";",
      'let a = s.split(" ");',
      'let long = "";',
      "for (let i = 0; i < a.length; i++) {",
      "  let w = a[i];",
      ...body,
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function body_if() {
    let body = ["  if (w.length > long.length) {", "    long = w;", "  }"];
    return body;
  }
  function program_of(saying2) {
    let v3 = body_if();
    let code2 = program_with(saying2, v3, "long");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, ["  long = w;"], "long");
    let v4 = body_if();
    let v2 = program_with(saying3, v4, "long.length");
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "biggest remembered, then the same loop comparing lengths of words";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_biggest,
      [
        "",
        "if (a[i] > big) { big = a[i]; }",
        " keeps the biggest item seen so far",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Comparing ",
      "w.length",
      " with ",
      "long.length",
      " instead keeps the longest word seen so far:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Longest word",
    "w.length > long.length",
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
