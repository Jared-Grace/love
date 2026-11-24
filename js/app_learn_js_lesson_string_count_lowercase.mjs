import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_is_lowercase } from "./app_learn_js_lesson_string_is_lowercase.mjs";
import { app_learn_js_lesson_string_count_uppercase } from "./app_learn_js_lesson_string_count_uppercase.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_count_lowercase() {
  arguments_assert(arguments, 0);
  ('how many lowercase letters a string holds: let count = 0, then for each index i, let c = s[i]; let big = c.toUpperCase(); if (c !== big) { count++; }; writes out 8 for "Jesus wept"');
  ("2026-11-24, at the human's asking: after Count the uppercase letters, the same loop with the Lowercase letter? test. One loop, nothing inside another.");
  ("The short strings GoD, Joy and Lo! are there for the step-by-step quiz and the guided example, which draw only the questions whose loops run 1, 2 or 3 times: GoD counts 1, Joy 2, and Lo! 1 with the symbol trap. The sayings are those of Count the uppercase letters.");
  ("The wrong programs are: if (c === big) (counts uppercase letters, spaces and commas), big made with toLowerCase (counts the uppercase letters) and console.log(s.length) (every character).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = "Jesus wept";
  function inputs_get() {
    "three strings of up to three characters, then three of six sayings, shuffled together";
    let shorts = ["GoD", "Joy", "Lo!"];
    let sayings = [
      "Jesus said to Peter follow me",
      "Mary and Martha welcomed Jesus",
      "Paul wrote to Timothy his son",
      "the Lord is my shepherd",
      "Andrew brought Simon to Jesus",
      "Holy, holy, holy is the LORD",
    ];
    let taken = list_shuffle_take(sayings, 3);
    let both = list_concat(shorts, taken);
    list_shuffle(both);
    return both;
  }
  function program_with(saying, method, condition, logged) {
    let lines = [
      "let s = " + json_to(saying) + ";",
      "let count = 0;",
      "for (let i = 0; i < s.length; i++) {",
      "  let c = s[i];",
      "  let big = c." + method + "();",
      "  if (" + condition + ") {",
      "    count++;",
      "  }",
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, "toUpperCase", "c !== big", "count");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "toUpperCase", "c === big", "count");
    let v2 = program_with(saying3, "toLowerCase", "c !== big", "count");
    let v3 = program_with(saying3, "toUpperCase", "c !== big", "s.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the Lowercase letter? test and counting the uppercase letters remembered, then the test counted over every character";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_is_lowercase,
      ["", "c !== big", " is true only when ", "c", " is a lowercase letter"],
    );
    let box_counting = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_counting,
      context,
      app_learn_js_lesson_string_count_uppercase,
      [
        "",
        "if (c !== low) { count++; }",
        " in a loop counts the uppercase letters in string ",
        "s",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "In the same way, ",
      "if (c !== big) { count++; }",
      " in a loop counts the lowercase letters in string ",
      "s",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Count the lowercase letters",
    "if (c !== big)",
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
