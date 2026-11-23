import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_includes } from "./app_learn_js_lesson_array_includes.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_includes_word() {
  arguments_assert(arguments, 0);
  ('whether a sentence has a whole word: let s = "pray for one another"; let a = s.split(" "); console.log(a.includes("on")); writes out false, though s.includes("on") is true');
  ("2026-11-23, at the human's asking: after Count the words. Split at a space, then includes, asks about whole words: on is inside one and another, but is not one of the words.");
  ("PICKED: each question is a saying and a word, half of them a whole word of the saying (true) and half only part of one (false), so the learner sees that a piece of a word is not a word. Not picked: a word nowhere in the saying, since then the string's own includes gives the same false and the difference this lesson is about never shows.");
  ("The wrong programs are: console.log(s.includes(w)) (true for part of a word too) and console.log(a.indexOf(w)) (where the word is, or -1, rather than true or false).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = ["pray for one another", "on"];
  function inputs_get() {
    "six sayings each with a word, three whole words and three parts of words, shuffled";
    let pairs = [
      ["pray for one another", "one"],
      ["pray for one another", "on"],
      ["let love be genuine", "love"],
      ["let love be genuine", "gen"],
      ["give thanks in everything", "in"],
      ["give thanks in everything", "thing"],
    ];
    let shuffled = list_shuffle_take(pairs, 6);
    return shuffled;
  }
  function program_with(pair, logged_before, logged_after) {
    'let s = "..."; let a = s.split(" "); console.log(before + json of the word + after);';
    let saying = list_first(pair);
    let word = list_last(pair);
    let lines = [
      "let s = " + json_to(saying) + ";",
      'let a = s.split(" ");',
      "console.log(" + logged_before + json_to(word) + logged_after + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(pair2) {
    let code2 = program_with(pair2, "a.includes(", ")");
    return code2;
  }
  function wrong_programs_of(pair3) {
    let v = program_with(pair3, "s.includes(", ")");
    let v2 = program_with(pair3, "a.indexOf(", ")");
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(pair4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "includes remembered, then asked of the words of a sentence";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_includes,
      [
        "",
        'a.includes("joy")',
        " is ",
        "true",
        " when ",
        '"joy"',
        " is an item of ",
        "a",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "After ",
      's.split(" ")',
      ", the items are whole words, so part of a word is not found:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Is it one of the words?",
    'a.includes("on")',
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
