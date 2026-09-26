import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_code_lines_writes_out_watched } from "./app_code_code_lines_writes_out_watched.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_watched(
  lesson_first,
  batch_original,
  words,
  decoys,
) {
  arguments_assert(arguments, 4);
  ("a lesson that asks again about the programs of the lesson just before it, now writing the name out only at the end, so only its last value is written out");
  ("The human's order, 2026-09-27: a lesson where a name takes a new value first writes the name out after every change, and this one follows it. Seen first, every value is on the screen; here a learner carries the changes in their head and answers with where they end, with the lesson before as the help.");
  ("The programs are the lesson before's own without the writing-outs it adds, so the two lessons cannot drift apart. The wrong answers are what that lesson's programs were asked with before the order changed: the other programs' answers, or the words handed in.");
  let name = app_code_lesson_statement_name_value_name();
  let logged = js_code_console_log_statement(name);
  let name_id = app_code_lesson_statement_title_name_id(words, logged);
  function above(root, context) {
    "one of the lesson before's programs writing the name out after every change, then the same program writing it out only at the end";
    let list = batch_original();
    let code = list_first(list);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, lesson_first, [
      "writing out ",
      name,
      " after each change shows every value it holds:",
    ]);
    app_code_code_lines_writes_out_watched(box_one, [code]);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "Written out only at the end, just the last value of ",
      name,
      " is written out:",
    ]);
    let value = eval_console_log_lines(code);
    app_code_code_lines_writes_out(box_two, [code], value);
  }
  let batch = app_code_batch_question_answer_fns(
    batch_original,
    eval_console_log_to_list,
  );
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
    forwards_answer_count_override: null,
  });
  return lesson;
}
