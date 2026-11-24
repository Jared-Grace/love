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
export function app_learn_js_lesson_string_no_lowercase() {
  arguments_assert(arguments, 0);
  ('whether a string has no lowercase letters: let s = "HI, GOD!"; let big = s.toUpperCase(); console.log(s === big); writes out true, and false for "Hi, GOD!"');
  ("2026-11-24, at the human's asking: after Keep the uppercase words. Named no lowercase rather than all uppercase, the human's correction, because a string may hold symbols that are not letters, which toUpperCase leaves alone; so a string of no letters at all, such as 123!, rightly answers true. Not picked: All uppercase?, which 123! would make a false claim.");
  ("Half the sayings are written all in uppercase and half are not, so true and false both come up.");
  ("The wrong programs are: console.log(s !== big) (the opposite), big made with toLowerCase (true only when there is no uppercase letter) and console.log(s.length === big.length) (always true, the letters change but not how many there are).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = "HI, GOD!";
  function inputs_get() {
    "six sayings, three with no lowercase letters, shuffled";
    let sayings = [
      "HI, GOD!",
      "Hi, GOD!",
      "AMEN",
      "Amen",
      "JESUS WEPT.",
      "Jesus wept.",
    ];
    let shuffled = list_shuffle_take(sayings, 6);
    return shuffled;
  }
  function program_with(saying, method, logged) {
    let lines = [
      "let s = " + json_to(saying) + ";",
      "let big = s." + method + "();",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, "toUpperCase", "s === big");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "toUpperCase", "s !== big");
    let v2 = program_with(saying3, "toLowerCase", "s === big");
    let v3 = program_with(saying3, "toUpperCase", "s.length === big.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "a whole string made uppercase, then compared with the string it was";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_upper,
      [
        "",
        "s.toUpperCase()",
        " changes every lowercase letter in ",
        "s",
        " to uppercase",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Symbols that are not letters, like ",
      ",",
      " and ",
      "!",
      ", do not change",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "So if ",
      "s",
      " has no lowercase letters, then ",
      "toUpperCase",
      " doesn't change anything",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Then ",
      "big",
      " is the same as ",
      "s",
      ", and ",
      "s === big",
      " is true:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "No lowercase?",
    "s === big",
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
