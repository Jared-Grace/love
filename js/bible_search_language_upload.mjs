import { arguments_assert } from "./arguments_assert.mjs";
import { bible_versions_commercial_language } from "./bible_versions_commercial_language.mjs";
import { bible_search_words_lookup } from "./bible_search_words_lookup.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { bible_search_language_word_path } from "./bible_search_language_word_path.mjs";
import { properties_get } from "./properties_get.mjs";
import { object_values_map } from "./object_values_map.mjs";
import { firebase_upload_object_compressed_chunked } from "./firebase_upload_object_compressed_chunked.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_search_language_upload(language_code) {
  "$plain language_code";
  "Build the search index of one language from every translation in it this repo is free to ship, and put each word of it up in storage, one file to a word, in the shape the English index uses: chapter, then the verse numbers holding the word.";
  "No mark dating the build is written yet. Nothing reads these words yet either, so there is no saved copy anywhere to be out of date; the mark belongs with the first reader of them.";
  arguments_assert(arguments, 1);
  let bible_folders = await bible_versions_commercial_language(language_code);
  let lookup = await bible_search_words_lookup(bible_folders);
  let entries = object_to_list(lookup);
  function word_file({ key, value: chapters }) {
    let destination = bible_search_language_word_path(language_code, key);
    function verse_numbers(verses) {
      let numbers = properties_get(verses);
      return numbers;
    }
    let value = object_values_map(chapters, verse_numbers);
    let r = {
      destination,
      value,
    };
    return r;
  }
  await firebase_upload_object_compressed_chunked(entries, word_file);
  let words = list_size(entries);
  let r = {
    language_code,
    bible_folders,
    words,
  };
  return r;
}
