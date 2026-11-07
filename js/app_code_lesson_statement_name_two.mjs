import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_two_title_name_id } from "./app_code_lesson_statement_name_two_title_name_id.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_two_batch } from "./app_code_lesson_statement_name_two_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_strings } from "./js_strings.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { app_learn_js_lesson_statement_name_two_above } from "./app_learn_js_lesson_statement_name_two_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_learn_js_lesson_decoy_code_pieces } from "./app_learn_js_lesson_decoy_code_pieces.mjs";
export function app_code_lesson_statement_name_two() {
  arguments_assert(arguments, 0);
  ('two values given two names, and only one of them written out: let a = "grapes"; let b = "olives"; console.log(b); writes out olives');
  ("The first screen in the course that cannot be answered without reading a name. Every question puts two words in front of a learner and offers both of them, so the word that is not the answer is not a wrong answer somebody invented - it is on the screen, it was put there on purpose, and reaching for it is the mistake the whole lesson is about.");
  ("That is what the two lessons before this could not ask for. Where one cup holds the only word on the screen, a learner who has understood nothing still answers every question right. Here understanding nothing is the difference between two buttons.");
  ("Nothing else moves. The values are still words, the names are still the two letters, and the lines are still read in the order they are written. Only the count of names has gone from one to two.");
  ("What is still not asked is what happens when one name is given a value twice. That needs the order of the lines to be noticed rather than used, and it is the lesson after this one.");
  ("Building the code from tokens is left switched off, for the reason the lessons before give: the order the lines go in is a second thing to learn, and there are three of them now.");
  let name_id = app_code_lesson_statement_name_two_title_name_id();
  let batch = app_learn_js_batch_question_answer_fns(
    app_code_lesson_statement_name_two_batch,
    eval_console_log_to_list,
  );
  ("Every wrong answer uses only this program's own words and names, in both directions, so nothing on the buttons can be thrown out for holding a word the code does not. Reading backwards the same two words are on every button, so the one thing left to read is which name each holds and which name is written out.");
  function backwards_decoys(question, answer) {
    "the other name written out, the two words swapped, and the name in quote marks";
    let ast = js_parse(answer);
    let words = js_strings(ast);
    let word = list_first(words);
    let word_first = app_code_string_code(word);
    let word2 = list_last(words);
    let word_last = app_code_string_code(word2);
    let names = js_declared_names(ast);
    let name_first = list_first(names);
    let name_last = list_last(names);
    let written = eval_console_log_lines(answer);
    let right = list_first(words);
    let first_written = equal(written, right);
    let name_logged = ternary(first_written, name_first, name_last);
    let name_other = ternary(first_written, name_last, name_first);
    function program_of(held_first, held_last, logged) {
      "the three lines with the two words and the writing-out line handed in";
      let code2 = js_code_let_statement(name_first, held_first);
      let code3 = js_code_let_statement(name_last, held_last);
      let lines = [code2, code3, logged];
      let code = list_join_newline(lines);
      return code;
    }
    let statement = js_code_console_log_statement(name_other);
    let v = program_of(word_first, word_last, statement);
    let statement2 = js_code_console_log_statement(name_logged);
    let v2 = program_of(word_last, word_first, statement2);
    let statement3 = app_code_word_console_log_statement(name_logged);
    let v3 = program_of(word_first, word_last, statement3);
    let found = [v, v2, v3];
    return found;
  }
  let lesson = app_learn_js_lesson_code_logged({
    backwards_decoys,
    above: app_learn_js_lesson_statement_name_two_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: true,
    decoys: app_learn_js_lesson_decoy_code_pieces,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
