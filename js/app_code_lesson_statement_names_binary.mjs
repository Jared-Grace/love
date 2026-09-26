import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_names_binary_title_name_id } from "./app_code_lesson_statement_names_binary_title_name_id.mjs";
import { app_code_lesson_statement_names_binary_programs } from "./app_code_lesson_statement_names_binary_programs.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_statement_names_binary_above } from "./app_code_lesson_statement_names_binary_above.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_names_binary({
  words,
  symbol,
  pairs_get,
  example_pair,
  remember_lesson,
  remember_parts,
  answer_count,
}) {
  arguments_assert(arguments, 1);
  ("a lesson about one symbol between two names: its title, the two boxes read before the questions, and questions whose programs give two values two names and write out the symbol between the names");
  ("Each lesson built on this hands in only what differs - the words of its title, its symbol, how its values are drawn, the pair its boxes show, the earlier lesson its reminder points at, and how many answers a question offers. Everything else is the same screen, so a learner meets the same shape once per symbol and reads only the symbol.");
  let name_id = app_code_lesson_statement_names_binary_title_name_id(
    words,
    symbol,
  );
  function programs_get() {
    "the programs of one screen: a fresh draw of pairs, each written as the three lines";
    let pairs = pairs_get();
    let codes = app_code_lesson_statement_names_binary_programs(symbol, pairs);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    programs_get,
    eval_console_log_to_list,
  );
  function above(root, context) {
    "the boxes read before the first question, with this lesson's symbol, pair and reminder";
    app_code_lesson_statement_names_binary_above({
      root,
      context,
      symbol,
      pair: example_pair,
      remember_lesson,
      remember_parts,
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
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: answer_count,
  });
  return lesson;
}
