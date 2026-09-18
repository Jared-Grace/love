import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_identifier_segments } from "./text_identifier_segments.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export function text_identifier_whole_is(text) {
  arguments_assert(arguments, 1);
  ("whether the whole of a piece of text is one unbroken run of the characters a name may be made of, and nothing besides");
  ("THE WHOLE OF IT, WHICH IS THE OPPOSITE QUESTION TO WHETHER A NAME IS IN THERE SOMEWHERE. Asking whether text holds a name says yes to a sentence, and every reader that wanted to know whether it had been handed a name and not a phrase would have had to say so in its own words.");
  ("Cut into runs rather than read character by character, because the cutting is already written and already knows which characters a name is made of - so there is one answer to that in the repo and this cannot drift from it.");
  ("Empty text is not a name. Nothing cuts into no runs at all, so the count settles that on its own without a line saying so.");
  ("A run of digits is a name by this test, because a digit is a character a name may be made of. This answers about the characters, not about what the machine would accept as a name at the front of a program - a reader that needs the stricter question asks the parser, which is the only thing that truly knows.");
  let segments = text_identifier_segments(text);
  let count = list_size(segments);
  let one = equal(count, 1);
  if (one) {
    let first = segments[0];
    let identifier = property_get(first, "identifier");
    return identifier;
  }
  return false;
}
