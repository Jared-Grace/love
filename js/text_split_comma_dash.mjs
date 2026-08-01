import { text_comma_dash_separators } from "./text_comma_dash_separators.mjs";
import { text_split_multiple } from "./text_split_multiple.mjs";
export function text_split_comma_dash(t) {
  let delimiters = text_comma_dash_separators();
  let split = text_split_multiple(t, delimiters);
  return split;
}
