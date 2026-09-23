import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_punctuation_removed } from "./text_punctuation_removed.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function ebible_verse_words_is(verse) {
  arguments_assert(arguments, 1);
  ("Whether a verse has any words in it at all.");
  ("A mark does not count as words. That is how a translation writes a verse it has nothing to say for - the mark is the printer saying something is missing, not something anybody reads - and a reader shown a numbered line with a lone full stop on it would take it for a fault in the app rather than a fact about the translation.");
  ("★ IT ASKS FOR A LETTER OR A DIGIT RATHER THAN NAMING THE MARKS. It used to take away the two square brackets and ask what was left, because a bracket is how most translations do this. Walking the whole archive turned up seventeen different marks doing the same job and no reason to think that is all of them: a bare full stop, a lone dash, a bracket with a dash inside it, a cross, a hash, and - the one that settles it - a dash that is not the ordinary dash but the one a printer uses to keep a word from breaking, which no list written against the ordinary dash would ever have caught. A list of marks can only ever be as long as the last walk. Asking whether a letter or a digit is present is the same question asked from the other side, and it is finite.");
  ("It knows letters in every script and not only English ones. The reader it leans on keeps letters, the accents and vowel points that hang off them, and digits, in whatever alphabet they are written; the letters-only reader beside it knows A to Z alone and would call every verse of Urdu, Hebrew, Greek and Coptic in the archive wordless.");
  ("Words inside brackets are still words. Taking the marks away and asking what is left keeps a bracketed passage that a translation does print, and drops only a verse that is marks and nothing else.");
  ("Asked in one place because more than one reading has to agree about it: the one that cuts a chapter into verses drops the ones with no words, the one that draws a chapter to a person keeps them and writes a note in their place, and the one that lays the reading-aloud lines against the numbers has to leave out exactly the same verses or every line after them carries the wrong number.");
  let text = property_get(verse, "text");
  let bare = text_punctuation_removed(text);
  let n = text_empty_not_is(bare);
  return n;
}
