import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_code_name_watched } from "./app_code_code_name_watched.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_lesson_statement_name_watch_decoys } from "./app_code_lesson_statement_name_watch_decoys.mjs";
export function app_code_lesson_statement_name_watched(
  lesson_original,
  batch_original,
  words,
) {
  arguments_assert(arguments, 3);
  ("a lesson that asks again about the programs of the lesson just before it, rewritten to write the name out after every change rather than only at the end");
  ("The human asked for these on 2026-09-26: every lesson where a name takes a new value gets a twin where each value it takes is written out. Writing a name out at each step is how a learner sees a change rather than holding it in their head, and it is how they will find their own mistakes; asked about only once, it is a trick they saw and not a habit.");
  ("The programs are the lesson before's own, handed through the rewriting that adds the writing-outs, so the two lessons cannot drift apart and nothing on the screen is new except those lines.");
  ("The wrong answers are the ones the lesson on watching a name change offers: the name read as holding one value throughout, and the values in the wrong order.");
  let name = app_code_lesson_statement_name_value_name();
  let logged = js_code_console_log_statement(name);
  let name_id = app_code_lesson_statement_title_name_id(words, logged);
  function batch_watched() {
    "the lesson before's programs, each writing out the name after every change";
    let codes = batch_original();
    let watched = list_map(codes, app_code_code_name_watched);
    return watched;
  }
  function above(root, context) {
    "one of the lesson before's programs as it was, then the same program writing the name out after every change";
    let list = batch_original();
    let code = list_first(list);
    let code_watched = app_code_code_name_watched(code);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, lesson_original, [
      "this writes out only the last value of ",
      name,
      ":",
    ]);
    let value = eval_console_log_lines(code);
    app_code_code_lines_writes_out(box_one, [code], value);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "Writing out ",
      name,
      " after each change shows every value it holds:",
    ]);
    let value2 = eval_console_log_lines(code_watched);
    app_code_code_lines_writes_out(box_two, [code_watched], value2);
  }
  let batch = app_code_batch_question_answer_fns(
    batch_watched,
    eval_console_log_lines,
  );
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys: app_code_lesson_statement_name_watch_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
