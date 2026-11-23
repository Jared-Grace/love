import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_words_loop_program } from "./app_learn_js_words_loop_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_join_words } from "./app_learn_js_lesson_array_for_join_words.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_first_letters() {
  arguments_assert(arguments, 0);
  ('the first letter of each word of a sentence, joined: split at a space, let first = "", then for each word w, first = first + w[0]; writes out llbg for "let love be genuine"');
  ("2026-11-23, at the human's asking: after Total letters. The joining loop of for_join_words, adding each word's first letter rather than the whole word. Nothing in it is new.");
  ("The wrong programs are: first = w[0] (only the last word's first letter), first = first + w (the whole words joined) and first = first + a[0] (the first word, again and again).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "let love be genuine";
  function inputs_get() {
    "five sayings, shuffled";
    let sayings = [
      "let love be genuine",
      "pray for one another",
      "do all things without grumbling",
      "the Lord is my shepherd",
      "rejoice in hope",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, line) {
    let code = app_learn_js_words_loop_program(
      saying,
      ['let first = "";'],
      ["  " + line],
      "first",
    );
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, "first = first + w[0];");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "first = w[0];");
    let v2 = program_with(saying3, "first = first + w;");
    let v3 = program_with(saying3, "first = first + a[0];");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "joining words remembered, then joining first letters";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_join_words,
      ["", "s = s + a[i];", " adds each word onto the end of a string"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With ",
      "w[0]",
      " it adds only the first letter of each word:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "First letters",
    "first = first + w[0]",
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
