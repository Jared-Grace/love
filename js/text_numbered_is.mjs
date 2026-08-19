import { arguments_assert } from "./arguments_assert.mjs";
import { text_digits_only } from "./text_digits_only.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function text_numbered_is(word) {
  arguments_assert(arguments, 1);
  ("Whether a word has a number counted into it, which is how somebody writes a second one of something rather than how they say what it is.");
  ("The reading to ask when two words are standing for the one value and only one of them can be kept. A word carrying a number was handed out by a pass that needed the word not to clash, so it says which one this is and nothing else; the word beside it without one was chosen by somebody for what the thing is. Keeping the wrong one of those two is how a body ends up full of names nothing can be learned from.");
  ("Where the number sits is not asked. A pass that needs a word not to clash puts its number at the end, but a word with one anywhere in it is a word somebody counted rather than named, and both are the same to a reader.");
  let counted = text_digits_only(word);
  let counted_is = text_empty_not_is(counted);
  return counted_is;
}
