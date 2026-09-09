import { app_ceb_bible_words_common } from "./app_ceb_bible_words_common.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
export async function app_ceb_bible_gloss_root_word_given_apart_counted_vocabulary() {
  arguments_assert(arguments, 0);
  let common = await app_ceb_bible_words_common();
  let dictionary = await binisaya_words_known();
  let dictionary_words = object_property_names(dictionary);
  let vocabulary_words = [];
  function common_note(word) {
    let lowered = text_lower_to(word);
    list_add(vocabulary_words, lowered);
  }
  each(common, common_note);
  each(dictionary_words, common_note);
  let vocabulary = list_unique_set(vocabulary_words);
  return vocabulary;
}
