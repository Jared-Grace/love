import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_first } from "./list_first.mjs";
import { js_strings } from "./js_strings.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { list_last } from "./list_last.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_lesson_statement_name_copy_single_title_name_id } from "./app_code_lesson_statement_name_copy_single_title_name_id.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_copy_single_batch } from "./app_code_lesson_statement_name_copy_single_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_copy_single_above } from "./app_code_lesson_statement_name_copy_single_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_learn_js_lesson_decoy_code_pieces } from "./app_learn_js_lesson_decoy_code_pieces.mjs";
export function app_code_lesson_statement_name_copy_single() {
  arguments_assert(arguments, 0);
  ('a name given what another name holds: let a = "love"; let b = a; console.log(b); writes out love');
  ("It sits right after the two-names lesson, whose program it changes in one place: the second name is given the first name instead of a word. The copying lesson after it puts two words on the screen and asks which one was copied; this one has only the one word, so the only new thing is a name with no quote marks on the right of the equals.");
  ("It was added because the lesson on one more than a name reminded learners of a three-line copy program that no lesson taught - the copying lesson starts at four lines.");
  ("The two names are offered as wrong answers, because one word on the screen is otherwise the answer. No button holds another question's word, because none of those is written on this screen, so a learner who has understood nothing could throw them out and take the only word in front of them. With only this program's pieces on the buttons, answering means knowing that a name on the right of an equals hands over what it holds rather than its own spelling - which is the whole of what this lesson adds.");
  ("Reading backwards every button holds the same word, so the buttons differ only in the lines this lesson teaches: the second name given a string spelled like the first name, the second name written in quote marks, and the second name written out twice.");
  function backwards_decoys(question, answer) {
    "the second name given the first name's spelling, the second name in quote marks, and the second name written out twice";
    let ast = js_parse(answer);
    let list = js_strings(ast);
    let word = list_first(list);
    let names = js_declared_names(ast);
    let name_first = list_first(names);
    let name_last = list_last(names);
    let right = app_code_string_code(word);
    let held = js_code_let_statement(name_first, right);
    let copied = js_code_let_statement(name_last, name_first);
    let logged = js_code_console_log_statement(name_last);
    let right2 = app_code_string_code(name_first);
    let spelled = js_code_let_statement(name_last, right2);
    let name_written = app_code_word_console_log_statement(name_last);
    let joined = list_join_newline([held, spelled, logged]);
    let joined2 = list_join_newline([held, copied, name_written]);
    let joined3 = list_join_newline([held, copied, logged, logged]);
    let found = [joined, joined2, joined3];
    return found;
  }
  let name_id = app_code_lesson_statement_name_copy_single_title_name_id();
  let batch = app_learn_js_batch_question_answer_fns(
    app_code_lesson_statement_name_copy_single_batch,
    eval_console_log_to_list,
  );
  let lesson = app_learn_js_lesson_code_logged({
    above: app_code_lesson_statement_name_copy_single_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: true,
    decoys: app_learn_js_lesson_decoy_code_pieces,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
