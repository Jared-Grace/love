import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_replace } from "./text_replace.mjs";
export function gloss_word_folded(word) {
  "One word cut down further than bare: the letters Cebuano writes two ways for the same sound are each written one way, so two spellings of one word come out identical.";
  "Cebuano's o and u are the same sound, written one way at the end of a word and the other away from it - hangtod against hangtud, igsuon against igsoon, sabot against sabut. Its d, l and r are one another across dialects and across what gets added to a word: d becomes r between two vowels when something follows it, so bukid gives bukiran and tukod gives tukoranan, and d and l trade places from one island to the next, so wala is written wada and duha stands behind luha. None of those differences means anything, and all of them are met in the hundreds: hangtod alone accounts for ninety-nine findings that are not faults, and folding the three consonants together settled forty-one more.";
  "The three consonants were folded only after the pairs it would join were read one by one. Every one of them was a real pair - duha with luha, salop with sad, wala with wada - and not one was a claim the folding would have excused. A fold is a way of not seeing a difference, so what it stops seeing has to be looked at before it is turned on rather than after.";
  "Both letters fold toward one side rather than being matched as a pair, because folding is what lets the ordinary equal and contains tests be used unchanged. Which side is picked does not matter as long as both words are folded the same way.";
  "This is for comparing, never for showing. A folded word is not how anybody spells it, so what is reported to a reader has to be the word as it stands.";
  "$plain word";
  "it names text to compare, never anything that runs.";
  let bare = gloss_word_bare(word);
  let vowel = text_replace(bare, "u", "o");
  let rolled = text_replace(vowel, "r", "d");
  let r = text_replace(rolled, "l", "d");
  return r;
}
