import { property_set } from "./property_set.mjs";
export function gloss_word_met_note(said, folded, word, explain, verse) {
  "Keep a note, while reading down a chapter, that this word has been explained here - its spelling, the verse it last stood in, and the last thing said about it.";
  "$plain said";
  "what is said is the growing note for the whole chapter, one entry for each word met, written into as the reading goes.";
  "$plain folded";
  "the folded spelling is the word with its capitals taken off, so a word opening a verse and the same word inside one are one word.";
  "The latest explanation replaces the one before it, because a sentence sending the reader back means the explanation they have just read, and that is the nearest one above rather than the first in the chapter. Reading runs downward, so whatever is in the note when a pointing sentence is reached is that nearest one.";
  "Only one explanation is ever kept, which is what lets an address be written at all. Keeping every different wording instead made most words unaddressable, because a common word is explained again and again in slightly different words and no count of them could say which was meant.";
  "Nothing is lost by replacing. An address still has to catch exactly one explanation at the verse it names, and has to catch the very one kept here, so a word explained two ways in the same verse is still refused.";
  let latest = {
    word,
    verse,
    explains: [explain],
  };
  property_set(said, folded, latest);
}
