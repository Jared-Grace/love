import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
export function text_quoted_names(value) {
  "Every double-quoted lower-case name in a piece of text, in the order it appears. Reading a list out of source written in another language is a small job that only needs the names, and matching the quotes is the whole of it.";
  let pattern = /"([a-z_][a-z0-9_]*)"/g;
  let found = text_regex_first_groups(value, pattern);
  return found;
}
