import { arguments_assert } from "./arguments_assert.mjs";
export function text_word_plain_canonical_cases() {
  "Words as a text writes them and as a listener sets them down, each with the single spelling both should end up compared by.";
  "★ THE CASES THAT MATTER MOST ARE THE ONES THAT MUST NOT FOLD, BECAUSE A FOLDING THAT REACHES TOO FAR CANNOT BE SEEN FROM ITS ANSWERS. A word welded to another it merely resembles goes on matching happily and reports agreement it did not earn, so a word beginning with the same letters and a word that is simply itself are both written down here. Only the listed pair moves; everything else is expected to come back exactly as the plain form left it.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      name: "the way the psalm writes it, which is already the spelling everything compares by",
      word: "Hallelujah!",
      plain: "hallelujah",
    },
    {
      name: "the way the listener that was shown no words set it down, which is the whole reason the list exists",
      word: "Alleluia!",
      plain: "hallelujah",
    },
    {
      name: "that same second spelling in bare letters already, to show the folding does not depend on there being marks to take off",
      word: "alleluia",
      plain: "hallelujah",
    },
    {
      name: "an ordinary word of the psalm, which the list says nothing about and must come back untouched",
      word: "Praise",
      plain: "praise",
    },
    {
      name: "a word that begins exactly like the listed one and is a different word, which a folding done by resemblance would swallow",
      word: "allele",
      plain: "allele",
    },
    {
      name: "a word the listed one begins with, guarding the same mistake from the other end",
      word: "all",
      plain: "all",
    },
  ];
  return cases;
}
