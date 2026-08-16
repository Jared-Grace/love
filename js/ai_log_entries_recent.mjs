import { ai_log_entries } from "./ai_log_entries.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_take_last } from "./list_take_last.mjs";
import { number_from_text } from "./number_from_text.mjs";
export async function ai_log_entries_recent(count) {
  "$plain count";
  "The last few commands run through the seam, read back as records, newest last.";
  "Asked for by count rather than read off the end of the file, because the file is one line per command and a reader wanting the last few of them wants records, not a number of characters. Cutting by characters lands mid-line, and the torn line is the newest one - the very one that was being looked at.";
  "How many is asked for rather than fixed, because the question is usually either the last one or the last few dozen, and a fixed number is wrong in one direction or the other every time.";
  arguments_assert(arguments, 1);
  let wanted = number_from_text(count);
  let entries = await ai_log_entries();
  let recent = list_take_last(entries, wanted);
  return recent;
}
