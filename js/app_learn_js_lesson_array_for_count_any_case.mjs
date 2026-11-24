import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { json_to } from "./json_to.mjs";
import { app_learn_js_words_loop_program } from "./app_learn_js_words_loop_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_same_any_case } from "./app_learn_js_lesson_string_same_any_case.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_count_any_case() {
  arguments_assert(arguments, 0);
  ('how many times a word is in a sentence, whatever its capitals: split at a space, then for each word w, let low = w.toLowerCase(); if (low === find) { count++; }; writes out 2 for "God is love and love is of god" with find = "god"');
  ("2026-11-23, at the human's asking: the word looked for is a name, find, so the if reads as asking whether it is the word looked for, and the next lesson can make find small too.");
  ("2026-11-23, at the human's asking: after Same word, any capitals. The Count a word loop, with each word made small before it is compared. One loop, nothing inside another.");
  ("Each saying has the word once with a capital and once or more without, so counting with w === alone gives a smaller number than the right program.");
  ("The wrong programs are: if (w === find) (the capitals still count, so the word with a capital is missed), console.log(a.length) (how many words in all) and console.log(low === find) (only whether the last word is it).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = ["God is love and love is of god", "god"];
  function inputs_get() {
    "five sayings each with a word written small, shuffled";
    let pairs = [
      ["God is love and love is of god", "god"],
      ["Love is patient love is kind", "love"],
      ["Holy holy holy is the Lord", "holy"],
      ["Rejoice in the Lord always again I say rejoice", "rejoice"],
      ["Peace I leave with you my peace I give", "peace"],
    ];
    let shuffled = list_shuffle_take(pairs, 5);
    return shuffled;
  }
  function program_with(pair, compared, logged) {
    "the counting loop over the words, the if asking whether compared is the word";
    let saying = list_first(pair);
    let object = list_last(pair);
    let word = json_to(object);
    let code = app_learn_js_words_loop_program(
      saying,
      ["let find = " + word + ";", "let count = 0;"],
      [
        "  let low = w.toLowerCase();",
        "  if (" + compared + " === find) {",
        "    count++;",
        "  }",
      ],
      logged,
    );
    return code;
  }
  function program_of(pair2) {
    let code2 = program_with(pair2, "low", "count");
    return code2;
  }
  function wrong_programs_of(pair3) {
    let v = program_with(pair3, "w", "count");
    let v2 = program_with(pair3, "low", "a.length");
    let v3 = program_with(pair3, "low", "low === find");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(pair4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "two words compared whatever their capitals remembered, then every word of a sentence counted that way";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_same_any_case,
      [
        "",
        "x === y",
        " after both are made lowercase is true for ",
        '"God"',
        " and ",
        '"god"',
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Each word ",
      "w",
      " made lowercase first, the loop counts the word with an uppercase letter too:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Count a word, any case",
    "if (low === find)",
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
