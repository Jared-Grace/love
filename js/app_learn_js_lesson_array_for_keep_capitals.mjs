import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_words_loop_program } from "./app_learn_js_words_loop_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_count_capitals } from "./app_learn_js_lesson_array_for_count_capitals.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_keep_capitals() {
  arguments_assert(arguments, 0);
  ('the words of a sentence that start with a capital, kept: split at a space, let names = [], then for each word w, let f = w[0]; let big = f.toUpperCase(); if (f === big) { names.push(w); }, then console.log(names.join(" ")); writes out Jesus Peter for "Jesus said to Peter follow me"');
  ("2026-11-23, at the human's asking: after Count the capital words. The same loop, pushing the word rather than counting it, as Keep the long words does. Nothing in it is new.");
  ("The wrong programs are: names.push(big) (only the first letters), if (f !== big) (the words starting small) and console.log(names) (the array itself, not joined).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "Jesus said to Peter follow me";
  function inputs_get() {
    "five sayings with names in them, shuffled";
    let sayings = [
      "Jesus said to Peter follow me",
      "Mary and Martha welcomed Jesus",
      "Paul wrote to Timothy his son",
      "the Lord is my shepherd",
      "Andrew brought Simon to Jesus",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, condition, pushed, logged) {
    let code = app_learn_js_words_loop_program(
      saying,
      ["let names = [];"],
      [
        "  let f = w[0];",
        "  let big = f.toUpperCase();",
        "  if (" + condition + ") {",
        "    names.push(" + pushed + ");",
        "  }",
      ],
      logged,
    );
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, "f === big", "w", 'names.join(" ")');
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "f === big", "big", 'names.join(" ")');
    let v2 = program_with(saying3, "f !== big", "w", 'names.join(" ")');
    let v3 = program_with(saying3, "f === big", "w", "names");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "counting the capital words remembered, then keeping them";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_count_capitals,
      [
        "",
        "if (f === big) { count++; }",
        " counts the words that start with a capital",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With ",
      "names.push(w)",
      " in place of ",
      "count++",
      ", it keeps those words:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Keep the capital words",
    "names.push(w)",
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
