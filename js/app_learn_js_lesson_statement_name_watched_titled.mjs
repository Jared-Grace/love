import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_title_name_id_paint } from "./app_code_lesson_statement_title_name_id_paint.mjs";
import { app_learn_js_batch_name_watched } from "./app_learn_js_batch_name_watched.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_learn_js_lesson_statement_name_watch_decoys } from "./app_learn_js_lesson_statement_name_watch_decoys.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function app_learn_js_lesson_statement_name_watched_titled(
  pair,
  paint,
  steps,
) {
  arguments_assert(arguments, 3);
  ("a lesson where a name takes new values, built from a pair's programs with the name written out after every change, under the pair's words and the title code handed in");
  let words = property_get(pair, "words");
  let name_id = app_code_lesson_statement_title_name_id_paint(words, paint);
  let batch_original = property_get(pair, "batch");
  let batch = app_learn_js_batch_name_watched(batch_original);
  let lesson = app_learn_js_lesson_code_logged({
    above: property_get(pair, "above"),
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps,
    decoys: app_learn_js_lesson_statement_name_watch_decoys,
    backwards_decoys: property_get_or_null(pair, "backwards_decoys_first"),
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
