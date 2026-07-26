export function memory_index_head_tidy(head) {
  "The part of an index line that comes before its first link, with the separator it was in the middle of writing taken off, so a rebuilt line does not end up carrying two of them.";
  let right = text_trim_right(head);
  let semi = ";";
  let ends = text_ends_with(right, semi);
  if (ends) {
    let without = right.slice(0, -1);
    let trimmed = text_trim_right(without);
    return trimmed;
  }
  return right;
}
