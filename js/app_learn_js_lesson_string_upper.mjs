import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_sayings_short } from "./app_learn_js_sayings_short.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_includes_e } from "./app_learn_js_lesson_string_includes_e.mjs";
import { app_learn_js_lesson_symbols_letters } from "./app_learn_js_lesson_symbols_letters.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_upper() {
  arguments_assert(arguments, 0);
  ('every letter of a string made a capital: let s = "Jesus wept"; let big = s.toUpperCase(); console.log(big); writes out JESUS WEPT');
  ("2026-11-23, at the human's asking: the first string function stepped through by the step-through, after Biggest minus smallest. It is chosen as Solve an expression, then A string, then what it does, as reverse is chosen with An array.");
  ("Each saying starts with a capital and has small letters after it, so the string as it was, every letter small, and every letter a capital all write out differently.");
  ("The wrong programs are: console.log(s) (s is not changed by toUpperCase; it gives back a new string) and s.toLowerCase() (every letter small).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "Jesus wept";
  function inputs_get() {
    "five sayings, shuffled";
    let sayings = app_learn_js_sayings_short();
    let shuffled = list_shuffle_take(sayings, 5);
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
    let code2 = program_with(saying2, "toUpperCase", "big");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "toUpperCase", "s");
    let v2 = program_with(saying3, "toLowerCase", "big");
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "a function called on a string remembered, then one that gives back the string in capitals";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_includes_e,
      ["", 's.includes("e")', " is a function called on the string ", "s"],
    );
    let box_letters = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_letters,
      context,
      app_learn_js_lesson_symbols_letters,
      [
        "every letter has an uppercase and a lowercase version, like ",
        "A",
        " and ",
        "a",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "s.toUpperCase()",
      " gives back a new string with every letter uppercase. ",
      "s",
      " itself is not changed:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every letter uppercase",
    "s.toUpperCase()",
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
