import { words_letters_lowered } from "./words_letters_lowered.mjs";
import { list_words_missing } from "./list_words_missing.mjs";
export function text_words_gone_come(before, after) {
  "$plain before";
  "$plain after";
  "The words one rewrite dropped and the words it brought in - each named once, ignoring how they were spelt for case and ignoring anything that is not a letter.";
  "IT IS THE SMALLEST TRUE ACCOUNT OF WHAT A REWRITE DID. Handed both versions of a line, a reader has to read both and hold them side by side to see what moved; handed SINCE went out and FROM THE TIME came in, they have it at a glance and can say yes or no without reading either line in full. The saving is the whole reason a revision loop is worth running - a rewrite nobody can check cheaply gets waved through, and then the checking never happens at all.";
  "WORDS AND NOT CHARACTERS, because the reader is judging writing rather than merging text. A character diff on a rewritten sentence marks nearly all of it and says nothing; the words that left and the words that arrived are the units somebody actually has an opinion about.";
  "A WORD MOVED WITHIN THE LINE IS NOT A CHANGE HERE, and that is deliberate rather than a shortcoming. Reordering a sentence changes no word, so it comes back empty - and a reviewer told nothing changed can look at the line and see that the sense did not either. Reporting every move would bury the two words that matter under a sentence that only breathes differently.";
  let before_words = words_letters_lowered(before);
  let after_words = words_letters_lowered(after);
  let gone = list_words_missing(before_words, after_words);
  let come = list_words_missing(after_words, before_words);
  let r = {
    gone,
    come,
  };
  return r;
}
