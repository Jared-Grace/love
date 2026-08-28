import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { bible_glyph_word_pair_separator } from "./bible_glyph_word_pair_separator.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_word_draw } from "./bible_glyph_word_draw.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_glyph_verse_draw(words, lookup) {
  "$plain words";
  "$plain lookup";
  "the words are one stored verse and the lookup is a glyph name to character table. Both are data to read and neither runs.";
  "One stored verse of a picture Bible, drawn as the plain text a reader sees.";
  ("A verse is its words with a space between them, and that is the whole rule, because ",
    fn_name("bible_glyph_word_draw"),
    " has already decided everything about what a word looks like. The space is doing more work here than it looks: it is the only thing separating two glyphs that are one word from two glyphs that are two words.");
  ("AND IT IS NOW THE MARK ON THE PAGE TOO. A page used to draw a ring round a group and leave the space ordinary; it draws no ring any more and widens the space instead, so this line and the page are finally saying the same thing in two thicknesses rather than two different things.");
  ("WHICH SPACE GOES IN EACH GAP IS ",
    fn_name("bible_glyph_word_pair_separator"),
    "'s to answer, and it is asked once per pair of neighbouring words. Where a word ending in pictures meets a word starting with pictures the gap is an em space, as wide as the pictures either side of it, because there the gap is the only thing saying they are two words. Everywhere else - and that is most of a verse - a letter or a comma is already saying it, and the space is an ordinary one.");
  ("THE WIDE SPACE IS FOR THE MEDIUM A READER COPIES INTO. Plain text is what gets pasted into a message, where no layout follows it, so the widening has to be a character rather than anything a page could have drawn.");
  let drawn = [];
  let word_before = null;
  let first = true;
  for (let word of words) {
    if (not(first)) {
      let separator = bible_glyph_word_pair_separator(word_before, word);
      list_add(drawn, separator);
    }
    first = false;
    word_before = word;
    let text = bible_glyph_word_draw(word, lookup);
    list_add(drawn, text);
  }
  let joined = text_combine_multiple(drawn);
  return joined;
}
