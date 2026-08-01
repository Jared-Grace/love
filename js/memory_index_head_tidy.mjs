import { string_skip_end } from "./string_skip_end.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export function memory_index_head_tidy(head) {
  "The part of an index line that comes before its first link, with the separator it was in the middle of writing taken off, so a rebuilt line does not end up carrying two of them.";
  "An index line starts at the left margin, so trimming both ends and trimming the right one are the same thing here.";
  let squeezed = text_trim(head);
  let semi = ";";
  let ends = text_ends_with(squeezed, semi);
  if (ends) {
    let without = string_skip_end(squeezed, 1);
    let trimmed = text_trim(without);
    return trimmed;
  }
  return squeezed;
}
