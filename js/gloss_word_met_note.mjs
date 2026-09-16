import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
export function gloss_word_met_note(said, folded, word, explain, verse) {
  "Keep a note, while reading down a chapter, that this word has been explained here - its spelling, the verse it first stood in, and every different thing said about it so far.";
  "$plain said";
  "what is said is the growing note for the whole chapter, one entry for each word met, written into as the reading goes.";
  "$plain folded";
  "the folded spelling is the word with its capitals taken off, so a word opening a verse and the same word inside one are one word.";
  "Every different explanation is kept rather than only the first, because the count is what decides later whether the word can be pointed at. One meaning can be addressed; two cannot, and a note keeping only the first would have said it could.";
  "The verse kept is the first one, because that is where a reader met the meaning, and a later occurrence saying the same thing is the same meaning rather than another one to choose between.";
  let met = property_get_or_null(said, folded);
  if (null_is(met)) {
    let first = {
      word,
      verse,
      explains: [explain],
    };
    property_set(said, folded, first);
    return;
  }
  let explains = property_get(met, "explains");
  list_add_unique(explains, explain);
}
