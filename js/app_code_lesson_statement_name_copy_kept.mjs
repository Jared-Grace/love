import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_copy_kept_title_name_id } from "./app_code_lesson_statement_name_copy_kept_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_copy_kept_batch } from "./app_code_lesson_statement_name_copy_kept_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_strings } from "./js_strings.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_copy_kept_above } from "./app_code_lesson_statement_name_copy_kept_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_lesson_decoy_code_pieces } from "./app_code_lesson_decoy_code_pieces.mjs";
export function app_code_lesson_statement_name_copy_kept() {
  arguments_assert(arguments, 0);
  ('a name keeps what it was given after the name it was filled from changes: let a = "grapes"; let c = a; a = "olives"; console.log(c); writes out grapes');
  ("The screen that taught copying said in the picture that nothing was removed from the cup that was copied. This one asks the question from the other end - the copied cup changes afterwards - and the answer is the same fact seen from the side a learner will actually meet it on.");
  ("So the new fact is that the copying happened once, when that line was reached, and is over. A name is not tied to the name it was filled from; it holds a value, and the value it holds is the one that was there at the moment it was filled.");
  ("This is the misreading that survives longest if it is never asked about. Nothing before this screen can tell a learner whether a name follows another name or holds a copy of it - every program up to here would write out the same thing either way - so a learner who has quietly decided it follows has been right every time so far.");
  ("Two names and four lines, which is the copying screen's program with one line put in. The line put in is the changing line from the lesson that gives a name a new value, so the program is made only of lines a learner has read, and everything new is in the order they come in.");
  ("Building the code from tokens stays switched off, for the reason the screens before give.");
  let name_id = app_code_lesson_statement_name_copy_kept_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_copy_kept_batch,
    eval_console_log_to_list,
  );
  ("Every wrong answer uses only this program's own words and names, in both directions, so nothing on the buttons can be thrown out for holding a word the code does not. Reading backwards the same two words are on every button, and each wrong program writes out the word put in second: by writing out the first name instead, by the two words being swapped, or by the copying coming after the change.");
  function backwards_decoys(question, answer) {
    "the first name written out, the two words swapped, and the copy made after the change";
    let ast = js_parse(answer);
    let words = js_strings(ast);
    let word = list_first(words);
    let word_first = app_code_string_code(word);
    let word2 = list_last(words);
    let word_last = app_code_string_code(word2);
    let names = js_declared_names(ast);
    let name_first = list_first(names);
    let name_copy = list_last(names);
    let held = js_code_let_statement(name_first, word_first);
    let copied = js_code_let_statement(name_copy, name_first);
    let changed = js_code_assign_statement(name_first, word_last);
    let logged = js_code_console_log_statement(name_copy);
    let swapped_held = js_code_let_statement(name_first, word_last);
    let swapped_changed = js_code_assign_statement(name_first, word_first);
    let statement = js_code_console_log_statement(name_first);
    let joined = list_join_newline([held, copied, changed, statement]);
    let joined2 = list_join_newline([
      swapped_held,
      copied,
      swapped_changed,
      logged,
    ]);
    let joined3 = list_join_newline([held, changed, copied, logged]);
    let found = [joined, joined2, joined3];
    return found;
  }
  let lesson = app_code_lesson_code_logged({
    backwards_decoys,
    above: app_code_lesson_statement_name_copy_kept_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: true,
    decoys: app_code_lesson_decoy_code_pieces,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
