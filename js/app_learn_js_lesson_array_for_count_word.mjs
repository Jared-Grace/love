import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_count } from "./app_learn_js_lesson_array_for_count.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_count_word() {
  arguments_assert(arguments, 0);
  ('how many times a word is in a sentence: split at a space, then for each word, if (a[i] === "love") { count++; }; writes out 2 for "love is patient love is kind"');
  ("2026-11-23, at the human's asking: after Longest word. The How many joys? loop, over the words of a sentence. One loop, nothing inside another.");
  ("Each question is a saying and a word. In two of them the word is also part of another word - love in beloved, in in everything - so counting with includes gives a different number than counting with ===, the same mix-up as Is it one of the words?.");
  ("The wrong programs are: the loop counting a[i].includes(w) (parts of words too), console.log(a.length) (how many words in all) and console.log(a.indexOf(w)) (where the word first is).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = ["love is patient love is kind", "love"];
  function inputs_get() {
    "five sayings each with a word, shuffled";
    let pairs = [
      ["love is patient love is kind", "love"],
      ["love is patient love is kind", "is"],
      ["one Lord one faith one baptism", "one"],
      ["beloved let us love one another", "love"],
      ["give thanks in everything", "in"],
    ];
    let shuffled = list_shuffle_take(pairs, 5);
    return shuffled;
  }
  function program_with(pair, condition_before, logged_before, logged_after) {
    "the split, the counting loop whose if asks condition_before then the word, then the log";
    let saying = list_first(pair);
    let word = list_last(pair);
    let w = json_to(word);
    let lines = [
      "let s = " + json_to(saying) + ";",
      'let a = s.split(" ");',
      "let count = 0;",
      "for (let i = 0; i < a.length; i++) {",
      "  if (" +
        condition_before +
        w +
        (equal(condition_before, "a[i] === ") ? "" : ")") +
        ") {",
      "    count++;",
      "  }",
      "}",
      "console.log(" +
        logged_before +
        (equal(logged_after, null) ? "" : w + logged_after) +
        ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(pair2) {
    let code2 = program_with(pair2, "a[i] === ", "count", null);
    return code2;
  }
  function wrong_programs_of(pair3) {
    let v = program_with(pair3, "a[i].includes(", "count", null);
    let v2 = program_with(pair3, "a[i] === ", "a.length", null);
    let v3 = program_with(pair3, "a[i] === ", "a.indexOf(", ")");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(pair4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "counting remembered, then asked of the words of a sentence";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_count,
      [
        "",
        'if (a[i] === "joy") { count++; }',
        " counts how many times ",
        '"joy"',
        " is an item",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "After ",
      's.split(" ")',
      ", the items are words, so the same loop counts how many times a word is in a sentence:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "How many times a word?",
    'a[i] === "love"',
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
