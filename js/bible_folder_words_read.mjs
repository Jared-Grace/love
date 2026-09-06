import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { equal } from "./equal.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
import { text_words_apostrophe_kept } from "./text_words_apostrophe_kept.mjs";
export function bible_folder_words_read(bible_folder) {
  "$plain bible_folder";
  "The word reader one bible's own language needs, chosen from the folder it is stored under.";
  "★ A DASH INSIDE A WORD AND A DASH BETWEEN TWO WORDS LOOK EXACTLY ALIKE, SO NO READER IS RIGHT FOR BOTH LANGUAGES AND THE CHOICE HAS TO BE MADE HERE. Cebuano spells the catch in the throat with a dash, in pag-ila and maluloy-on and panan-awon, and a reader that cuts there files panan and awon as words of the language and loses panan-awon altogether. English writes a dash only between two words, where cutting is what is wanted.";
  "Measured 2026-09-06 before this existed: not one of the Cebuano bible's 20672 different words held a dash, and the fragments were sitting in the vocabulary as though somebody had written them.";
  let cebuano = ebible_folder_cebuano();
  let same = equal(bible_folder, cebuano);
  let read = same
    ? text_punctuation_dash_kept_split
    : text_words_apostrophe_kept;
  return read;
}
