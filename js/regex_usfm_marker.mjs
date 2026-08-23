export function regex_usfm_marker() {
  "Every mark usfm writes into a line to say what the words beside it are - the backslash, the letters and digits after it, and the star that closes a pair.";
  "The digits are part of the mark rather than the text. A poem's indent is written q1 and q2, and a heading's level s1 and s2, so a reader that stopped at the letters would leave a bare number standing in the verse where the mark used to be.";
  "A plus is allowed at the front because usfm writes one mark inside another that way - a name of God inside a quotation is written plus nd - and the plus belongs to the mark, not to the sentence.";
  "Only lower case letters are looked for, which is what the whole marking language is written in. An upper case letter after a backslash is not a mark and is left alone.";
  "A HYPHEN IS PART OF THE MARK, because the marks that come in a pair around a stretch of words are named with one - the start of an alignment is zaln hyphen s and its end zaln hyphen e. Stopping at the letters left the hyphen and the letter after it standing in the verse, so a translation published with its words aligned to the Hebrew read back as its own words with a dash and a letter dropped between every one of them.";
  "A star standing on its own is a mark too, and it has to be looked for separately. The star that closes an ordinary pair comes straight after the mark's letters and is caught with them, but the pair-around-a-stretch kind writes its opening as the mark, then what it is about, then a lone star - so the star sits nowhere near any letters and would otherwise be the one piece of the marking left in the sentence.";
  let r = /\\\+?[a-z]+[a-z0-9-]*\*?|\\\*/g;
  return r;
}
