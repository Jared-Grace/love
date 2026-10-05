import { app_search_languages_answers_joined } from "./app_search_languages_answers_joined.mjs";
import { app_search_language_matching_or_null } from "./app_search_language_matching_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { app_search_language_searchable } from "./app_search_language_searchable.mjs";
import { list_add } from "./list_add.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
export async function app_search_languages_matching(languages_chosen, query) {
  "$plain languages_chosen";
  "$plain query";
  "Every chapter and verse matching a query in any of the languages the reader chose, with the words it was asked as and the words no language had.";
  "Each language answers on its own, every word inside one language: a reader searching in Spanish means a Spanish verse holding all their words, never one word found in Spanish and another found in English. The answers are then joined, because a verse is the same verse whatever language found it.";
  "A word is reported missing only when every language that was asked for it lacked it. A language that read no words in the query at all - English handed Chinese characters - was never asked, so its silence counts for nothing.";
  arguments_assert(arguments, 2);
  let property_name = language_code_key();
  ("a language storage holds no index for is set aside before anything is asked of it, and named, so the page can say it was not searched rather than report every word as nowhere in the Bible");
  let codes = [];
  let languages_unsearchable = [];
  for (let language of languages_chosen) {
    let code = property_get(language, property_name);
    let searchable = await app_search_language_searchable(code);
    if (searchable) {
      list_add(codes, code);
    } else {
      list_add(languages_unsearchable, language);
    }
  }
  async function language_matching(language_code) {
    let r2 = await app_search_language_matching_or_null(language_code, query);
    return r2;
  }
  let answers = await list_map_unordered_async(codes, language_matching);
  function lambda(a) {
    let neq = not_equal(a, null);
    return neq;
  }
  let asked = list_filter(answers, lambda);
  let words = [];
  for (let a of asked) {
    words = list_concat_unique(words, a.words);
  }
  let r = app_search_languages_answers_joined(
    asked,
    words,
    languages_unsearchable,
  );
  return r;
}
