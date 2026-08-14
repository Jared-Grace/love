import { bible_strong_scope_counts } from "./bible_strong_scope_counts.mjs";
import { gloss_occurrence_sentence } from "./gloss_occurrence_sentence.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";

export function gloss_word_occurrence_sentence(tallies, chapter_code, word) {
  "The sentence about rarity that one interlinear word has earned, or nothing when its counts say nothing worth a reader's time.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN04, chosen from the Bible's own book and chapter numbering. It names a place in the counts and nothing that runs.";
  "This is the whole route from a word to its sentence, in one place, because two callers walk it: the one that hands an author their next passage, and the one that shows what the generator would say for a chapter nobody has written. Written twice they could come apart, and then a sentence shown for review would not be the sentence handed over to be used.";
  "A word the table gives no Strong's number gets nothing back. There is no number to count, so there is no claim to make, and a sentence written anyway would be about a word the counts never saw.";
  let strong = property_get(word, "strong");
  if (not(strong)) {
    let uncounted = null;
    return uncounted;
  }
  let counts = bible_strong_scope_counts(tallies, chapter_code, strong);
  let sentence = gloss_occurrence_sentence(counts);
  return sentence;
}
