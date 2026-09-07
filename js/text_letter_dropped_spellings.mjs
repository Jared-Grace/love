import { arguments_assert } from "./arguments_assert.mjs";
import { text_size } from "./text_size.mjs";
import { range } from "./range.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
export function text_letter_dropped_spellings(text) {
  "Every way of writing one word with a single letter taken out of it, one spelling per place a letter could be removed.";
  "This is the cheap half of asking which words are one edit apart. Two words a single edit apart always share one of these spellings - swap a letter and both lose the same neighbours around it, add a letter and the longer word drops back to the shorter one - so gathering words under these spellings finds every near pair without ever comparing a word to one that is nowhere near it.";
  "Sharing a spelling is not the same as being one edit apart, and this does not pretend otherwise. Two letters that changed places share one too, and that is two edits. What comes back is a way of finding the few words worth measuring, never a measurement.";
  "A word of one letter gives back the empty spelling, and a word of none gives back nothing. Both are the honest answer rather than a case to guard against: there is exactly one way to take a letter out of a one-letter word, and no way at all to take one out of nothing.";
  "$plain text";
  "the word to take a letter out of, in every place it has one.";
  arguments_assert(arguments, 1);
  let size = text_size(text);
  let places = range(size);
  function place_dropped(place) {
    let before = text.slice(0, place);
    let after_place = add(place, 1);
    let after = text.slice(after_place);
    let dropped = before + after;
    return dropped;
  }
  let spellings = list_map(places, place_dropped);
  return spellings;
}
