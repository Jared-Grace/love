export function text_column(s, width) {
  "The text with spaces added on the right until it fills a column of the given width, so lines printed one under another line up. Text already at or past the width is handed back untouched, because cutting a word to keep a column straight loses the thing the column was showing.";
  let padded = s.padEnd(width, " ");
  return padded;
}
