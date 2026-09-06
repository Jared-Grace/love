export function text_punctuation_edges_removed(t) {
  "One word with the marks it picked up from the sentence around it taken off its front and its back - the opening quotation mark, the comma or full stop it was standing in front of - and nothing else touched.";
  "The marks inside a word stay, which is the whole difference between this and the reader beside it that takes punctuation out wherever it stands. Cebuano writes a catch in the voice with a dash in the middle of a word: pag-ila, kaloy-i, kabubut-on, sad-an. Stripped everywhere, those become words nobody writes and no dictionary holds.";
  "It is spelled as one pass over both ends rather than as a loop, so a word wearing several marks at once - a quotation mark then a dash, a comma then a closing quote - comes back bare in one reading.";
  let marks = new RegExp(
    "^[^\\p{L}\\p{M}\\p{N}]+|[^\\p{L}\\p{M}\\p{N}]+$",
    "gu",
  );
  let bare = t.replace(marks, "");
  return bare;
}
