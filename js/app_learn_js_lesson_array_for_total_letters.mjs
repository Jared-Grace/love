import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_words_loop_program } from "./app_learn_js_words_loop_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_total } from "./app_learn_js_lesson_array_for_total.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_total_letters() {
  arguments_assert(arguments, 0);
  ('how many letters the words of a sentence have in all: split at a space, let total = 0, then for each word w, total += w.length; writes out 16 for "let love be genuine"');
  ("2026-11-23, at the human's asking: after Keep the long words. The adding-up loop of for_total, adding each word's length rather than each number. Nothing in it is new.");
  ("The wrong programs are: total = w.length (only the last word's letters), total += w (the words stuck onto 0 as text) and console.log(s.length) (the spaces counted too).");
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
  function program_with(saying, line, logged) {
    let code = app_learn_js_words_loop_program(
      saying,
      ["let total = 0;"],
      ["  " + line],
      logged,
    );
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, "total += w.length;", "total");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "total = w.length;", "total");
    let v2 = program_with(saying3, "total += w;", "total");
    let v3 = program_with(saying3, "total += w.length;", "s.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "adding up remembered, then adding up the lengths of the words";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_total,
      ["", "total += a[i];", " adds each item onto the total"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With ",
      "total += w.length;",
      " it adds up how many letters each word has:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Total letters",
    "total += w.length",
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
