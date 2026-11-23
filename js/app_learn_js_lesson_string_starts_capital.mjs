import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_capital_first } from "./app_learn_js_lesson_string_capital_first.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_starts_capital() {
  arguments_assert(arguments, 0);
  ('whether a word starts with a capital: let w = "Jesus"; let f = w[0]; let big = f.toUpperCase(); console.log(f === big); writes out true, and false for "love"');
  ("2026-11-23, at the human's asking: after Look for a word with a capital. A letter made a capital is the same letter only when it already was one, so comparing the first letter with its capital asks whether the word starts with one.");
  ("Half the words are names with a capital and half are not, so true and false both come up.");
  ("The wrong programs are: console.log(f !== big) (the opposite), console.log(w === big) (the whole word against one letter, always false) and big made with toLowerCase (true only when it starts small).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "Jesus";
  function inputs_get() {
    "six words, three starting with a capital, shuffled";
    let words = ["Jesus", "love", "Peter", "grace", "Mary", "hope"];
    let shuffled = list_shuffle_take(words, 6);
    return shuffled;
  }
  function program_with(word, method, logged) {
    let lines = [
      "let w = " + json_to(word) + ";",
      "let f = w[0];",
      "let big = f." + method + "();",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word2) {
    let code2 = program_with(word2, "toUpperCase", "f === big");
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(word3, "toUpperCase", "f !== big");
    let v2 = program_with(word3, "toUpperCase", "w === big");
    let v3 = program_with(word3, "toLowerCase", "f === big");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "a first letter made a capital remembered, then compared with the letter it was";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_capital_first,
      ["", "let big = f.toUpperCase();", " makes the first letter a capital"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "If ",
      "f",
      " was a capital already, ",
      "big",
      " is the same letter, so ",
      "f === big",
      " is true:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Starts with a capital?",
    "f === big",
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
