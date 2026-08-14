export function text_accent_marks_removed(text) {
  "The same piece of text with every accent taken off its letters, so that a word written with them and the same word written without them come out as one spelling.";
  "$plain text";
  "the text is a piece of writing being compared against another piece of writing. Nothing here reads a file, reaches anywhere, or runs what it is given.";
  "A letter carrying an accent can be written two ways that look identical and are not the same characters at all - one character standing for the accented letter, or the plain letter followed by a separate mark. Pulling every letter apart into its plain form and its marks first is what makes the two spellings meet, and dropping the marks afterwards is then a single rule rather than a list of accented letters somebody has to keep adding to.";
  let apart = text.normalize("NFD");
  let plain = apart.replace(/\p{Mark}/gu, "");
  let r = plain.normalize("NFC");
  return r;
}
