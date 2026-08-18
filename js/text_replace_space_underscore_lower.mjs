import { text_replace_space_underscore } from "./text_replace_space_underscore.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function text_replace_space_underscore_lower(t) {
  "The same text in lower case with every space turned into an underscore - the shape a phrase takes when it becomes a key, a file name or a folder name.";
  let lower = text_lower_to(t);
  let rl = text_replace_space_underscore(lower);
  return rl;
}
