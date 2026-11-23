import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_count_word } from "./app_learn_js_lesson_array_for_count_word.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_count_long_words() {
  arguments_assert(arguments, 0);
  ('how many words of a sentence are longer than 3 letters: split at a space, then for each word w, if (w.length > 3) { count++; }; writes out 2 for "let love be genuine"');
  ("2026-11-23, at the human's asking: after Shortest word. The counting loop of How many times a word?, asking about each word's length rather than whether it is one word. Nothing in it is new.");
  ("Most sayings have a word of exactly 3 letters, so > 3 and >= 3 give different numbers.");
  ("The wrong programs are: the loop with >= 3 (3-letter words counted too), the loop asking a.length > 3 (how many words the sentence has, asked every time, so every word or none) and the loop with no if (every word).");
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
  function program_with(saying, body) {
    "the split, the counting loop over the words with body inside, then the log";
    let lines = [
      "let s = " + json_to(saying) + ";",
      'let a = s.split(" ");',
      "let count = 0;",
      "for (let i = 0; i < a.length; i++) {",
      "  let w = a[i];",
      ...body,
      "}",
      "console.log(count);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function body_if(condition) {
    let body = ["  if (" + condition + ") {", "    count++;", "  }"];
    return body;
  }
  function program_of(saying2) {
    let v4 = body_if("w.length > 3");
    let code2 = program_with(saying2, v4);
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v5 = body_if("w.length >= 3");
    let v = program_with(saying3, v5);
    let v6 = body_if("a.length > 3");
    let v2 = program_with(saying3, v6);
    let v3 = program_with(saying3, ["  count++;"]);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "counting a word remembered, then counting by length";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_count_word,
      [
        "",
        'if (a[i] === "love") { count++; }',
        " counts how many times ",
        '"love"',
        " is a word",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With ",
      "w.length > 3",
      " in the if, it counts the words longer than 3 letters:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Count the long words",
    "w.length > 3",
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
