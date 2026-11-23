import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_words_pairs_program } from "./app_learn_js_words_pairs_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_doubled_word } from "./app_learn_js_lesson_array_for_doubled_word.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_count_doubled() {
  arguments_assert(arguments, 0);
  ('how many times a word of a sentence is the same as the word after it: split at a space, let count = 0, then for (let i = 0; i < a.length - 1; i++) { if (a[i] === a[i + 1]) { count++; } }; writes out 2 for "holy holy holy is the Lord"');
  ("2026-11-23, at the human's asking, whose words were: count of doubled words separate lesson. After A word twice in a row?: the same if, counting rather than setting true. Nothing in it is new.");
  ("The example is holy holy holy, which writes out 2: the pairs side by side are holy and holy, then holy and holy again. Each pair is asked once, so a word said three times is two pairs.");
  ("The wrong programs are: !== in place of === (the pairs that differ), the if asking a[i] === a[0] (the words like the first word) and console.log(a.length) (how many words in all).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "holy holy holy is the Lord";
  function inputs_get() {
    "five sayings, shuffled";
    let sayings = [
      "holy holy holy is the Lord",
      "truly truly I say to you",
      "Martha Martha you are anxious",
      "comfort comfort my people",
      "let love be genuine",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, condition, logged) {
    let body = ["  if (" + condition + ") {", "    count++;", "  }"];
    let code = app_learn_js_words_pairs_program(
      saying,
      ["let count = 0;"],
      body,
      logged,
    );
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, "a[i] === a[i + 1]", "count");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "a[i] !== a[i + 1]", "count");
    let v2 = program_with(saying3, "a[i] === a[0]", "count");
    let v3 = program_with(saying3, "a[i] === a[i + 1]", "a.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "a word twice in a row remembered, then counting how many times";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_doubled_word,
      [
        "",
        "a[i] === a[i + 1]",
        " asks whether a word is the same as the word after it",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With ",
      "count++;",
      " inside that ",
      "if",
      ", it counts how many times. Each pair side by side is asked once, so a word said three times is two pairs:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Count the doubled words",
    "count++",
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
