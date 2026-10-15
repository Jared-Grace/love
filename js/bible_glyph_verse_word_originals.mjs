import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { list_get } from "./list_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_verse_word_originals(verse) {
  arguments_assert(arguments, 1);
  ("$plain verse");
  ("the verse is one built verse as it is kept. It is data to read and nothing that runs.");
  ("The original Hebrew or Greek spelling of each word of one built verse, in the verse's own English order, or null for a word whose original cannot be found.");
  ("A WORD IS FOUND BY ITS NUMBER, NOT BY ITS PLACE. The words are kept in English order and the written words in the order they were written, and a word joined to others in the original can stand as several words in the English, so the third English word is seldom the third written one.");
  ("A NUMBER THE VERSE USES TWICE IS MATCHED IN TURN: the first English word holding it takes the first written word holding it, and so on. A written word once taken is not taken again, so two English words of one number land on two written words wherever the verse has two.");
  ("A word kept from before written words were kept has none to look in, so every word of such a verse comes back null.");
  let originals = [];
  let written = verse.original_words;
  let none = not(written);
  let taken = [];
  for (let pair of verse.words) {
    let strong = list_get(pair, 0);
    let found = null;
    if (not(none)) {
      let index = 0;
      for (let word of written) {
        let b = list_includes(taken, index);
        let free = not(b);
        if (free && list_includes(word.slice(1), strong)) {
          found = list_get(word, 0);
          list_add(taken, index);
          break;
        }
        index = index + 1;
      }
    }
    list_add(originals, found);
  }
  return originals;
}
