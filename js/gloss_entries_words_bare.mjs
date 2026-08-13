import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { text_punctuation_split } from "./text_punctuation_split.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function gloss_entries_words_bare(entries) {
  "The words a passage's explanations name, cut at their punctuation, in the order the page paints them.";
  "One explanation may name several words at once, so this is longer than the list of explanations and the two must not be counted for each other. What comes back is the sequence a reader's eye follows down the page, which is the only thing the passage itself can be compared against.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let bare = [];
  function entry_read(entry) {
    let word = property_get(entry, word_key);
    let bares = text_punctuation_split(word);
    list_add_multiple(bare, bares);
  }
  each(entries, entry_read);
  return bare;
}
