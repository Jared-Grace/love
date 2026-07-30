import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function text_lines_working(text) {
  "The lines of a piece of writing with the blank ones dropped and the indentation";
  "taken off each of the rest.";
  "Written for holding one body of code beside another. Indentation says how deeply";
  "a line sits rather than what it does, so the same line of work written one level";
  "further in has to read as the same line - otherwise moving a block inside a loop";
  "would hide that it is the block already written somewhere else.";
  let lines = text_split_newline(text);
  let trimmed = list_map(lines, text_trim);
  let working = list_filter(trimmed, text_empty_not_is);
  return working;
}
