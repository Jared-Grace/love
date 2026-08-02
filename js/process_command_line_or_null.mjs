import { process_record_or_null } from "./process_record_or_null.mjs";
import { null_is } from "./null_is.mjs";
import fs from "fs";
import { text_split } from "./text_split.mjs";
import { text_zero_character } from "./text_zero_character.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function process_command_line_or_null(pid) {
  "The line a running process was started from, or nothing when there is no such process or it is not ours to look at.";
  "The machine keeps the words of that line separated by the character that is nothing at all, and puts one on the end as well. They are joined back with spaces here, which is how a person reads such a line and how it is written down in a report.";
  let raw = process_record_or_null(pid, "cmdline");
  if (null_is(raw)) {
    return null;
  }
  let between = text_zero_character();
  let words = text_split(raw, between);
  let said = list_filter(words, text_empty_not_is);
  let line = list_join_space(said);
  return line;
}
