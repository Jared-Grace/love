import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_words_loop_program } from "./app_learn_js_words_loop_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_small_at } from "./app_learn_js_lesson_array_for_small_at.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_longest_at() {
  arguments_assert(arguments, 0);
  ('where the longest word of a sentence is: split at a space, let long = "", let at = 0, then for each word w, if (w.length > long.length) { long = w; at = i; }; writes out 3 for "let love be genuine"');
  ("2026-11-23, at the human's asking: after Count words starting with a letter. The Longest word loop with the at = i of for_small_at, which keeps where the smallest item is. Nothing in it is new.");
  ("Sayings whose longest word is longer than every other, so there is one answer; the longest word is first in two of them, so at keeping 0 is sometimes right and sometimes not.");
  ("The wrong programs are: console.log(long) (the word, not where it is), at = i outside the if (where the last word is) and at = w.length (how long the longest word is).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "let love be genuine";
  function inputs_get() {
    "five sayings each with one longest word, shuffled";
    let sayings = [
      "rejoice in hope",
      "let love be genuine",
      "encourage one another",
      "pray for one another",
      "do all things without grumbling",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, body, logged) {
    let code = app_learn_js_words_loop_program(
      saying,
      ['let long = "";', "let at = 0;"],
      body,
      logged,
    );
    return code;
  }
  function body_if(at_line) {
    let body = [
      "  if (w.length > long.length) {",
      "    long = w;",
      "    " + at_line,
      "  }",
    ];
    return body;
  }
  function program_of(saying2) {
    let v4 = body_if("at = i;");
    let code2 = program_with(saying2, v4, "at");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v5 = body_if("at = i;");
    let v = program_with(saying3, v5, "long");
    let v2 = program_with(
      saying3,
      ["  if (w.length > long.length) {", "    long = w;", "  }", "  at = i;"],
      "at",
    );
    let v6 = body_if("at = w.length;");
    let v3 = program_with(saying3, v6, "at");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "where the smallest is remembered, then where the longest word is";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_small_at,
      [
        "",
        "if (a[i] < small) { small = a[i]; at = i; }",
        " keeps where the smallest item is",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "The same ",
      "at = i;",
      " inside the Longest word ",
      "if",
      " keeps where the longest word is:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where is the longest word?",
    "at = i",
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
