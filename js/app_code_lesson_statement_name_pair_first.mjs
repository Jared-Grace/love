import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_batch_name_watched } from "./app_code_batch_name_watched.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_lesson_statement_name_watch_decoys } from "./app_code_lesson_statement_name_watch_decoys.mjs";
export function app_code_lesson_statement_name_pair_first(pair) {
  arguments_assert(arguments, 1);
  ("the first lesson of a pair where a name takes new values: the programs of the pair, each with the name written out after every change");
  ("A pair is one description both its lessons are built from, so the lesson that writes out every value and the one that writes out only the last cannot drift apart: the same programs, the same change in both titles. The second is built by the pair's other builder.");
  ("Every value written out comes first, and the lesson after asks the same programs with only the last writing-out: seen first, each value is on the screen, and only then is a learner asked to carry the changes in their head (the human's order, 2026-09-27).");
  let painter = property_get(pair, "painter");
  let words = property_get(pair, "words");
  let code = property_get(pair, "code");
  let name_id = painter(words, code);
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
