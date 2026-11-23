import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_first } from "./list_first.mjs";
import { json_to } from "./json_to.mjs";
import { list_last } from "./list_last.mjs";
import { app_learn_js_words_loop_program } from "./app_learn_js_words_loop_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_count_any_case } from "./app_learn_js_lesson_array_for_count_any_case.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_count_find_capital() {
  arguments_assert(arguments, 0);
  ('how many times a word is in a sentence when the word looked for has a capital too: let find = "God"; let f = find.toLowerCase(); then the counting loop with if (low === f); writes out 2 for "God is love and love is of god"');
  ("2026-11-23, at the human's asking: after Count a word, any capitals. Each word is made small, so a find with a capital would never match; it is made small too, once, before the loop.");
  ("The wrong programs are: if (low === find) (find keeps its capital, so nothing matches and it writes out 0), if (w === find) (only the word written just as find is) and console.log(a.length) (how many words in all).");
  ("Not picked: making find small inside the loop, which gives the same answer but does the same work again for every word.");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = ["God is love and love is of god", "God"];
  function inputs_get() {
    "five sayings each with a word written with a capital, shuffled";
    let pairs = [
      ["God is love and love is of god", "God"],
      ["Love is patient love is kind", "Love"],
      ["Holy holy holy is the Lord", "Holy"],
      ["the Lord is my shepherd I trust the lord", "Lord"],
      ["Peace I leave with you my peace I give", "Peace"],
    ];
    let shuffled = list_shuffle_take(pairs, 5);
    return shuffled;
  }
  function program_with(pair, condition, logged) {
    "the counting loop over the words, the if asking condition";
    let saying = list_first(pair);
    let object = list_last(pair);
    let word = json_to(object);
    let code = app_learn_js_words_loop_program(
      saying,
      [
        "let find = " + word + ";",
        "let f = find.toLowerCase();",
        "let count = 0;",
      ],
      [
        "  let low = w.toLowerCase();",
        "  if (" + condition + ") {",
        "    count++;",
        "  }",
      ],
      logged,
    );
    return code;
  }
  function program_of(pair2) {
    let code2 = program_with(pair2, "low === f", "count");
    return code2;
  }
  function wrong_programs_of(pair3) {
    let v = program_with(pair3, "low === find", "count");
    let v2 = program_with(pair3, "w === find", "count");
    let v3 = program_with(pair3, "low === f", "a.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(pair4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "counting a word whatever its capitals remembered, then the word looked for made small too";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_count_any_case,
      [
        "",
        "let low = w.toLowerCase();",
        " makes each word small before it is compared with ",
        "find",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With ",
      'find = "God"',
      ", no small word is ever the same as it. So ",
      "find",
      " is made small too, once, before the loop:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Look for a word with a capital",
    "let f = find.toLowerCase();",
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
