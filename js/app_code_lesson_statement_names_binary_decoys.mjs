import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_names_binary_title_name_id } from "./app_code_lesson_statement_names_binary_title_name_id.mjs";
import { app_code_lesson_statement_names_binary_programs } from "./app_code_lesson_statement_names_binary_programs.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_statement_names_binary_above } from "./app_code_lesson_statement_names_binary_above.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_names_binary_decoys({
  words,
  symbol,
  answer_name,
  pairs_get,
  example_pair,
  remember_lesson,
  remember_parts,
  answer_count,
  decoys,
}) {
  arguments_assert(arguments, 1);
  ("a lesson about one symbol between two names, with the tempting wrong answers its forwards questions offer handed in; null leaves the other questions' answers as the only wrong ones");
  ("The twin without wrong answers hands in null, so every lesson built before this one is unchanged. A lesson whose answers can be told apart by a glance - two words run together, where the first word alone finds the right button - hands in wrong answers that share that first word, so the whole line has to be worked out.");
  let name_id = app_code_lesson_statement_names_binary_title_name_id(
    words,
    symbol,
    answer_name,
  );
  function programs_get() {
    "the programs of one screen: a fresh draw of pairs, each written as its lines";
    let pairs = pairs_get();
    let codes = app_code_lesson_statement_names_binary_programs(
      symbol,
      pairs,
      answer_name,
    );
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    programs_get,
    eval_console_log_to_list,
  );
  function above(root, context) {
    "the boxes read before the first question, with this lesson's symbol, pair, reminder and answer name";
    app_code_lesson_statement_names_binary_above({
      root,
      context,
      symbol,
      pair: example_pair,
      remember_lesson,
      remember_parts,
      answer_name,
    });
  }
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: answer_count,
  });
  return lesson;
}
