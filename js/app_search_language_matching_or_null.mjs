import { arguments_assert } from "./arguments_assert.mjs";
import { app_search_language_words } from "./app_search_language_words.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_search_chapter_verses_matching } from "./app_search_chapter_verses_matching.mjs";
export async function app_search_language_matching_or_null(
  language_code,
  query,
) {
  "Every chapter and verse in one language holding all the words of a query, or nothing at all where that language read none of the query's words.";
  arguments_assert(arguments, 2);
  let words = app_search_language_words(language_code, query);
  let none = list_empty_is(words);
  if (none) {
    return null;
  }
  let r = await app_search_chapter_verses_matching(language_code, words);
  let o = {
    words,
    words_missing: r.words_missing,
    words_unreachable: r.words_unreachable,
    dictionary: r.dictionary,
  };
  return o;
}
