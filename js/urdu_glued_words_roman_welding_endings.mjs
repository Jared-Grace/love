import { urdu_glued_words_roman_welding_endings_ending } from "./urdu_glued_words_roman_welding_endings_ending.mjs";
import { urdu_glued_words_roman_welding_endings_row } from "./urdu_glued_words_roman_welding_endings_row.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_tally } from "./list_tally.mjs";
export function urdu_glued_words_roman_welding_endings(rows) {
  arguments_assert(arguments, 1);
  ("$plain rows");
  ("Which endings the Latin printing always runs together in words the Urdu printing writes with a space, as an object from the ending to how many words say so.");
  ("★ THE LATIN ALPHABET HAS SPACING HABITS OF ITS OWN, AND THOSE ARE NOT THE PRINTING HAVING AN OPINION ABOUT URDU. The two printings are one translation set twice, so a difference between them is typesetting - but typesetting includes the rules for turning a script that leaves its vowels out into one that does not, and some of those rules join pieces up. Where a join is the alphabet's, the Latin printing is transcribing the space rather than disputing it, and reading it as a dispute is reading a convention as a witness.");
  ("★ ONE WORD CANNOT SHOW THIS AND A WHOLE ENDING CAN, WHICH IS WHY THE COUNTING IS BY ENDING. A single word run together where the other printing spaces it is exactly what a real disagreement looks like too, and nothing about that one word tells the two apart. An ending that behaves the same way in every word that uses it is different: a typesetter disagreeing word by word would land on both answers eventually, and one that never does is following a rule. The future ending was counted at twenty-three words out of twenty-three, at occurrence counts matching the other printing nearly verse for verse.");
  ("★ ONLY THE WORDS THE URDU PRINTING WRITES WITH A SPACE ARE COUNTED, BECAUSE UNANIMITY ANYWHERE ELSE MEANS NOTHING. Most endings are unanimously run together for the dullest possible reason, which is that the words using them are ordinary single words and both printings say so. Counting those would call every common ending a convention. The only rows that carry information are the ones where the two printings already part company, and the question is whether they part company every single time.");
  ("An ending that only one such word uses is thrown out rather than believed. One row is not a class, and a rule read off a single case is the case wearing a rule's clothes.");
  ("★ NOTHING IS SILENCED HERE AND THAT IS DELIBERATE. Throwing the Latin printing out of these rows would leave the Urdu printing saying cut this word in two with nothing standing against it, so a mistake in this reading would not leave the text alone - it would change scripture. So the finding is handed back to be shown beside both printings, and the person who reads Urdu decides what it is worth. How many words back the ending is handed back with it for that reason: two of two and nine of nine are not the same claim.");
  let welded = [];
  let spaced = [];
  urdu_glued_words_roman_welding_endings_row(rows, spaced, welded);
  let welded_counts = list_tally(welded);
  let spaced_counts = list_tally(spaced);
  let endings = {};
  urdu_glued_words_roman_welding_endings_ending(
    welded_counts,
    spaced_counts,
    endings,
  );
  return endings;
}
