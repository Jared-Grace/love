import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { bible_search_word_download } from "./bible_search_word_download.mjs";
import { bible_search_language_word_download } from "./bible_search_language_word_download.mjs";
export async function app_search_language_word_download(language_code, word) {
  "$plain language_code";
  "$plain word";
  "The chapters and verses holding one word in one language's index. English sits where it always has, at the top of the index folder; every other language sits under its own code.";
  arguments_assert(arguments, 2);
  let right = ebible_language_en_code();
  let english = equal(language_code, right);
  if (english) {
    let value_english = await bible_search_word_download(word);
    return value_english;
  }
  let value = await bible_search_language_word_download(language_code, word);
  return value;
}
