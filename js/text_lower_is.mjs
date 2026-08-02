import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { equal } from "./equal.mjs";
export function text_lower_is(text) {
  arguments_assert(arguments, 1);
  ("Whether this text is already written all in small letters.");
  ("Asked by the lessons that sort words, where a word with a capital in it sorts");
  ("away from the same word without one and so cannot be used as an example. The");
  ("way to ask is to put the text into small letters and see whether anything");
  ("moved, and the moved copy is never wanted - only the answer.");
  let lowered = text_lower_to(text);
  let same = equal(text, lowered);
  return same;
}
