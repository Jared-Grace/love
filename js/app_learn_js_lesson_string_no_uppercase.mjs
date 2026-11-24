import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_sayings_short } from "./app_learn_js_sayings_short.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_lower } from "./app_learn_js_lesson_string_lower.mjs";
import { app_learn_js_lesson_string_no_lowercase } from "./app_learn_js_lesson_string_no_lowercase.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_no_uppercase() {
  arguments_assert(arguments, 0);
  ('whether a string has no uppercase letters: let s = "jesus wept"; let low = s.toLowerCase(); console.log(s === low); writes out true, and false for "Jesus wept"');
  ("2026-11-24, at the human's asking: after No lowercase?, the same question turned round. Named no uppercase rather than all lowercase for the same reason: a string may hold symbols that are not letters.");
  ("The sayings are the shared Bible sayings, three of the five made all lowercase, so true and false both come up; each starts with an uppercase letter, so the ones left as they are answer false.");
  ("The wrong programs are: console.log(s !== low) (the opposite), low made with toUpperCase (true only when there is no lowercase letter) and console.log(s.length === low.length) (always true).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = "jesus wept";
  function inputs_get() {
    "the five shared sayings, three of them made all lowercase, shuffled";
    let list = app_learn_js_sayings_short();
    let sayings = list_shuffle_take(list, 5);
    let made = [];
    for (let i = 0; less_than(i, sayings.length); i++) {
      let saying5 = sayings[i];
      if (less_than(i, 3)) {
        let l = text_lower_to(saying5);
        made.push(l);
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
      "let low = s." + method + "();",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, "toLowerCase", "s === low");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "toLowerCase", "s !== low");
    let v2 = program_with(saying3, "toUpperCase", "s === low");
    let v3 = program_with(saying3, "toLowerCase", "s.length === low.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "a whole string made lowercase, then compared with the string it was, the way No lowercase? did with uppercase";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_lower,
      [
        "",
        "s.toLowerCase()",
        " changes every uppercase letter in ",
        "s",
        " to lowercase",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_three,
      context,
      app_learn_js_lesson_string_no_lowercase,
      ["", "s === big", " is true when ", "s", " has no lowercase letters"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    html_div_text(box_two, "Uppercasing and lowercasing only change letters");
    html_div_text(box_two, "Spaces and other symbols stay the same");
    app_learn_js_div_cycle_code(box_two, [
      "So if ",
      "s",
      " has no uppercase letters, then ",
      "toLowerCase",
      " doesn't change anything",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Then ",
      "low",
      " is the same as ",
      "s",
      ", and ",
      "s === low",
      " is true:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "No uppercase?",
    "s === low",
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
