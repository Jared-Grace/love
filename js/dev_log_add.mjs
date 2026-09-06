import { arguments_assert } from "./arguments_assert.mjs";
import { date_time_zone_now_iso } from "./date_time_zone_now_iso.mjs";
import { object_merge } from "./object_merge.mjs";
import { json_to } from "./json_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { file_append } from "./file_append.mjs";
export async function dev_log_add(f_path, entry) {
  arguments_assert(arguments, 2);
  ("Writes one thing a page sent down, as a single line in a named file. The time is put on here rather than by the caller, because the caller is a phone and its clock is not this machine's.");
  ("One line each, so several sessions writing at once each land a whole entry: append is serialized by the operating system, and a whole line is the unit that survives that.");
  ("What is in the entry is entirely the caller's business. This knows only that it is a thing to be written down and read back later, which is why the path is handed in rather than decided here - errors a page hit and judgements a person made are the same act of writing down and are not the same file.");
  let time = date_time_zone_now_iso();
  let stamped = {
    time,
  };
  object_merge(stamped, entry);
  let line = json_to(stamped);
  let text = text_combine(line, "\n");
  await file_append(f_path, text);
  let r = {
    written: true,
  };
  return r;
}
