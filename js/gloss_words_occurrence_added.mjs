import { gloss_word_occurrence_sentence } from "./gloss_word_occurrence_sentence.mjs";
import { list_map } from "./list_map.mjs";
import { null_is } from "./null_is.mjs";
import { object_merge } from "./object_merge.mjs";

export function gloss_words_occurrence_added(tallies, chapter_code, words) {
  "One verse's interlinear words, each given the sentence about rarity its counts have earned.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN04, chosen from the Bible's own book and chapter numbering. It names a place in the counts and nothing that runs.";
  "The sentence is handed over already written, in the same breath as the parsing and the transliteration, because it belongs to the same class as those: a fact about the word that was worked out for the author rather than by them. An author who is given the sentence cannot get the number wrong, and one who is given the counts still can.";
  "A word that has earned nothing comes back exactly as it arrived, with no empty field standing in for the sentence it did not get. An author reading the passage should see a sentence where there is one to see and nothing at all where there is not, rather than having to tell an absence from a blank.";
  function word_read(word) {
    let occurrence = gloss_word_occurrence_sentence(tallies, chapter_code, word);
    if (null_is(occurrence)) {
      return word;
    }
    let added = object_merge(word, {
      occurrence,
    });
    return added;
  }
  let added = list_map(words, word_read);
  return added;
}
