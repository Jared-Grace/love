import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_upper } from "./app_learn_js_lesson_string_upper.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_lower() {
  arguments_assert(arguments, 0);
  ('every letter of a string made small: let s = "Love Is Patient"; let low = s.toLowerCase(); console.log(low); writes out love is patient');
  ("2026-11-23, at the human's asking: after A capital on every word. The twin of Every letter a capital; nothing in it is new.");
  ("Each saying has a capital at the start of every word and small letters after, so the string as it was, every letter small, and every letter a capital all write out differently.");
  ("The wrong programs are: console.log(s) (s is not changed by toLowerCase; it gives back a new string) and s.toUpperCase() (every letter a capital).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "Love Is Patient";
  function inputs_get() {
    "five sayings, shuffled";
    let sayings = [
      "Love Is Patient",
      "God Is Light",
      "Pray Without Ceasing",
      "The Lord Is Near",
      "Christ Is Risen",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, method, logged) {
    let lines = [
      "let s = " + json_to(saying) + ";",
      "let low = s." + method + "();",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, "toLowerCase", "low");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "toLowerCase", "s");
    let v2 = program_with(saying3, "toUpperCase", "low");
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "every letter a capital remembered, then every letter small";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_upper,
      [
        "",
        "s.toUpperCase()",
        " gives back the string with every letter uppercase",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "s.toLowerCase()",
      " gives back a new string with every letter lowercase:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every letter lowercase",
    "s.toLowerCase()",
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
