import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_sayings_short } from "./app_learn_js_sayings_short.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { less_than } from "./less_than.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_upper } from "./app_learn_js_lesson_string_upper.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_no_lowercase() {
  arguments_assert(arguments, 0);
  ('whether a string has no lowercase letters: let s = "JESUS WEPT"; let big = s.toUpperCase(); console.log(s === big); writes out true, and false for "Jesus wept"');
  ("2026-11-24, at the human's asking: after Keep the uppercase words. Named no lowercase rather than all uppercase, the human's correction, because a string may hold symbols that are not letters, which toUpperCase leaves alone; so a string of no letters at all, such as 123!, rightly answers true. Not picked: All uppercase?, which 123! would make a false claim.");
  ("The sayings are the shared Bible sayings of Every letter uppercase, at the human's asking, three of the five made all uppercase, so true and false both come up. They hold no commas or other symbols, so the writing says spaces do not change.");
  ("The wrong programs are: console.log(s !== big) (the opposite), big made with toLowerCase (true only when there is no uppercase letter) and console.log(s.length === big.length) (always true, the letters change but not how many there are).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = "JESUS WEPT";
  function inputs_get() {
    "the five shared sayings, three of them made all uppercase, shuffled";
    let list = app_learn_js_sayings_short();
    let sayings = list_shuffle_take(list, 5);
    let made = [];
    for (let i = 0; less_than(i, sayings.length); i++) {
      let saying5 = sayings[i];
      if (less_than(i, 3)) {
        let u = text_upper_to(saying5);
        made.push(u);
      } else {
        made.push(saying5);
      }
    }
    let shuffled = list_shuffle_take(made, 5);
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
    ("2026-11-24, the human's wording, made plural and plainer: uppercasing and lowercasing only change letters, and spaces and other symbols stay the same. True of every string these lessons use. Not said: that every letter changes, which Chinese, Arabic and Hebrew letters do not, and the few symbols that do change, circled letters and Roman numerals, never appear here.");
    html_div_text(box_two, "Uppercasing and lowercasing only change letters");
    html_div_text(box_two, "Spaces and other symbols stay the same");
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
