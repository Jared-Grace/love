import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { text_unicode_normalize } from "./text_unicode_normalize.mjs";
export function gloss_entries_words_unicode_repair(entries, written) {
  "Give back to a passage's explanations the exact letters the passage itself is written with, wherever an explanation names the same word in a different spelling of the same letters - answering with the words it put back.";
  "An accented letter has more than one spelling that looks identical on the screen, so a word typed out again rather than copied can stop matching the passage while still reading as correct to anyone who looks at it. What that breaks is the alignment: the explanations are painted straight under the passage and a word that matches nothing is a word the reader is left standing on.";
  "Only a word that is already the same word is touched. An explanation whose letters spell something else, once the spellings are agreed, is left exactly as it stands - that is a real difference, and correcting it is a judgment nobody here is in a position to make.";
  "Running it a second time changes nothing, because the first run left the words spelled the way the passage spells them.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let by_normalized = {};
  function written_note(word) {
    let normalized = text_unicode_normalize(word);
    property_set(by_normalized, normalized, word);
  }
  each(written, written_note);
  let repaired = [];
  function entry_repair(entry) {
    let word = property_get(entry, word_key);
    let normalized = text_unicode_normalize(word);
    let original = property_get_or_null(by_normalized, normalized);
    if (null_is(original)) {
      return;
    }
    let same = equal(word, original);
    if (same) {
      return;
    }
    property_set(entry, word_key, original);
    list_add(repaired, original);
  }
  each(entries, entry_repair);
  return repaired;
}
