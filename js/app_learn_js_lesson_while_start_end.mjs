import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { object_multiply } from "./object_multiply.mjs";
import { app_code_while_word_programs } from "./app_code_while_word_programs.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { subtract } from "./subtract.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_multiply } from "./list_multiply.mjs";
import { list_map } from "./list_map.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_while_runs_max } from "./app_learn_js_while_runs_max.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { json_to } from "./json_to.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_while_repeat_word } from "./app_learn_js_lesson_while_repeat_word.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_while_start_end() {
  arguments_assert(arguments, 0);
  ('lines before and after a while: console.log("start"); let n = 0; while (n < 2) { console.log("joy"); n++; } console.log("end"); writes out start, joy, joy and end');
  ("The one new fact is the line between what repeats and what does not: lines inside the { ... } run every time, and lines outside it run once.");
  ("Recommended by Claude 2026-11-02 and chosen by the human, to sit straight after The same word each run, whose program is this one with a line added on each side.");
  ("Each screen has one program from each of three counts of runs - one, two and three - with the numbers of The same word each run.");
  ("Reading forwards, the wrong answers are one run more, the whole program's writing repeated as though start and end were inside (with one run, start and end with no word instead), and the word with no start or end; each once and never the answer.");
  ("Reading backwards, the wrong program is compared against a number one further on, so it runs once more; or, when it already runs as often as a while lesson allows, one nearer, so it runs once fewer.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  let word_before = "start";
  let word_after = "end";
  function program_get(start, bound, word) {
    let before = app_code_word_console_log_statement(word_before);
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let logged = app_code_word_console_log_statement(word);
    let changed = js_code_update_statement(name, plus);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      logged,
      changed,
    ]);
    let after = app_code_word_console_log_statement(word_after);
    let lines = list_concat_multiple([[before, code], while_lines, [after]]);
    return lines;
  }
  function program_text(start, bound, word) {
    let lines2 = program_get(start, bound, word);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function word_between(word, runs) {
    "the word that many times, with start before it and end after it";
    let words = object_multiply(word, runs);
    let lines3 = list_concat_multiple([[word_before], words, [word_after]]);
    return lines3;
  }
  function batch_get() {
    "three programs, running one, two and three times";
    let codes = app_code_while_word_programs(program_text);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "one run more, start and end repeated as though inside or, with one run, with no word, and the word alone; each once and never the answer";
    let numbers = text_integers(question);
    let left = list_get(numbers, 1);
    let right = list_get(numbers, 0);
    let runs2 = subtract(left, right);
    let answer_lines = text_split_newline(answer);
    let answer_word = list_get(answer_lines, 1);
    let more = word_between(answer_word, runs2 + 1);
    let whole = list_multiply([word_before, answer_word, word_after], runs2);
    if (equal(runs2, 1)) {
      ("with one run, the whole program's writing once is the right answer, so its place goes to start and end with the word never written, as though the while were skipped - otherwise the quiz fills the place with another program's answer, whose different word is easy to rule out");
      whole = [word_before, word_after];
    }
    let alone = object_multiply(answer_word, runs2);
    let candidates = list_map([more, whole, alone], list_join_newline);
    let without = list_without(candidates, answer);
    let once = list_unique(without);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against a number one further on, so it runs once more; or, when it already runs as often as a while lesson allows, one nearer, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let bound3 = list_get(numbers2, 1);
    let question_lines = text_split_newline(question);
    let question_word = list_get(question_lines, 1);
    let bound4 = bound3 + 1;
    let most = app_learn_js_while_runs_max();
    let b = subtract(bound3, start3);
    if (less_than_equal(most, b)) {
      bound4 = subtract(bound3, 1);
    }
    let code4 = program_text(start3, bound4, question_word);
    let r = [code4];
    return r;
  }
  function said(root, value, word) {
    "value < 2 is true, so it writes out the word, and n becomes the next value";
    let condition2 = js_code_binary_spaced_nb(value, less, 2);
    let json = json_to(value + 1);
    app_learn_js_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so it writes out ",
      word,
      ", and ",
      name,
      " becomes ",
      json,
    ]);
  }
  function above(root, context) {
    "The same word each run remembered, then one line added on each side of the while, and which lines repeated";
    let fruits = fruits_of_the_spirit();
    let joy = list_get(fruits, 1);
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_while_repeat_word,
      ["a ", "while", " can write out the same word each run."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    let r2 = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_two, [
      "Lines inside the ",
      r2,
      " repeat, and lines outside it run once:",
    ]);
    let lines4 = program_get(0, 2, joy);
    let list = word_between(joy, 2);
    let value2 = list_join_newline(list);
    app_learn_js_code_lines_writes_out(box_two, lines4, value2);
    app_learn_js_div_cycle_code(box_two, [
      "The first line writes out ",
      word_before,
      ", once",
    ]);
    said(box_two, 0, joy);
    said(box_two, 1, joy);
    let check = js_code_binary_spaced_nb(2, less, 2);
    let r3 = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_two, [
      "",
      check,
      " is ",
      "false",
      ", so the ",
      r3,
      " is skipped, and the code continues after it",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "The last line writes out ",
      word_after,
      ", once",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Inside and outside",
    '{ n++; } console.log("end");',
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
