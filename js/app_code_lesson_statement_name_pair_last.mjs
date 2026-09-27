import { app_code_lesson_statement_title_name_id_paint } from "./app_code_lesson_statement_title_name_id_paint.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_name_last } from "./app_code_lesson_statement_name_last.mjs";
export function app_code_lesson_statement_name_pair_last(lesson_first, pair) {
  arguments_assert(arguments, 2);
  ("the second lesson of a pair where a name takes new values: the same programs as the first, with the name written out only at the end");
  ("The first lesson is handed in beside its pair rather than kept in the pair, because the first lesson is built from the pair and a pair naming it back would make each file load the other.");
  let words = property_get(pair, "words_last");
  let fragment = property_get(pair, "fragment");
  ("The title shows the same piece of code as the lesson before, and only its words tell the two apart. The human chose this, 2026-09-27, over adding console.log(a); after the piece: the longer title was the one thing on the home list that took two rows.");
  let name_id = app_code_lesson_statement_title_name_id_paint(words, fragment);
  let batch_original = property_get(pair, "batch");
  let decoys = property_get(pair, "decoys_last");
  let lesson = app_code_lesson_statement_name_last(
    lesson_first,
    batch_original,
    name_id,
    decoys,
  );
  return lesson;
}
