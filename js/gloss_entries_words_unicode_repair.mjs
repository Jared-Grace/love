import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { text_unicode_normalize } from "./text_unicode_normalize.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { text_punctuation_split } from "./text_punctuation_split.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { text_replace } from "./text_replace.mjs";
import { list_add } from "./list_add.mjs";
export function gloss_entries_words_unicode_repair(entries, written) {
  "Give back to a passage's explanations the exact letters the passage itself is written with, wherever an explanation names the same word in a different spelling of the same letters - answering with the words it put back.";
  "An accented letter has more than one spelling that looks identical on the screen, so a word typed out again rather than copied can stop matching the passage while still reading as correct to anyone who looks at it. What that breaks is the alignment: the explanations are painted straight under the passage and a word that matches nothing is a word the reader is left standing on.";
  "An explanation is matched a word at a time, cut at its punctuation the same way the passage is, and only the letters are put back - the marks the explanation was written with stay exactly where they stood. The whole explanation cannot be looked up as it stands, because an explanation carries the punctuation that was joined onto the word and the passage's words are held without it: Hebrew joins one word to the next with a dash more often than not, so looking up the whole thing finds nothing and leaves the commonest case unmended.";
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
    let pieces = text_punctuation_split(word);
    let count = list_size(pieces);
    let index = 0;
    let mended = word;
    while (less_than(index, count)) {
      let piece = list_get(pieces, index);
      index = index + 1;
      let normalized = text_unicode_normalize(piece);
      let original = property_get_or_null(by_normalized, normalized);
      if (null_is(original)) {
        continue;
      }
      let same = equal(piece, original);
      if (same) {
        continue;
      }
      mended = text_replace(mended, piece, original);
      list_add(repaired, original);
    }
    let unchanged = equal(mended, word);
    if (unchanged) {
      return;
    }
    property_set(entry, word_key, mended);
  }
  each(entries, entry_repair);
  return repaired;
}
