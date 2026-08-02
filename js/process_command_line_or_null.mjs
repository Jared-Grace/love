import fs from "fs";
import { path_join } from "./path_join.mjs";
import { text_split } from "./text_split.mjs";
import { text_zero_character } from "./text_zero_character.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function process_command_line_or_null(pid) {
  "The line a running process was started from, or nothing when there is no such process or it is not ours to look at.";
  "The machine keeps the words of that line separated by the character that is nothing at all, and puts one on the end as well. They are joined back with spaces here, which is how a person reads such a line and how it is written down in a report.";
  let path = path_join(["/proc", pid, "cmdline"]);
  function read() {
    let text = fs.readFileSync(path, "utf-8");
    return text;
  }
  let raw = null;
  try {
    raw = read();
  } catch (e) {
    return null;
  }
  let between = text_zero_character();
  let words = text_split(raw, between);
  let said = list_filter(words, text_empty_not_is);
  let line = list_join_space(said);
  return line;
}
