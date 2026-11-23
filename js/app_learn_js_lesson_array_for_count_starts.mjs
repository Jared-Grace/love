import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_last } from "./list_last.mjs";
import { app_learn_js_words_loop_program } from "./app_learn_js_words_loop_program.mjs";
import { list_first } from "./list_first.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_count_e } from "./app_learn_js_lesson_array_for_count_e.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_count_starts() {
  arguments_assert(arguments, 0);
  ('how many words of a sentence start with a letter: split at a space, then for each word w, if (w[0] === "o") { count++; }; writes out 1 for "pray for one another"');
  ("2026-11-23, at the human's asking: after First letters. The counting loop of for_count_e, asking about the first letter rather than any letter. Nothing in it is new.");
  ("Each question is a saying and a letter. In most of them the letter is also inside other words, so counting with includes gives a bigger number.");
  ("The wrong programs are: the loop asking w.includes (the letter anywhere in the word), the loop asking s[0] (the first letter of the whole sentence, every time) and console.log(a.length) (how many words in all).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = ["pray for one another", "o"];
  function inputs_get() {
    "five sayings each with a letter, shuffled";
    let pairs = [
      ["pray for one another", "o"],
      ["give thanks in everything", "t"],
      ["love is patient love is kind", "i"],
      ["let love be genuine", "l"],
      ["do all things without grumbling", "t"],
    ];
    let shuffled = list_shuffle_take(pairs, 5);
    return shuffled;
  }
  function program_with(pair, condition_of, logged) {
    let object = list_last(pair);
    let letter = json_to(object);
    let body = ["  if (" + condition_of(letter) + ") {", "    count++;", "  }"];
    let saying = list_first(pair);
    let code = app_learn_js_words_loop_program(
      saying,
      ["let count = 0;"],
      body,
      logged,
    );
    return code;
  }
  function starts(letter2) {
    let c = "w[0] === " + letter2;
    return c;
  }
  function program_of(pair2) {
    let code2 = program_with(pair2, starts, "count");
    return code2;
  }
  function wrong_programs_of(pair3) {
    function includes(letter3) {
      let c2 = "w.includes(" + letter3 + ")";
      return c2;
    }
    function sentence_starts(letter4) {
      let c3 = "s[0] === " + letter4;
      return c3;
    }
    let v = program_with(pair3, includes, "count");
    let v2 = program_with(pair3, sentence_starts, "count");
    let v3 = program_with(pair3, starts, "a.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(pair4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "counting words with a letter remembered, then counting words starting with one";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_count_e,
      [
        "",
        'if (a[i].includes("e")) { count++; }',
        " counts the words with an ",
        '"e"',
        " anywhere",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With ",
      'w[0] === "o"',
      " it counts only the words that start with ",
      '"o"',
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Count words starting with a letter",
    'w[0] === "o"',
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
