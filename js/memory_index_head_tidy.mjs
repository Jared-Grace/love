import { text_trim } from "./text_trim.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_size } from "./text_size.mjs";
import { text_take } from "./text_take.mjs";
import { subtract } from "./subtract.mjs";
export function memory_index_head_tidy(head) {
  "The part of an index line that comes before its first link, with the separator it was in the middle of writing taken off, so a rebuilt line does not end up carrying two of them.";
  "An index line starts at the left margin, so trimming both ends and trimming the right one are the same thing here.";
  let squeezed = text_trim(head);
  let semi = ";";
  let ends = text_ends_with(squeezed, semi);
  if (ends) {
    let size = text_size(squeezed);
    let shorter = subtract(size, 1);
    let without = text_take(squeezed, shorter);
    let trimmed = text_trim(without);
    return trimmed;
  }
  return squeezed;
}
