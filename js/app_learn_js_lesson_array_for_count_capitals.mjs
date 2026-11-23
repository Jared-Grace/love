import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_words_loop_program } from "./app_learn_js_words_loop_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_starts_capital } from "./app_learn_js_lesson_string_starts_capital.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_count_capitals() {
  arguments_assert(arguments, 0);
  ('how many words of a sentence start with a capital: split at a space, let count = 0, then for each word w, let f = w[0]; let big = f.toUpperCase(); if (f === big) { count++; }; writes out 2 for "Jesus said to Peter follow me"');
  ("2026-11-23, at the human's asking: after Starts with a capital?. That question asked of every word in a loop, counting the trues. One loop, nothing inside another.");
  ("The capital words in each saying are names, so the count is how many names it holds.");
  ("The wrong programs are: if (f !== big) (the words starting small), console.log(a.length) (how many words in all) and if (w === big) (the whole word against one letter, never, so 0).");
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
  function program_with(condition, saying, logged) {
    let code = app_learn_js_words_loop_program(
      saying,
      ["let count = 0;"],
      [
        "  let f = w[0];",
        "  let big = f.toUpperCase();",
        "  if (" + condition + ") {",
        "    count++;",
        "  }",
      ],
      logged,
    );
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with("f === big", saying2, "count");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with("f !== big", saying3, "count");
    let v2 = program_with("f === big", saying3, "a.length");
    let v3 = program_with("w === big", saying3, "count");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "whether a word starts with a capital remembered, then counted over every word";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_starts_capital,
      ["", "f === big", " is true when the word starts with a capital"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Asked of each word ",
      "w",
      " in a loop, ",
      "count++",
      " counts the words that start with a capital:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Count the capital words",
    "if (f === big)",
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
