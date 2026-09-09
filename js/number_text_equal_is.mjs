import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { equal } from "./equal.mjs";
export function number_text_equal_is(number, text) {
  arguments_assert(arguments, 2);
  ("Whether a count is the same count as one written down as text.");
  ("A command line hands every argument over as text, so a reading that takes a length and then compares it with a length it worked out is comparing a number with a word. Asked strictly the answer is no every time, and a walk whose whole point is to find the matches then finds none and says so calmly - the shape of a check that cannot disagree, which reads exactly like a clean result.");
  ("The text is turned into a number rather than the number into text, so text that is not a number at all is refused out loud by the reader below rather than quietly failing to match.");
  let wanted = number_from_text(text);
  let same_is = equal(number, wanted);
  return same_is;
}
