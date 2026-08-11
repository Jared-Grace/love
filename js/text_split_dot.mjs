import { text_dot } from "./text_dot.mjs";
import { text_split } from "./text_split.mjs";
export function text_split_dot(s) {
  "The pieces of a text either side of every dot in it.";
  let split = text_split(s, text_dot());
  return split;
}
