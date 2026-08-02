import fs from "fs";
import { text_split_space } from "./text_split_space.mjs";
import { list_first } from "./list_first.mjs";
import { number_from_text } from "./number_from_text.mjs";
export function machine_uptime_seconds() {
  "How long this machine has been running, in seconds.";
  "Needed to say how long a process has been alive: the machine records when each one started as a count of ticks since it came up, never as a moment of the day, so the two only make an age together.";
  let text = fs.readFileSync("/proc/uptime", "utf-8");
  let pieces = text_split_space(text);
  let first = list_first(pieces);
  let seconds = number_from_text(first);
  return seconds;
}
