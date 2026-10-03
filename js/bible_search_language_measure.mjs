import { gzipSync } from "node:zlib";
import { object_property_names } from "./object_property_names.mjs";
import { json_to } from "./json_to.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_versions_commercial_language } from "./bible_versions_commercial_language.mjs";
import { bible_search_words_lookup } from "./bible_search_words_lookup.mjs";
export async function bible_search_language_measure(language_code) {
  "$plain language_code";
  "What a search index for one language would cost before any of it is built for real: how many word files it makes, how many bytes they come to compressed, and which word is the heaviest. Nothing is uploaded.";
  "Each word is measured in the shape the English index uploads it - chapter, then the verse numbers holding it - and compressed the same way, because a file count alone hides a few words that sit in nearly every verse.";
  arguments_assert(arguments, 1);
  let bible_folders = await bible_versions_commercial_language(language_code);
  let lookup = await bible_search_words_lookup(bible_folders);
  let words = 0;
  let bytes = 0;
  let largest = {
    word: null,
    bytes: 0,
  };
  for (let [word, chapters] of Object.entries(lookup)) {
    let value = {};
    for (let [chapter_code, verses] of Object.entries(chapters)) {
      value[chapter_code] = object_property_names(verses);
    }
    let json = json_to(value);
    let size = gzipSync(json).length;
    words += 1;
    bytes += size;
    if (greater_than(size, largest.bytes)) {
      largest = {
        word,
        bytes: size,
      };
    }
  }
  let r = {
    language_code,
    bible_folders,
    words,
    bytes,
    largest,
  };
  return r;
}
