import { process_record_or_null } from "./process_record_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_split_last } from "./text_split_last.mjs";
import fs from "fs";
import { text_split_space } from "./text_split_space.mjs";
import { text_trim } from "./text_trim.mjs";
export function process_stat_fields_or_null(pid) {
  "What the machine records about a running process, from its state onwards, or nothing when there is no such process or it is not ours to look at.";
  "The record begins with the process's number and then its name in brackets, and the name is whatever the program was called - it may hold spaces and it may hold brackets of its own. Counting words from the front therefore lands on a different thing for a program with a space in its name, which is a wrong answer that looks exactly like a right one. Everything up to the last closing bracket is dropped instead, because the name is the only part that can hold one.";
  "What is left starts at the state letter, so the third thing the machine records is the first thing here. The two that callers want are how long it has had a processor and when it started, and both are counted in the machine's own ticks rather than in seconds.";
  let line = process_record_or_null(pid, "stat");
  if (null_is(line)) {
    return null;
  }
  let tail = text_split_last(line, ")");
  let trimmed = text_trim(tail);
  let fields = text_split_space(trimmed);
  return fields;
}
