import { text_comma_dot_separators } from "./text_comma_dot_separators.mjs";
import { text_split_multiple } from "./text_split_multiple.mjs";
export function text_split_comma_dot(t) {
  let delimiters = text_comma_dot_separators();
  let split = text_split_multiple(t, delimiters);
  return split;
}
