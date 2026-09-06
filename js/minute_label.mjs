import { arguments_assert } from "./arguments_assert.mjs";
import { text_from_number } from "./text_from_number.mjs";
export function minute_label(minute) {
  arguments_assert(arguments, 1);
  ("A minute of the hour written the way a clock face writes it, always two figures: 4 becomes '04', and 24 stays '24'.");
  ("The leading nought is not decoration. '4:4' reads as a broken time, while '4:04' reads as a time, and a reader should never have to work out for themselves which of the two figures went missing.");
  let t = text_from_number(minute);
  let padded = t.padStart(2, "0");
  return padded;
}
