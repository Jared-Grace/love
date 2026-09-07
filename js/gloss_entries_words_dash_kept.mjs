import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
export function gloss_entries_words_dash_kept(entries) {
  "The words a passage's explanations name, cut at their punctuation with a dash inside a word left where it is, in the order the page paints them.";
  "This is the same reading as the one beside it but for the dash, and the difference is the whole point of it. Cebuano writes a dash inside a word - panan-aw, nag-ingon, kabubut-on - and the reader beside this one cuts every one of those in two, so a store that explains panan-aw offers no word spelled panan-aw and offers panan and aw instead, neither of which the language writes.";
  "★ WHICH OF THE TWO IS RIGHT DEPENDS ON THE LANGUAGE AND NOT ON THE STORE, WHICH IS WHY BOTH ARE HERE. English writes a dash between two words and wants them counted as two; Cebuano writes one inside a word and wants it counted as one. Nothing about a gloss store says which of those it holds, so the caller says.";
  "One explanation may name several words at once, so what comes back is longer than the list of explanations and the two must not be counted for each other.";
  "$plain entries";
  "they name a passage's explanations to read, never anything that runs.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let kept = [];
  function entry_read(entry) {
    let word = property_get(entry, word_key);
    let words = text_punctuation_dash_kept_split(word);
    list_add_multiple(kept, words);
  }
  each(entries, entry_read);
  return kept;
}
