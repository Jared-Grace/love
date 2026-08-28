import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { bible_glyph_word_pair_separator } from "./bible_glyph_word_pair_separator.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { bible_glyph_word_draw_html } from "./bible_glyph_word_draw_html.mjs";
export function bible_glyph_verse_draw_html(parent, words, lookup) {
  "$plain words";
  "$plain lookup";
  "the words are one stored verse and the lookup is a glyph name to character table. Both are data to draw and neither runs.";
  "One stored verse of a picture Bible, drawn onto a page as its pictures.";
  ("A verse is its words with a space between them, exactly as in ",
    fn_name("bible_glyph_verse_draw"),
    ", because everything about what a word looks like has already been decided a level down.");
  ("THE SPACE IS THE WHOLE OF THE GROUPING MARK, and it used to be only half of it. A page drew a ring round any group of several glyphs and the space was left ordinary; the ring has been retired and the space widened by ",
    fn_name("bible_glyph_word_separator"),
    " instead, so what says two glyphs are one word is that they touch, and what says they are two words is that they do not. The reason is in that function and comes down to a gap being a mark every reader already knows and a ring being one this Bible would have to teach.");
  ("WHICH GAPS ARE WIDENED IS ASKED PAIR BY PAIR AND ANSWERED BY ",
    fn_name("bible_glyph_word_pair_separator"),
    ", rather than every gap being widened as it once was. Only a word ending in pictures beside a word starting with pictures can be misread as one word, and that is a small minority of the gaps in a verse; the English between the pictures is set like English again.");
  ("IT ALSO ENDS A DISAGREEMENT BETWEEN THE TWO DRAWERS. Plain text never could draw a ring, so it has always grouped by adjacency alone, which means a reader meeting this Bible in a terminal and again on a page was being taught two different grammars for one thing. There is now one grammar, written with one character, and the two drawers put the same thing on the screen.");
  ("THE GAP IS A CHARACTER AND NO LONGER A STYLE AS WELL, and the swap is the reason this page and plain text now emit the same bytes. A reader copies a verse out of here and pastes it into a message, and a width set in a style does not travel while a character does, so the width had to move into the character. It also had to: the style used was word-spacing, and word-spacing widens a short named list of word separators that an em space is not on, so the moment the character changed the style became a silent no-op. One mechanism doing the whole job beats two where one of them quietly does nothing.");
  ("The space is written as a piece of text rather than left to the page's own spacing between elements, because a page collapses and re-flows the gaps between elements by its own rules and would be free to put a line break where this Bible put a word boundary - or to put none where it put a space.");
  let word_before = null;
  let first = true;
  for (let word of words) {
    if (not(first)) {
      let text = bible_glyph_word_pair_separator(word_before, word, lookup);
      html_span_text_content(parent, text);
    }
    first = false;
    word_before = word;
    bible_glyph_word_draw_html(parent, word, lookup);
  }
}
