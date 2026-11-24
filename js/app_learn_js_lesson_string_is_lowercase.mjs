import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_is_uppercase } from "./app_learn_js_lesson_string_is_uppercase.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_is_lowercase() {
  arguments_assert(arguments, 0);
  ('whether one character is a lowercase letter: let c = "j"; let big = c.toUpperCase(); console.log(c !== big); writes out true, and false for "J", "!" and a space');
  ("2026-11-24, at the human's asking: after Uppercase letter?, the same test turned round: a lowercase letter is one that toUpperCase changes.");
  ("The characters are the same eight as Uppercase letter?, three uppercase, three lowercase, ! and a space.");
  ("The wrong programs are: console.log(c === big) (the opposite), toLowerCase with c === big (true of ! and the space too), and console.log(c.length === big.length) (always true).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = "j";
  function inputs_get() {
    "six of eight characters, shuffled";
    let characters = ["J", "G", "R", "w", "l", "e", "!", " "];
    let shuffled = list_shuffle_take(characters, 6);
    return shuffled;
  }
  function program_with(character, method, logged) {
    let lines = [
      "let c = " + json_to(character) + ";",
      "let big = c." + method + "();",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(character2) {
    let code2 = program_with(character2, "toUpperCase", "c !== big");
    return code2;
  }
  function wrong_programs_of(character3) {
    let v = program_with(character3, "toUpperCase", "c === big");
    let v2 = program_with(character3, "toLowerCase", "c === big");
    let v3 = program_with(character3, "toUpperCase", "c.length === big.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(character4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the Uppercase letter? test remembered, then turned round";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_is_uppercase,
      [
        "",
        "c !== c.toLowerCase()",
        " is ",
        "true",
        " only when ",
        "c",
        " is an uppercase letter",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "In the same way, only a lowercase letter changes when it is uppercased, so ",
      "c !== big",
      " is ",
      "true",
      " only when ",
      "c",
      " is a lowercase letter:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Lowercase letter?",
    "c !== big",
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
