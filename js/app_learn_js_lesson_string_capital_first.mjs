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
export function app_learn_js_lesson_string_capital_first() {
  arguments_assert(arguments, 0);
  ('a word with only its first letter made a capital: let s = "love"; let f = s[0]; let big = f.toUpperCase(); console.log(big + s.slice(1)); writes out Love');
  ("2026-11-23, at the human's asking: after Every letter a capital. The first letter is taken into a name of its own, made a capital, and joined to the rest of the word, s.slice(1).");
  ("f is a line of its own because the step-through calls toUpperCase only on a plain name, as it does pop and reverse; s[0].toUpperCase() would need s[0] solved first, which it cannot draw yet.");
  ("The wrong programs are: console.log(big) (only the capital), console.log(big + s) (the first letter twice) and console.log(f + s.slice(1)) (the small letter, so the word as it was).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "love";
  function inputs_get() {
    "five words, shuffled";
    let words = ["love", "joy", "peace", "hope", "grace"];
    let shuffled = list_shuffle_take(words, 5);
    return shuffled;
  }
  function program_with(word, logged) {
    let lines = [
      "let s = " + json_to(word) + ";",
      "let f = s[0];",
      "let big = f.toUpperCase();",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word2) {
    let code2 = program_with(word2, "big + s.slice(1)");
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(word3, "big");
    let v2 = program_with(word3, "big + s");
    let v3 = program_with(word3, "f + s.slice(1)");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "every letter a capital remembered, then only the first, joined to the rest";
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
      "Called on the first letter ",
      "s[0]",
      ", only that letter is made uppercase. Then ",
      "s.slice(1)",
      " adds the rest of the word:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Uppercase first letter",
    "big + s.slice(1)",
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
