import { arguments_assert } from "./arguments_assert.mjs";
import { hebrew_cantillation_strip } from "./hebrew_cantillation_strip.mjs";
import { bible_word_section_mark_strip } from "./bible_word_section_mark_strip.mjs";
import { equal } from "./equal.mjs";
import { text_last } from "./text_last.mjs";
import { not } from "./not.mjs";
export function bible_word_section_mark_display_strip(word) {
  "$plain word";
  "One Bible word with a Hebrew paragraph mark taken off the end if one is welded there, and everything else about the word - its chanting marks, its verse-closing mark - left exactly as it was.";
  "★ THIS IS THE CUT FOR A WORD A PERSON READS, not the cut for a word that gets said. The spoken cut throws the chanting marks away as well, because two chants of one word are one sound; a reader is shown the marks, so the only thing that may come off here is the welded letter.";
  "★ IT ASKS THE SPOKEN CUT WHETHER THE WORD IS WELDED rather than deciding again, so the page and the clip can never disagree about which words carry a mark.";
  "It refuses to cut unless the letter it would take off is the very last letter of the word as written. Where the chanting marks are arranged so that it is not, the word is handed back untouched rather than cut in a place nobody checked - a wrong cut here is shown to a reader as a misspelt word and says nothing about itself.";
  arguments_assert(arguments, 1);
  let bare = hebrew_cantillation_strip(word);
  let unwelded = bible_word_section_mark_strip(bare);
  let welded_not = equal(unwelded, bare);
  if (welded_not) {
    return word;
  }
  let mark = text_last(bare);
  let last = text_last(word);
  let same = equal(mark, last);
  if (not(same)) {
    return word;
  }
  let cut = word.slice(0, -1);
  return cut;
}
