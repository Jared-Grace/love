import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_last_title_name_id } from "./app_code_lesson_statement_name_last_title_name_id.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_name_last } from "./app_code_lesson_statement_name_last.mjs";
export function app_code_lesson_statement_name_pair_last(lesson_first, pair) {
  arguments_assert(arguments, 2);
  ("the second lesson of a pair where a name takes new values: the same programs as the first, with the name written out only at the end");
  ("The first lesson is handed in beside its pair rather than kept in the pair, because the first lesson is built from the pair and a pair naming it back would make each file load the other.");
  let title_fn = property_get(pair, "painter");
  let words = property_get(pair, "words_last");
  let code_change = property_get(pair, "code");
  let name_id = app_code_lesson_statement_name_last_title_name_id(
    title_fn,
    words,
    code_change,
  );
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
