import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
export function text_without_ending(text, ending) {
  arguments_assert(arguments, 2);
  ("$plain text");
  ("$plain ending");
  ("The text with a known ending taken off, or the text unchanged where it does not end that way.");
  ("★ IT HANDS BACK THE WHOLE TEXT RATHER THAN REFUSING WHEN THE ENDING IS NOT THERE, because the caller who has already tested for the ending and the caller who is taking off whatever may be there both want the same answer. Refusing would make the ordinary case two calls; cutting the length off without looking would quietly shorten a name that never held the ending at all, and a file called bsb_PSA_133 would come back as bsb_PSA.");
  let ends = text_ends_with(text, ending);
  if (not(ends)) {
    return text;
  }
  let keep = subtract(text.length, ending.length);
  let shorter = text.slice(0, keep);
  return shorter;
}
