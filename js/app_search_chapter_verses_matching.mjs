import { arguments_assert } from "./arguments_assert.mjs";
import { app_search_language_word_download } from "./app_search_language_word_download.mjs";
import { fn_name } from "./fn_name.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { http_error_message_absent_is } from "./http_error_message_absent_is.mjs";
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
  let words_unreachable = [];
  async function lambda(word) {
    async function get() {
      let o = await app_search_language_word_download(language_code, word);
      return o;
    }
    ("the index keeps one file per word it has seen, so a word appearing nowhere has no file and the download fails; catch it and carry on, rather than letting one unknown word reject the whole search and leave a blank page");
    ("WHY IT WOULD NOT COME IS KEPT, NOT ONLY THAT IT DID NOT. The catch here used to answer nothing, which gave a word that is in no verse and a word whose index could not be reached exactly the same shape - and a reader was then handed both guesses at once and sent back to try again forever over a spelling no retry will ever fix. ");
    (fn_name("http_error_message_absent_is"),
      " is the repo's one judgment about absence, and it grants absence only to a plain not-found; anything quieter than that leaves the word merely unreached, which is the honest answer because a lookup that never arrived proves nothing about what the index holds.");
    let r = await catch_message_async(get);
    let n = not(r.ok);
    if (n) {
      list_add(words_missing, word);
      let absent = http_error_message_absent_is(r.message);
      let unreachable = not(absent);
      if (unreachable) {
        list_add(words_unreachable, word);
      }
      let r2 = {};
      return r2;
    }
    let r4 = r.value;
    return r4;
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
    words_unreachable,
    dictionary,
  };
  return r3;
}
