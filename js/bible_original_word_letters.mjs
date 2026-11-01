import { arguments_assert } from "./arguments_assert.mjs";
import { text_search_folded } from "./text_search_folded.mjs";
export function bible_original_word_letters(word) {
  arguments_assert(arguments, 1);
  ("$plain word");
  ("the word is one Hebrew or Greek word as some text spells it. It is read and nothing in it runs.");
  ("The bare letters of an original-language word, so the same word spelled by two texts compares equal.");
  ("TWO TEXTS OF THE SAME HEBREW DIFFER IN THE MARKS, NOT THE LETTERS. Measured 2026-11-01 on Genesis 1:2: the reader's Hebrew writes the deep as תְהֹ֑ום and the interlinear writes it as תְה֑וֹם - the dot over the vav moved - and both are תהום once the vowels and accents are gone. So the marks are folded away and only letters are compared.");
  ("A VERSE END CUTS THE WORD THERE. The interlinear keeps the paragraph sign after the last word of a verse, as in הַשִּׁשִּֽׁי׃פ, and that sign is the letter pe, which no folding of marks would remove; everything from the verse-end colon on is not the word.");
  let cut = word.split("׃")[0];
  let folded = text_search_folded(cut);
  let letters = folded.replace(/[^\p{L}]/gu, "");
  return letters;
}
