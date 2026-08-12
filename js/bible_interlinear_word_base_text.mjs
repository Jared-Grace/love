import { bible_interlinear_sigla_edition_pairs } from "./bible_interlinear_sigla_edition_pairs.mjs";
import { bible_interlinear_sigla_marks_not_edition } from "./bible_interlinear_sigla_marks_not_edition.mjs";
import { not } from "./not.mjs";
import { text_trim } from "./text_trim.mjs";
export function bible_interlinear_word_base_text(marked) {
  "One marked interlinear word with its editorial marks removed, leaving only the word.";
  "Both kinds of mark come off, and the difference between them is decided elsewhere - an";
  "edition wrapper has already dropped the words it covered by the time a word gets here,";
  "so what reaches this function is a stray half of a pair on a word that survived, and a";
  "bracket printed in the middle of a verse of scripture is not something a reader should";
  "ever have to see. The marks that never drop a word come off for the same reason.";
  "Nothing else is removed. Hebrew's sof pasuq, maqaf and paseq, the Greek elision";
  "apostrophe, the undertie and the broken bar all read as punctuation to a stripper and";
  "are all part of the text; they are kept because the other base-text column keeps them.";
  let pairs = bible_interlinear_sigla_edition_pairs();
  let removable = {};
  function pair_note(pair) {
    removable[pair.open] = true;
    removable[pair.close] = true;
  }
  pairs.forEach(pair_note);
  function mark_note(mark) {
    removable[mark] = true;
  }
  bible_interlinear_sigla_marks_not_edition().forEach(mark_note);
  let characters = Array.from(marked);
  function keep_is(character) {
    let remove = removable[character];
    let n = not(remove);
    return n;
  }
  let kept = characters.filter(keep_is);
  let joined = kept.join("");
  let trimmed = text_trim(joined);
  return trimmed;
}
