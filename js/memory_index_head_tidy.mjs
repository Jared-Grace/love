import { string_skip_end } from "./string_skip_end.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
export function memory_index_head_tidy(head) {
  "The part of an index line that comes before its first link, with the separator it was in the middle of writing taken off, so a rebuilt line does not end up carrying two of them.";
  "An index line starts at the left margin, so trimming both ends and trimming the right one are the same thing here.";
  "A comma counts as much as a semicolon here. A real line read plain twin, and kept that comma standing in front of the semicolon this puts back, which is a line that says the separator twice.";
  "The long dash is deliberately not taken off, because it is the mark that opens a hook rather than one that joins a list, and the caller reads it to decide that the links it is about to write are the whole hook.";
  let squeezed = text_trim(head);
  let joiners = [";", ","];
  let ends = text_ends_with_any(squeezed, joiners);
  if (ends) {
    let without = string_skip_end(squeezed, 1);
    let trimmed = text_trim(without);
    return trimmed;
  }
  return squeezed;
}
