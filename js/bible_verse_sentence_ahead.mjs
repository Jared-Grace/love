import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { null_is } from "./null_is.mjs";
import { add_1 } from "./add_1.mjs";
export function bible_verse_sentence_ahead(verse, ahead_after) {
  "How many verses on from this one the sentence it sits in finishes, given that same answer for the verse after it.";
  "Zero means the sentence finishes inside this verse, so a passage cut here is cut whole. One means the verse after it finishes the sentence, and so on - which is exactly the number of extra verses a passage cut here is carried on by.";
  "Null means it cannot be told from here: either nothing after this verse was known to finish a sentence, or the verse after it was never read. A guess would be worse than nothing, because the whole point of counting these is to find out how far the carrying goes, and a position that cannot answer must be left out of the count rather than answered with the edge of what was read.";
  arguments_assert(arguments, 2);
  let text = property_get(verse, "text");
  let ended = bible_verse_end_is(text);
  if (ended) {
    let r = 0;
    return r;
  }
  let unknown = null_is(ahead_after);
  if (unknown) {
    return null;
  }
  let ahead = add_1(ahead_after);
  return ahead;
}
