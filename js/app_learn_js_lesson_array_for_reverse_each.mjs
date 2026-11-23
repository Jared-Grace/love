import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_words_loop_program } from "./app_learn_js_words_loop_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_reverse_chain } from "./app_learn_js_lesson_array_reverse_chain.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_reverse_each() {
  arguments_assert(arguments, 0);
  ('each word of a sentence turned around, the words kept in order: split at a space, let r = [], then for each word w, let b = w.split(""); r.push(b.reverse().join("")); then console.log(r.join(" ")); writes out eciojer ni epoh for "rejoice in hope"');
  ("2026-11-23, at the human's asking: after Average word length. The reverse_chain way of turning one word around, done to every word in a loop and pushed. Nothing in it is new.");
  ('The split is on its own line, let b = w.split(""), because the step by step cannot yet follow w.split("").reverse(), a call on what another call hands back - measured 2026-11-23, it throws.');
  ('The wrong programs are: r.push(w) (the words kept as they are), console.log(r) (the array, not joined) and console.log(r.reverse().join(" ")) (the order of the words turned around too).');
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "rejoice in hope";
  function inputs_get() {
    "five sayings, shuffled";
    let sayings = [
      "rejoice in hope",
      "let love be genuine",
      "pray for one another",
      "God is love",
      "give thanks in everything",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  let turned = ['  let b = w.split("");', '  r.push(b.reverse().join(""));'];
  function program_with(saying, body, logged) {
    let code = app_learn_js_words_loop_program(
      saying,
      ["let r = [];"],
      body,
      logged,
    );
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, turned, 'r.join(" ")');
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, ["  r.push(w);"], 'r.join(" ")');
    let v2 = program_with(saying3, turned, "r");
    let v3 = program_with(saying3, turned, 'r.reverse().join(" ")');
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "turning one word around remembered, then every word in a loop";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_reverse_chain,
      [
        "",
        'let a = s.split(""); let r = a.reverse().join("");',
        " turns a word around",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Done to each word ",
      "w",
      " in a loop and pushed, it turns every word around but keeps them in order:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Reverse each word",
    'b.reverse().join("")',
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
