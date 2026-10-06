import { assert_json } from "./assert_json.mjs";
import { greater_than } from "./greater_than.mjs";
import { ebible_language_arabic } from "./ebible_language_arabic.mjs";
import { property_get } from "./property_get.mjs";
import { bible_search_words_lookup_forms_add } from "./bible_search_words_lookup_forms_add.mjs";
import { text_arabic_prefixes_stripped } from "./text_arabic_prefixes_stripped.mjs";
import { equal } from "./equal.mjs";
import { bible_search_language_built_upload } from "./bible_search_language_built_upload.mjs";
import { ebible_language_bible_folders_commercial } from "./ebible_language_bible_folders_commercial.mjs";
import { date_time_zone_now_iso } from "./date_time_zone_now_iso.mjs";
import { bible_search_built_upload } from "./bible_search_built_upload.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
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
  "The language is named by the short code a reader's link carries (es), so the folder it lands in is the word the search page asks for.";
  arguments_assert(arguments, 1);
  let bible_folders =
    await ebible_language_bible_folders_commercial(language_code);
  let lookup = await bible_search_words_lookup(bible_folders);
  ("Arabic writes and, so, by, for and the onto the front of the word they belong to, so a reader asking for a word must also find it with those attached - the way a search for God should find the God.");
  let arabic = ebible_language_arabic();
  let arabic_code = property_get(arabic, "language_code");
  if (equal(language_code, arabic_code)) {
    bible_search_words_lookup_forms_add(lookup, text_arabic_prefixes_stripped);
  }
  let entries = object_to_list(lookup);
  ("An index of no words is refused before anything is put up, because the mark put up last tells every reader the language can be searched. Amharic was once built that way: its bible came from a place the reader did not know, no verse was read, and the build said it had worked.");
  let count = list_size(entries);
  let b = greater_than(count, 0);
  assert_json(b, {
    hint: "no word was read out of these bibles, so the language is not marked searchable",
    language_code,
    bible_folders,
  });
  function word_file({ key, value: chapters }) {
    let destination = bible_search_language_word_path(language_code, key);
    function verse_numbers(verses) {
      let numbers = properties_get(verses);
      return numbers;
    }
    let value = object_values_map(chapters, verse_numbers);
    let file = {
      destination,
      value,
    };
    return file;
  }
  await firebase_upload_object_compressed_chunked(entries, word_file);
  ("the build is marked last, the same mark the English words are dated by, because a saved copy of any word under the index folder is thrown away when that mark moves - so one mark keeps every language's saved copies honest");
  let built = date_time_zone_now_iso();
  await bible_search_built_upload(built);
  await bible_search_language_built_upload(language_code, built);
  let words = count;
  let r = {
    language_code,
    bible_folders,
    words,
  };
  return r;
}
