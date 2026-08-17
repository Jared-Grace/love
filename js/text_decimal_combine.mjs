import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
export function text_decimal_combine(whole, after) {
  arguments_assert(arguments, 2);
  ("a decimal number written out: the whole part, a point, and what comes after it");
  ("Built as text and never as a number, because what is wanted is the writing rather than the value. A whole part of 5 with a 0 after the point is the text 5.0, and a number would have thrown that 0 away before it could be read.");
  ("Both halves are turned into text here rather than by every caller. Each caller held two numbers and had to say so twice over - once to make each into text, once to join the two - and those lines together said nothing more than this one word does. Either half may arrive as text already, and asking for the text of text gives the same text back.");
  let whole_text = text_to(whole);
  let after_text = text_to(after);
  let r = text_combine_multiple([whole_text, ".", after_text]);
  return r;
}
