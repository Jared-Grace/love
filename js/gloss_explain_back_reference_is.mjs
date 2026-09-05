import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_split } from "./text_split.mjs";
import { text_letters_is } from "./text_letters_is.mjs";
import { not } from "./not.mjs";
import { list_any } from "./list_any.mjs";
import { gloss_back_reference_markers } from "./gloss_back_reference_markers.mjs";
export function gloss_explain_back_reference_is(explain) {
  "Whether an explanation points the reader further up the passage instead of saying the thing itself.";
  "This needs no dictionary and no reading of the word being explained, which is why it reaches the whole store rather than the corner some outside reference happens to cover. What it finds is certain in a way a disagreement with a dictionary never is: the sentence is not a wrong explanation, it is an absent one.";
  "The wording is given a space at the front before anything is looked for in it, because every phrase looked for carries the space that has to stand before it and one opening a sentence has nothing in front of it to find.";
  "A phrase has to end where it ends, and a letter standing straight after it means it never really occurred. The phrase ‘as previous’ was written to catch ‘same as previous’, and it also caught an explanation saying the old lexicons give a word as previously - which is the opposite of an absent explanation, it is the thing itself said properly. The claim above is that what this finds is certain, and a claim of certainty has to be paid for: without this check the gate turned a correct gloss red and would have had somebody rewrite it to suit a fault in the reader.";
  "Only the end is guarded and not the beginning, because every phrase already carries the space that must stand before it and the wording is given one to find.";
  let lower = text_lower_to(explain);
  let padded = text_combine(" ", lower);
  ("Every occurrence is looked at and not merely the first one, because a wording may say the innocent one before it says the real one, and stopping at the first would let the second through unread.");
  function marker_found(phrase) {
    let pieces = text_split(padded, phrase);
    function word_ended_is(piece) {
      let next = piece.slice(0, 1);
      let letter = text_letters_is(next);
      let ended = not(letter);
      return ended;
    }
    let after_each = pieces.slice(1);
    let found = list_any(after_each, word_ended_is);
    return found;
  }
  let markers = gloss_back_reference_markers();
  let pointing = list_any(markers, marker_found);
  return pointing;
}
