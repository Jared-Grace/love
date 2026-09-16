import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_word_section_marks_welded_spellings } from "./bible_word_section_marks_welded_spellings.mjs";
export function bible_word_section_mark_strip(text) {
  "$plain text";
  "The same words with a Hebrew paragraph mark taken off the end of any word that has one welded on, so what is left is the word a reader is meant to see and a voice is meant to say.";
  "★ IT DECIDES BY THE WHOLE WORD, NEVER BY THE LAST LETTER, because the closed mark is spelt with a letter that ends real words - a cup ends in it - so a rule about the last letter alone would swallow the last sound of those words instead.";
  "★ EVERYTHING THAT NAMES A CLIP AND EVERYTHING THAT ASKS FOR ONE GOES THROUGH HERE, or the two cut the word differently and the tap asks storage for a file nobody made, which plays nothing and says nothing.";
  "★ IT COMPARES SPELLINGS WITH THEIR MARKS PUT IN ONE ORDER, because the same Hebrew word can be written with its vowel points stored in either order and the two look identical on the page while being different text; comparing them as they came matched fewer than half of them and said nothing about the rest.";
  "It works word by word, because what arrives can be a phrase of several words and only the last of them can carry the mark.";
  "A word it does not know is handed back exactly as it came, so this can never make a word worse than it was.";
  arguments_assert(arguments, 1);
  function lambda2(spelling) {
    let r = spelling.normalize("NFC");
    return r;
  }
  let welded = bible_word_section_marks_welded_spellings().map(lambda2);
  let words = text.split(" ");
  function lambda(word) {
    let v = word.normalize("NFC");
    let is_welded = welded.includes(v);
    if (not(is_welded)) {
      return word;
    }
    let cut = word.slice(0, -1);
    return cut;
  }
  let stripped = words.map(lambda);
  let joined = stripped.join(" ");
  return joined;
}
