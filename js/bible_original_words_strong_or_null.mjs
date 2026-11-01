import { arguments_assert } from "./arguments_assert.mjs";
import { bible_original_word_letters } from "./bible_original_word_letters.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_skip } from "./list_skip.mjs";
export function bible_original_words_strong_or_null(original_words, word) {
  arguments_assert(arguments, 2);
  ("$plain original_words");
  ("$plain word");
  ("the original words are one verse's written words, each a list of the word as written followed by the keys of its parts; the word is one tapped word of some text of that verse. Both are data and neither runs.");
  ("The Strong's number of the tapped word, found among the verse's written words by its letters, or null when no written word has those letters or the one that does has no number.");
  ("THE FIRST WRITTEN WORD WITH THOSE LETTERS ANSWERS. A word said twice in one verse is the same word with the same number, so which of the two answers makes no difference.");
  ("THE NUMBER IS THE LAST KEY MADE ONLY OF DIGITS. A Hebrew word's other keys are the small parts joined to it, written as parsing codes such as Conj-w or 3ms, never as bare digits; a Greek word fused with and keeps and's number first and its own after, so the last one is the word's own.");
  let letters = bible_original_word_letters(word);
  if (text_empty_is(letters)) {
    return null;
  }
  for (let written of original_words) {
    let written_letters = bible_original_word_letters(written[0]);
    let b = equal(written_letters, letters);
    if (not(b)) {
      continue;
    }
    let strong = null;
    for (let key of list_skip(written, 1)) {
      let v = String(key);
      if (/^\d+$/.test(v)) {
        strong = String(key);
      }
    }
    return strong;
  }
  return null;
}
