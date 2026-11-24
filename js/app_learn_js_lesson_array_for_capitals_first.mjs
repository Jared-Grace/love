import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_words_loop_program } from "./app_learn_js_words_loop_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_first_letters } from "./app_learn_js_lesson_array_for_first_letters.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_capitals_first() {
  arguments_assert(arguments, 0);
  ('the first letter of each word of a sentence made a capital and joined: split at a space, let first = "", then for each word w, let f = w[0]; let big = f.toUpperCase(); first = first + big; writes out LIK for "love is kind"');
  ("2026-11-23, at the human's asking: after Count a word, any capitals. First letters with each letter made a capital before it is added, the toUpperCase of A capital first letter. Nothing in it is new.");
  ("The wrong programs are: first = first + f (the small letters), first = big (only the last word's capital) and first = first + w (the whole words joined).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "love is kind";
  function inputs_get() {
    "five sayings in small letters, shuffled";
    let sayings = [
      "love is kind",
      "let love be genuine",
      "pray for one another",
      "rejoice in hope",
      "give thanks in everything",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, line) {
    let code = app_learn_js_words_loop_program(
      saying,
      ['let first = "";'],
      ["  let f = w[0];", "  let big = f.toUpperCase();", "  " + line],
      "first",
    );
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, "first = first + big;");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "first = first + f;");
    let v2 = program_with(saying3, "first = big;");
    let v3 = program_with(saying3, "first = first + w;");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "first letters remembered, then each made a capital before it is added";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_first_letters,
      ["", "first = first + w[0];", " adds the first letter of each word"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With each first letter made uppercase by ",
      "f.toUpperCase()",
      " before it is added:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Uppercase first letters",
    "first = first + big;",
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
