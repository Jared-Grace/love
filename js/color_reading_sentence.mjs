import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { number_text_floored } from "./number_text_floored.mjs";
import { text_to } from "./text_to.mjs";
import { less_than } from "./less_than.mjs";
export function color_reading_sentence(subject, measured, floor, places) {
  arguments_assert(arguments, 4);
  ("one measurement of a colour, written as a sentence that says what it came to and how that stands against the floor for the job. A colour that cannot be measured at all is recorded as that rather than passed over, because a misspelled colour would otherwise sit in a palette forever wearing the appearance of having been checked.");
  ("THE SENTENCE IS THE UNIT A RATCHET HOLDS, WHICH IS WHY THE FIGURE IS FLOORED INTO IT RATHER THAN CARRIED BESIDE IT. A baseline of names can only refuse a name it has not seen; putting the figure inside the name is what lets a shrink-only list of sentences refuse a changed VALUE. Flooring is what leaves the last digit room to drift without anybody being told - a reading nobody could see must not be able to turn a gate red.");
  ("Asked in one place because two palettes now write these and a third will. Two copies of this would drift in the wording, and a wording drift reads to the ratchet exactly like a colour that moved: every sentence at once goes missing and every sentence at once arrives new.");
  let unreadable = null_is(measured);
  if (unreadable) {
    let r = subject + ": cannot be measured";
    return r;
  }
  let figure = number_text_floored(measured, places);
  let floor_text = text_to(floor);
  let short = less_than(measured, floor);
  let verdict = short ? ", short of " : ", clears ";
  let sentence = subject + ": " + figure + verdict + floor_text;
  return sentence;
}
