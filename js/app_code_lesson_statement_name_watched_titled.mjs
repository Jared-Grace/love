import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_title_name_id_paint } from "./app_code_lesson_statement_title_name_id_paint.mjs";
import { app_code_batch_name_watched } from "./app_code_batch_name_watched.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_lesson_statement_name_watch_decoys } from "./app_code_lesson_statement_name_watch_decoys.mjs";
export function app_code_lesson_statement_name_watched_titled(pair, paint) {
  arguments_assert(arguments, 2);
  ("a lesson where a name takes new values, built from a pair's programs with the name written out after every change, under the pair's words and the title code handed in");
  let words = property_get(pair, "words");
  let name_id = app_code_lesson_statement_title_name_id_paint(words, paint);
  let batch_original = property_get(pair, "batch");
  let batch = app_code_batch_name_watched(batch_original);
  let lesson = app_code_lesson_code_logged({
    above: property_get(pair, "above"),
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
