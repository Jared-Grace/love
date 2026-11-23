import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_words_pairs_program } from "./app_learn_js_words_pairs_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_in_order } from "./app_learn_js_lesson_array_for_in_order.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_doubled_word() {
  arguments_assert(arguments, 0);
  ('whether a sentence says a word twice in a row: split at a space, let doubled = false, then for (let i = 0; i < a.length - 1; i++) { if (a[i] === a[i + 1]) { doubled = true; } }; writes out true for "Jesus said truly truly I tell you"');
  ("2026-11-23, at the human's asking: after Reverse each word. The loop of for_in_order, which stops one early and compares a[i] with a[i + 1], asking === in place of >, over words. Nothing in it is new.");
  ("Three sayings say a word twice in a row and two do not, so true and false are both answers. In two of the three the doubled word is in the middle, so asking only the first pair, or keeping only the last pair, is wrong there.");
  ("The wrong programs are: doubled = a[i] === a[i + 1] with no if (only the last pair counts), the if asking a[0] === a[1] (only the first pair, every time) and !== in place of === (two words side by side that differ).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "Jesus said truly truly I tell you";
  function inputs_get() {
    "five sayings, three with a word twice in a row, shuffled";
    let sayings = [
      "Jesus said truly truly I tell you",
      "they cry holy holy holy Lord God",
      "comfort comfort my people",
      "let love be genuine",
      "pray for one another",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, body) {
    let code = app_learn_js_words_pairs_program(
      saying,
      ["let doubled = false;"],
      body,
      "doubled",
    );
    return code;
  }
  function body_if(condition) {
    let body2 = ["  if (" + condition + ") {", "    doubled = true;", "  }"];
    return body2;
  }
  function program_of(saying2) {
    let v4 = body_if("a[i] === a[i + 1]");
    let code2 = program_with(saying2, v4);
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, ["  doubled = a[i] === a[i + 1];"]);
    let v5 = body_if("a[0] === a[1]");
    let v2 = program_with(saying3, v5);
    let v6 = body_if("a[i] !== a[i + 1]");
    let v3 = program_with(saying3, v6);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "comparing each item with the next remembered, then asking whether two words side by side are the same";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_in_order,
      [
        "",
        "a[i] > a[i + 1]",
        " compares each item with the next one, in a loop that stops one early",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With ",
      "a[i] === a[i + 1]",
      " it asks whether a word is the same as the word after it:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "A word twice in a row?",
    "a[i] === a[i + 1]",
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
