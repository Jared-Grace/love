import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_split } from "./text_split.mjs";
import { text_letters_is } from "./text_letters_is.mjs";
import { not } from "./not.mjs";
import { list_any } from "./list_any.mjs";
import { gloss_back_reference_markers } from "./gloss_back_reference_markers.mjs";
import { gloss_back_reference_wordings } from "./gloss_back_reference_wordings.mjs";
import { list_includes } from "./list_includes.mjs";
import { or } from "./or.mjs";
export function gloss_explain_back_reference_is(explain) {
  "Whether an explanation points the reader further up the passage instead of saying the thing itself.";
  "This needs no dictionary and no reading of the word being explained, which is why it reaches the whole store rather than the corner some outside reference happens to cover. What it finds is certain in a way a disagreement with a dictionary never is: the sentence is not a wrong explanation, it is an absent one.";
  "It asks the question twice over, because there are two ways of being sure and neither covers the other. A phrase can be enough on its own - nothing that says ‘see above’ is explaining anything, wherever in the sentence it stands. And a phrase can be nowhere near enough - the wording that says a word is the one that came above may stop there, or may go on to teach how the following words make the action passive, and the phrase is identical in both. So the first question is asked of the pieces and the second of the whole.";
  "The wording is given a space at the front before anything is looked for in it, because every phrase looked for carries the space that has to stand before it and one opening a sentence has nothing in front of it to find.";
  "A phrase has to end where it ends, and a letter standing straight after it means it never really occurred. The phrase ‘as previous’ was written to catch ‘same as previous’, and it also caught an explanation saying the old lexicons give a word as previously - which is the opposite of an absent explanation, it is the thing itself said properly. The claim above is that what this finds is certain, and a claim of certainty has to be paid for: without this check the gate turned a correct gloss red and would have had somebody rewrite it to suit a fault in the reader.";
  "Only the end is guarded and not the beginning, because every phrase already carries the space that must stand before it and the wording is given one to find.";
  "The whole-wording question is asked of the wording as it was handed over, not of the lowered copy, because a wording that has to match entire has nothing to gain from being made easier to match. Every phrase on that list is a sentence somebody wrote down complete, capital letters and full stop and all.";
  arguments_assert(arguments, 1);
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
  let phrased = list_any(markers, marker_found);
  let wordings = gloss_back_reference_wordings();
  let whole = list_includes(wordings, explain);
  let pointing = or(phrased, whole);
  return pointing;
}
