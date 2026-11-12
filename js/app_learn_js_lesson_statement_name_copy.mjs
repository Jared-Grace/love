import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_statement_name_copy_title_name_id } from "./app_learn_js_lesson_statement_name_copy_title_name_id.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { app_learn_js_lesson_statement_name_copy_batch } from "./app_learn_js_lesson_statement_name_copy_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_strings } from "./js_strings.mjs";
import { app_learn_js_string_code } from "./app_learn_js_string_code.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { list_get } from "./list_get.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { app_learn_js_lesson_statement_name_copy_above } from "./app_learn_js_lesson_statement_name_copy_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_learn_js_lesson_decoy_code_pieces } from "./app_learn_js_lesson_decoy_code_pieces.mjs";
export function app_learn_js_lesson_statement_name_copy() {
  arguments_assert(arguments, 0);
  ('a name given what another name holds: let a = "grapes"; let b = "olives"; let c = a; console.log(c); writes out grapes');
  ("The first screen where a name is read rather than written out. Every line up to here has put a value under a name and then handed that name to console.log; here a name is handed to the thing that makes a name, which is the same reading in a place a learner has never seen it.");
  ("So the new fact is one fact and it is about a place, not about a line: a name may be written wherever a value may be written, and what gets used is whatever the name is holding. The line that does it is a line a learner already knows by shape - only what is on the right of the equals has changed.");
  ("The quote marks are the whole hazard, and the screen ends on them. A learner who has only ever seen a value in quote marks reads a bare name as a word with the quote marks left off by mistake, and would answer every question with a letter.");
  ("The third name is a new one rather than one of the two, so nothing on the screen is given a value twice. That was the lesson before and it is settled; here the only thing that changes between the two pictures is that a cup was added.");
  ("Both words are on the screen of every question and only one of them was copied, so the word that was not copied is a wrong answer waiting to be reached for. That is what makes the third line worth reading rather than skipping.");
  ("Building the code from tokens stays switched off, for the reason the lessons before give; there are four lines now.");
  let name_id = app_learn_js_lesson_statement_name_copy_title_name_id();
  let batch = app_learn_js_batch_question_answer_fns(
    app_learn_js_lesson_statement_name_copy_batch,
    eval_console_log_to_list,
  );
  ("Every wrong answer uses only this program's own words and names, in both directions, so nothing on the buttons can be thrown out for holding a word the code does not. Reading backwards the same two words are on every button, so the one thing left to read is which name the third name was given.");
  function backwards_decoys(question, answer) {
    "the other name copied, the two words swapped, and the copied name in quote marks";
    let ast = js_parse(answer);
    let words = js_strings(ast);
    let word = list_first(words);
    let word_first = app_learn_js_string_code(word);
    let word2 = list_last(words);
    let word_last = app_learn_js_string_code(word2);
    let names = js_declared_names(ast);
    let name_first = list_first(names);
    let name_last = list_get(names, 1);
    let name_copy = list_last(names);
    let written = eval_console_log_lines(answer);
    let right = list_first(words);
    let first_written = equal(written, right);
    let name_copied = ternary(first_written, name_first, name_last);
    let name_other = ternary(first_written, name_last, name_first);
    function program_of(held_first, held_last, given) {
      "the four lines with the two words and what the third name is given handed in";
      let code2 = js_code_let_statement(name_first, held_first);
      let code3 = js_code_let_statement(name_last, held_last);
      let code4 = js_code_let_statement(name_copy, given);
      let statement = js_code_console_log_statement(name_copy);
      let lines = [code2, code3, code4, statement];
      let code = list_join_newline(lines);
      return code;
    }
    let v = program_of(word_first, word_last, name_other);
    let v2 = program_of(word_last, word_first, name_copied);
    let combined = app_learn_js_string_code(name_copied);
    let v3 = program_of(word_first, word_last, combined);
    let found = [v, v2, v3];
    return found;
  }
  let lesson = app_learn_js_lesson_code_logged({steps: true,
    backwards_decoys,
    above: app_learn_js_lesson_statement_name_copy_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys: app_learn_js_lesson_decoy_code_pieces,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
