export function regex_usfm_marker() {
  "Every mark usfm writes into a line to say what the words beside it are - the backslash, the letters and digits after it, and the star that closes a pair.";
  "The digits are part of the mark rather than the text. A poem's indent is written q1 and q2, and a heading's level s1 and s2, so a reader that stopped at the letters would leave a bare number standing in the verse where the mark used to be.";
  "A plus is allowed at the front because usfm writes one mark inside another that way - a name of God inside a quotation is written plus nd - and the plus belongs to the mark, not to the sentence.";
  "Only lower case letters are looked for, which is what the whole marking language is written in. An upper case letter after a backslash is not a mark and is left alone.";
  let r = /\\\+?[a-z]+[0-9]*\*?/g;
  return r;
}
