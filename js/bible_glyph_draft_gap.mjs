export function bible_glyph_draft_gap() {
  "The mark a table draft puts where a word has no glyph yet.";
  "It is not a glyph and is deliberately not in the vocabulary, because it says something about the TABLE rather than about the text. A glyph means a word; this means nobody has chosen a picture for this word.";
  "It is spelled as a low dot rather than a blank so that the gaps can be counted by eye. A blank would let a long run of undrawn words read as ordinary spacing, which is exactly the impression a draft exists to prevent.";
  let gap = "·";
  return gap;
}
