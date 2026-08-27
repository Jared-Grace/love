export function regex_usfm_heading_line() {
  "A whole line of usfm that is a heading - the mark that opens it and everything it says.";
  "A heading is a line and not a stretch of words, which is what makes it findable this way and unfindable any other. It has no closing mark to look for, the way a footnote does, and it ends where its line ends rather than where the next mark begins - so a heading holding a mark of its own, which a cross reference always does, cannot be found by reading up to the next backslash.";
  "The whole line goes, mark and words together, the way a footnote goes. A heading is a translator writing to the reader - a summary of what follows, a note of where the parallel passage is, the name of who is speaking - and none of it is words of the book. Taking the mark alone and leaving the words is what put A Psalm of David and The First Day on the end of the verse standing above them.";
  "Only the marks whose line is a heading are named, and the poetry and paragraph marks are deliberately left out. Those carry real words of the verse, so a reader that swept them the same way would delete scripture. It is the difference between a line that says what is coming and a line that is what is coming.";
  "The section marks carry a level and the major section marks carry one too, so the digit is part of what is looked for. The longer names are tried before the shorter ones they begin with, so that a section reference is not read as a section and its r left standing.";
  let r =
    /^\\(?:sr|sp|s[1-5]?|ms[1-3]?|mr|qa|cl|cd|iex|r|d)(?:[ \t][^\n]*)?\n?/gm;
  return r;
}
