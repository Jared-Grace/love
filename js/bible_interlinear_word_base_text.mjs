import { bible_interlinear_sigla_edition_pairs } from "./bible_interlinear_sigla_edition_pairs.mjs";
import { text_trim } from "./text_trim.mjs";
("One marked interlinear word with its editorial marks removed, leaving only the word.");
("Two kinds of mark come off. The edition wrappers come off because a word that survived");
("the span filter can still carry a stray half of a pair, and a bracket printed in the");
("middle of a verse of scripture is not something a reader should ever have to see.");
("The trailing asterisk comes off because it flags a word the base text already carries -");
("the editions differ over how to spell it, not over whether it is there - so the mark is");
("editorial but the word is not, and dropping the word over it would delete base text.");
("Nothing else is removed. Hebrew's sof pasuq, maqaf and paseq, the Greek elision");
("apostrophe, the undertie and the broken bar all read as punctuation to a stripper and");
("are all part of the text; they are kept because the other base-text column keeps them.");
export function bible_interlinear_word_base_text(marked) {
  let pairs = bible_interlinear_sigla_edition_pairs();
  let flag = String.fromCodePoint(0x2a);
  let removable = {};
  function pair_note(pair) {
    removable[pair.open] = true;
    removable[pair.close] = true;
  }
  pairs.forEach(pair_note);
  removable[flag] = true;
  let characters = Array.from(marked);
  function keep_is(character) {
    let remove = removable[character];
    return !remove;
  }
  let kept = characters.filter(keep_is);
  let joined = kept.join("");
  let trimmed = text_trim(joined);
  return trimmed;
}
