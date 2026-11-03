import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_while_word_programs } from "./app_code_while_word_programs.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { json_to } from "./json_to.mjs";
import { subtract } from "./subtract.mjs";
import { list_take } from "./list_take.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_increment } from "./app_code_lesson_while_increment.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_braces_dots } from "./app_code_braces_dots.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_repeat_word() {
  arguments_assert(arguments, 0);
  ('a while that writes out the same word each run: let n = 0; while (n < 3) { console.log("joy"); n++; } writes out joy three times');
  ("The one new fact is that n need not be what is written out: here it only counts the runs, which is the first time in the course a while repeats something that does not change.");
  ("Recommended by Claude 2026-11-02 and chosen by the human, to sit after n++ and n-- have come into a while, and before a while has two names in it.");
  ("Each screen has one program from each of three counts of runs - one, two and three. A program starts at zero, or at another number, so the count cannot always be copied off the number n is compared against.");
  ("Reading forwards, the wrong answers are the word one run fewer (with one run, the number and the word together instead), one run more, and the numbers n holds rather than the word; each once and never the answer.");
  ("Reading backwards, the wrong program is compared against a number one further on, so it runs once more; or, when it already runs as often as a while lesson allows, one nearer, so it runs once fewer.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let fruits = fruits_of_the_spirit();
  let name = "n";
  function program_lines(start, bound, said_word) {
    'let n = start; while (n < bound) { console.log("word"); n++; }';
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let logged = app_code_word_console_log_statement(said_word);
    let changed = js_code_update_statement(name, plus);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      logged,
      changed,
    ]);
    let lines = list_concat([code], while_lines);
    return lines;
  }
  function program_get(start, bound, said_word) {
    let lines2 = program_lines(start, bound, said_word);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function values_of(start, bound) {
    "every value n holds when the while asks and the answer is true";
    let values = [];
    let value = start;
    while (less_than(value, bound)) {
      list_add(values, value);
      value = add(value, 1);
    }
    return values;
  }
  function words_of(values, said_word) {
    "the word, once for each value";
    function word_of() {
      return said_word;
    }
    let words = list_map(values, word_of);
    let text = list_join_newline(words);
    return text;
  }
  function batch_get() {
    "three programs, running one, two and three times";
    let codes = app_code_while_word_programs(program_get);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the word one run fewer or, with one run, the number and the word together, one run more, and the numbers n holds rather than the word; each once and never the answer";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 0);
    let bound2 = list_get(numbers, 1);
    let answer_lines = text_split_newline(answer);
    let answer_word = list_first(answer_lines);
    let values2 = values_of(start2, bound2);
    let size = list_size(values2);
    let sum = add(bound2, 1);
    let v = values_of(start2, sum);
    let more = words_of(v, answer_word);
    let held_texts = list_map(values2, json_to);
    let held = list_join_newline(held_texts);
    ("with one run there is no run fewer, so its place goes to the number and the word together, as though n were written out too, which is the one new fact of this lesson - otherwise the quiz fills the place with another program's answer, whose different word is easy to rule out; the word three times was the other choice, passed over because a second count teaches nothing the word twice does not");
    let both = list_join_newline([held, answer_word]);
    let candidates = [more, held, both];
    if (less_than(1, size)) {
      let count = subtract(size, 1);
      let fewer_values = list_take(values2, count);
      let fewer = words_of(fewer_values, answer_word);
      candidates = [fewer, more, held];
    }
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against a number one further on, so it runs once more; or, when it already runs as often as a while lesson allows, one nearer, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let bound3 = list_get(numbers2, 1);
    let question_lines = text_split_newline(question);
    let question_word = list_first(question_lines);
    let values3 = values_of(start3, bound3);
    let left = list_size(values3);
    let bound4 = add(bound3, 1);
    let most = app_code_while_runs_max();
    if (less_than_equal(most, left)) {
      bound4 = subtract(bound3, 1);
    }
    let code4 = program_get(start3, bound4, question_word);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, bound, said_word) {
    "value < bound is true, so it writes out the word, and n becomes the next value";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    let after = add(value, 1);
    let json = json_to(after);
    app_code_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so it writes out ",
      said_word,
      ", and ",
      name,
      " becomes ",
      json,
    ]);
  }
  function above(root, context) {
    "While adding one remembered, then a while that writes out one word each run while n only counts";
    let joy = list_get(fruits, 1);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_increment,
      ["", "n++", " inside a ", "while", " adds one to ", name, " each run."],
    );
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "A ",
      "while",
      " can write out the same word each run, and ",
      name,
      " only counts the runs:",
    ]);
    let lines3 = program_lines(0, 3, joy);
    let value2 = words_of([0, 1, 2], joy);
    app_code_code_lines_writes_out(box_two, lines3, value2);
    said(box_two, 0, 3, joy);
    said(box_two, 1, 3, joy);
    said(box_two, 2, 3, joy);
    let check = js_code_binary_spaced_nb(3, less, 3);
    let r = app_code_braces_dots();
    app_code_div_cycle_code(box_two, [
      "",
      check,
      " is ",
      "false",
      ", so the ",
      r,
      " is skipped, and the code continues after it",
    ]);
    let r2 = app_code_braces_dots();
    app_code_div_cycle_code(box_two, [
      "The word was written out three times, so the ",
      r2,
      " ran three times",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The same word each run",
    '{ console.log("joy"); n++; }',
  );
  let lesson = app_code_lesson_code_logged({
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
