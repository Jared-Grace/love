import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_chapters_words_glosses } from "./gloss_chapters_words_glosses.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapters_word_glosses(fn, word) {
  "$plain word";
  "Every meaning one gloss store has given a single English word, tallied by how often each was used.";
  "★ THIS IS HOW A CONVENTION IS READ OFF THE STORE RATHER THAN DECLARED OVER IT. A store written by several hands over months already answers what it calls a word; asking it is a reading, while deciding afresh is a second opinion that then has to be reconciled with everything already written. An author about to gloss a word the store has met before should ask here first.";
  "The tally is the point rather than the list of meanings. One meaning used two hundred times and a second used once is a settled convention with a slip in it, and two used a hundred times each is a split the store has never resolved - and those two look identical if the meanings are only listed.";
  "The word is matched in small letters, because a capital belongs to the sentence rather than to the word, and the same word opening a verse and sitting inside one is one word.";
  "One word is asked as a list of one, because a walk of the store looking for several words is the same walk looking for one and there is nothing here a list of one does differently. What is left is the answer's shape: a reader that came for one word is handed its tally rather than a holder to look it up in.";
  let lowered = text_lower_to(word);
  let asked = [word];
  let many = await gloss_chapters_words_glosses(fn, asked);
  let words = property_get(many, "words");
  let found = property_get(words, lowered);
  let r = {
    chapters: property_get(many, "chapters"),
    used: property_get(found, "used"),
    tally: property_get(found, "tally"),
  };
  return r;
}
