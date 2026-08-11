import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_verse_words_clean_unique } from "./app_code_verse_words_clean_unique.mjs";
import { text_lower_is } from "./text_lower_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_code_lesson_expression_string_order_words_source() {
  arguments_assert(arguments, 0);
  ("the verse words that are already all lower case, made distinct - the only ones whose character-code order matches alphabetical order, so a capital never sorts ahead of a small letter in front of the learner");
  let distinct = app_code_verse_words_clean_unique();
  function lower_case_is(word) {
    "whether a word is already all lower case (unchanged by lower-casing it)";
    let same = text_lower_is(word);
    return same;
  }
  let lower_only = list_filter(distinct, lower_case_is);
  return lower_only;
}
