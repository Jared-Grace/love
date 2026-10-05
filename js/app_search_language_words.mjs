import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { bible_search_words } from "./bible_search_words.mjs";
import { text_search_words } from "./text_search_words.mjs";
export function app_search_language_words(language_code, query) {
  "$plain language_code";
  "$plain query";
  "The words a query is asked for in one language's index, cut the way that index was cut when it was built - a query cut any other way asks for words the index never wrote.";
  "English keeps its own cut because its index was built with it; every other language was built with accents ignored and Chinese and Japanese read a character at a time, so its query is cut that way too.";
  arguments_assert(arguments, 2);
  let right = ebible_language_en_code();
  let english = equal(language_code, right);
  if (english) {
    let words_english = bible_search_words(query);
    return words_english;
  }
  let words = text_search_words(query);
  return words;
}
