import { list_map_filter } from "./list_map_filter.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function text_lines_working(text) {
  "The lines of a piece of writing with the blank ones dropped and the indentation";
  "taken off each of the rest.";
  "Written for holding one body of code beside another. Indentation says how deeply";
  "a line sits rather than what it does, so the same line of work written one level";
  "further in has to read as the same line - otherwise moving a block inside a loop";
  "would hide that it is the block already written somewhere else.";
  let lines = text_split_newline(text);
  let working = list_map_filter(lines, text_trim, text_empty_not_is);
  return working;
}
