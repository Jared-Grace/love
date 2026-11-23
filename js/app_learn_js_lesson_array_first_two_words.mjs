import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_slice_range } from "./app_learn_js_lesson_array_slice_range.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_first_two_words() {
  arguments_assert(arguments, 0);
  ('the first two words of a sentence: let s = "pray for one another"; let a = s.split(" "); console.log(a.slice(0, 2).join(" ")); writes out pray for');
  ("2026-11-23, at the human's asking: after Last word. Split at a space, slice the first two items, and join them back with a space. Nothing in it is new.");
  ("Sayings from the New Testament letters of three to five words, so there is always a word left over after the first two.");
  ('The wrong programs are: console.log(a.slice(0, 2)) (the two words as an array, not joined back) and console.log(a.slice(2).join(" ")) (the words after the first two).');
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "pray for one another";
  function inputs_get() {
    "five sayings of three to five words, shuffled";
    let sayings = [
      "pray without ceasing",
      "pray for one another",
      "let love be genuine",
      "give thanks in everything",
      "do all things without grumbling",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, logged) {
    'let s = "..."; let a = s.split(" "); console.log(logged);';
    let lines = [
      "let s = " + json_to(saying) + ";",
      'let a = s.split(" ");',
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, 'a.slice(0, 2).join(" ")');
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "a.slice(0, 2)");
    let v2 = program_with(saying3, 'a.slice(2).join(" ")');
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "slice from one index to another remembered, then asked of the words of a sentence and joined back";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_slice_range,
      [
        "",
        "a.slice(1, 3)",
        " is the items from index ",
        "1",
        " up to, not including, index ",
        "3",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.slice(0, 2)",
      " is the first two words, and ",
      '.join(" ")',
      " puts them back together with a space:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "First two words",
    'a.slice(0, 2).join(" ")',
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
