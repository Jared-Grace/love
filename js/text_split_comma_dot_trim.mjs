import { list_map } from "./list_map.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
export function text_split_comma_dot_trim(text_comma) {
  "One comma-joined word taken apart into the words it holds with the space around each one taken off";
  "The trimming is what makes a list typed with a space after each comma arrive as the same list as one typed without and every sweep that takes a list of names wanted that separately until now";
  let names_split = text_split_comma_dot(text_comma);
  let names = list_map(names_split, text_trim);
  return names;
}
