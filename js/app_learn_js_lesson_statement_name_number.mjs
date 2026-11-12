import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_learn_js_lesson_statement_name_value_name } from "./app_learn_js_lesson_statement_name_value_name.mjs";
import { app_learn_js_string_code } from "./app_learn_js_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_lesson_statement_name_number_title_name_id } from "./app_learn_js_lesson_statement_name_number_title_name_id.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { app_learn_js_lesson_statement_name_number_batch } from "./app_learn_js_lesson_statement_name_number_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { app_learn_js_lesson_statement_name_number_above } from "./app_learn_js_lesson_statement_name_number_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_learn_js_lesson_decoy_code_names } from "./app_learn_js_lesson_decoy_code_names.mjs";
export function app_learn_js_lesson_statement_name_number() {
  arguments_assert(arguments, 0);
  ("a name holding a number: let a = 1; console.log(a); writes out 1");
  ("The smallest step from the lesson that first gave a value a name: the same two lines, with a number where the word was. It comes before any lesson that works a number out under a name, because there the value comes out of working something out, and here it is written in plainly.");
  ("The name is offered as a wrong answer, because the one number on the screen is otherwise the answer. The other three buttons hold the other questions' numbers, and none of those is anywhere in this program, so the only number in front of a learner is the right one and nothing has to be understood to pick it. With the name on a button as well, two of the four are written in the program, and answering means knowing which of the two comes out.");
  function backwards_decoys(question, answer) {
    "the wrong programs: the name in quote marks, the name never written out, and the name written out before it holds anything";
    "Every one holds only the number on the screen. Filled from the other questions they held other numbers, so the one program with this number in it was the answer and could be picked without reading the second line.";
    "They write out the letter, nothing, and an error, so none of them writes out the number. Not picked: console.log(8), which does write out the number, so it would be a wrong answer that is not wrong.";
    let lines = text_split_newline(answer);
    let held = list_first(lines);
    let logged = list_second(lines);
    let name = app_learn_js_lesson_statement_name_value_name();
    let word = app_learn_js_string_code(name);
    let logged_word = js_code_console_log_statement(word);
    let programs = [[held, logged_word], [held], [logged, held]];
    let found = list_map(programs, list_join_newline);
    return found;
  }
  let name_id = app_learn_js_lesson_statement_name_number_title_name_id();
  let batch = app_learn_js_batch_question_answer_fns(
    app_learn_js_lesson_statement_name_number_batch,
    eval_console_log_to_list,
  );
  let lesson = app_learn_js_lesson_code_logged({steps: true,
    above: app_learn_js_lesson_statement_name_number_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    decoys: app_learn_js_lesson_decoy_code_names,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
