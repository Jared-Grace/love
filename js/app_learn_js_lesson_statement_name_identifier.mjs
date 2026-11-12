import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_statement_name_identifier_title_name_id } from "./app_learn_js_lesson_statement_name_identifier_title_name_id.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { app_learn_js_lesson_statement_name_identifier_batch } from "./app_learn_js_lesson_statement_name_identifier_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_first } from "./list_first.mjs";
import { js_strings } from "./js_strings.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { app_learn_js_string_code } from "./app_learn_js_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_word_console_log_statement } from "./app_learn_js_word_console_log_statement.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { app_learn_js_lesson_statement_name_identifier_above } from "./app_learn_js_lesson_statement_name_identifier_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_learn_js_lesson_decoy_code_pieces } from "./app_learn_js_lesson_decoy_code_pieces.mjs";
export function app_learn_js_lesson_statement_name_identifier() {
  arguments_assert(arguments, 0);
  ('the name a value is given can be any identifier, not only the one letter used so far: let joy = "peace"; on one line and console.log(joy); on the next writes out peace');
  ("The one new fact, and it is a small one - the lesson before this said identifiers are used as names, and the five identifier lessons before that said what an identifier is. Nothing here is new except that the two are finally put together on the same screen.");
  ("Small as it is, it is the first screen in the course whose questions cannot be got right without reading the name. Where every cup is called the same one letter the only word on the screen is the answer, so a learner who has understood nothing still answers every question. Here the name is a word too, and the name of each program is offered as one of the wrong answers, so answering means telling the two apart.");
  ("It comes before two names rather than after, because it changes one thing about a screen already understood and two names adds a second line and a choice between them. A learner meeting a word for a name for the first time should not also be deciding which of two words was asked for.");
  ("The value is still a word and the code is still the same two lines. Only what the name is spelled with has moved.");
  ("Building the code from tokens is left switched off, for the reason the lesson before gives: the order two lines go in is a second thing to learn.");
  let name_id = app_learn_js_lesson_statement_name_identifier_title_name_id();
  let batch = app_learn_js_batch_question_answer_fns(
    app_learn_js_lesson_statement_name_identifier_batch,
    eval_console_log_to_list,
  );
  ("Every wrong answer uses only this program's own two words, in both directions, so nothing on the buttons can be thrown out for holding a word the code does not. Reading backwards the two words are also swapped, which is why the words here are ones JS accepts as a name: the swapped program runs and writes out the other word.");
  function backwards_decoys(question, answer) {
    "the two words swapped, the name in quote marks, and the name written out twice";
    let ast = js_parse(answer);
    let list = js_strings(ast);
    let word = list_first(list);
    let list2 = js_declared_names(ast);
    let name = list_first(list2);
    let quoted = app_learn_js_string_code(word);
    let held = js_code_let_statement(name, quoted);
    let logged = js_code_console_log_statement(name);
    let right = app_learn_js_string_code(name);
    let code = js_code_let_statement(word, right);
    let statement = js_code_console_log_statement(word);
    let swapped = list_join_newline([code, statement]);
    let statement2 = app_learn_js_word_console_log_statement(name);
    let name_written = list_join_newline([held, statement2]);
    let written_twice = list_join_newline([held, logged, logged]);
    let found = [swapped, name_written, written_twice];
    return found;
  }
  let lesson = app_learn_js_lesson_code_logged({steps: true,
    backwards_decoys,
    above: app_learn_js_lesson_statement_name_identifier_above,
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
