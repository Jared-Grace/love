import { fn_name } from "./fn_name.mjs";
import { bible_glyph_word_draw } from "./bible_glyph_word_draw.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_verse_draw(words, lookup) {
  "$plain words";
  "$plain lookup";
  "the words are one stored verse and the lookup is a glyph name to character table. Both are data to read and neither runs.";
  "One stored verse of a picture Bible, drawn as the plain text a reader sees.";
  ("A verse is its words with a space between them, and that is the whole rule, because ",
    fn_name("bible_glyph_word_draw"),
    " has already decided everything about what a word looks like. The space is doing more work here than it looks: it is the only thing separating two glyphs that are one word from two glyphs that are two words.");
  ("AND IT IS NOW THE MARK ON THE PAGE TOO. A page used to draw a ring round a group and leave the space ordinary; it draws no ring any more and widens the space instead, so this line and the page are finally saying the same thing in two thicknesses rather than two different things.");
  let drawn = [];
  for (let word of words) {
    let text = bible_glyph_word_draw(word, lookup);
    list_add(drawn, text);
  }
  let joined = drawn.join(" ");
  return joined;
}
