import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_pixels_text(value) {
  arguments_assert(arguments, 1);
  ("a measured number written the way a style has to be given it: the number with px after it");
  ("Anything measured off the page comes back as a bare number and anything set back onto the page has to carry its unit, so the two words meet here rather than at every place a measurement makes the round trip.");
  let text = text_combine(value, "px");
  return text;
}
