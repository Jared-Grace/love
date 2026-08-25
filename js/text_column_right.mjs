export function text_column_right(s, width) {
  "The text with spaces added on the left until it fills a column of the given width, so lines printed one under another line up at their right-hand end. Text already at or past the width is handed back untouched, for the same reason its left-hand sibling hands it back: cutting the thing to keep the column straight loses what the column was showing.";
  "THIS IS THE ONE NUMBERS WANT. A column of counts read down the page is read by its last digit - ones under ones, tens under tens - so four beside two hundred and ninety six only lines up when the padding goes on the front. Its sibling pads the back, which is what a name or a word wants, and using the wrong one of the two is not an error anything can catch: the line still prints, it just stops being a column.";
  let padded = s.padStart(width, " ");
  return padded;
}
