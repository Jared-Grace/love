import { app_search_language_word_download } from "./app_search_language_word_download.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_map } from "./list_map.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_intersect_multiple } from "./list_intersect_multiple.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_to_dictionary_value } from "./list_to_dictionary_value.mjs";
export async function app_search_chapter_verses_matching(language_code, words) {
  "$plain language_code";
  "Every chapter and verse holding all of the words in one language's index.";
  arguments_assert(arguments, 2);
  let words_missing = [];
  async function lambda(word) {
    async function get() {
      let o = await app_search_language_word_download(language_code, word);
      return o;
    }
    ("the index keeps one file per word it has seen, so a word appearing nowhere has no file and the download fails; catch it and carry on, rather than letting one unknown word reject the whole search and leave a blank page");
    let r = await catch_null_async(get);
    let n = null_is(r);
    if (n) {
      list_add(words_missing, word);
      let r2 = {};
      return r2;
    }
    return r;
  }
  let mapped = await list_map_unordered_async(words, lambda);
  let keys = list_map(mapped, properties_get);
  let chapter_codes_match = list_intersect_multiple(keys);
  function value_get(chapter_code) {
    let mapped3 = list_map_property(mapped, chapter_code);
    let i = list_intersect_multiple(mapped3);
    return i;
  }
  let dictionary = list_to_dictionary_value(chapter_codes_match, value_get);
  let r3 = {
    words_missing,
    dictionary,
  };
  return r3;
}
