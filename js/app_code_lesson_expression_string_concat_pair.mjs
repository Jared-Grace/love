import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_verse_words_clean_unique } from "./app_code_verse_words_clean_unique.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_code_lesson_expression_string_concat_pair() {
  arguments_assert(arguments, 0);
  ("two DIFFERENT words from the shared verse - the verse repeats some words (that appears twice), so the list is made unique first, otherwise a pair could be one word joined to itself and the reversed-order decoy would equal the answer");
  let distinct = app_code_verse_words_clean_unique();
  let two = list_shuffle_take(distinct, 2);
  return two;
}
