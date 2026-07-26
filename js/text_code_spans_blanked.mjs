export function text_code_spans_blanked(text) {
  "The same text with everything written between backticks replaced by spaces, one space per character, so every other character keeps the position it had.";
  "Kept apart from the version that takes the quotations out: taking them out moves everything after them, and anything that reports a position has to be able to point back into the text it was handed. Reading a position off shortened text and applying it to the original is a bug that looks right in every example short enough to check by eye.";
  let pattern = /`[^`]*`/g;
  function inner(span) {
    let size = text_size(span);
    let blanks = " ".repeat(size);
    return blanks;
  }
  let blanked = text.replace(pattern, inner);
  return blanked;
}
