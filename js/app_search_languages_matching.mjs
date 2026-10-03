import { object_property_names } from "./object_property_names.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { app_search_language_words } from "./app_search_language_words.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_search_chapter_verses_matching } from "./app_search_chapter_verses_matching.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_all } from "./list_all.mjs";
export async function app_search_languages_matching(languages_chosen, query) {
  "$plain languages_chosen";
  "$plain query";
  "Every chapter and verse matching a query in any of the languages the reader chose, with the words it was asked as and the words no language had.";
  "Each language answers on its own, every word inside one language: a reader searching in Spanish means a Spanish verse holding all their words, never one word found in Spanish and another found in English. The answers are then joined, because a verse is the same verse whatever language found it.";
  "A word is reported missing only when every language that was asked for it lacked it. A language that read no words in the query at all - English handed Chinese characters - was never asked, so its silence counts for nothing.";
  arguments_assert(arguments, 2);
  let property_name = language_code_key();
  let codes = list_map_property(languages_chosen, property_name);
  async function language_matching(language_code) {
    let words = app_search_language_words(language_code, query);
    let none = list_empty_is(words);
    if (none) {
      return null;
    }
    let r = await app_search_chapter_verses_matching(language_code, words);
    let o = {
      words,
      words_missing: r.words_missing,
      dictionary: r.dictionary,
    };
    return o;
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
  function missing_everywhere(word) {
    function lacks(a) {
      let b2 = list_includes(a.words, word);
      let not_asked = not(b2);
      let missing = not_asked || list_includes(a.words_missing, word);
      return missing;
    }
    let all = list_all(asked, lacks);
    return all;
  }
  let words_missing = list_filter(words, missing_everywhere);
  let dictionary = {};
  for (let a of asked) {
    for (let [chapter_code, verses] of Object.entries(a.dictionary)) {
      let held = dictionary[chapter_code] || [];
      dictionary[chapter_code] = list_concat_unique(held, verses);
    }
  }
  for (let chapter_code of object_property_names(dictionary)) {
    function lambda2(a, b) {
      let left = Number(a);
      let right = Number(b);
      let difference = subtract(left, right);
      return difference;
    }
    dictionary[chapter_code].sort(lambda2);
  }
  let r = {
    words,
    words_missing,
    dictionary,
  };
  return r;
}
