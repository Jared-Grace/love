import { text_and_empty_not_is } from "./text_and_empty_not_is.mjs";
import { not } from "./not.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
export function text_split_comma_or_empty(t) {
  "No text at all means no parts, which is a different answer from one empty part.";
  "A command line leaving an argument off, or passing an empty word for it, is";
  "saying the first, and splitting nothing would say the second.";
  let some = text_and_empty_not_is(t);
  let none = not(some);
  if (none) {
    let r = [];
    return r;
  }
  let split = text_split_comma(t);
  return split;
}
