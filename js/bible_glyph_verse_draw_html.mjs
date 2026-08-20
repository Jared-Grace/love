import { bible_glyph_word_gap_extra } from "./bible_glyph_word_gap_extra.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { not } from "./not.mjs";
import { bible_glyph_word_draw_html } from "./bible_glyph_word_draw_html.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
export function bible_glyph_verse_draw_html(parent, words, lookup) {
  "$plain words";
  "$plain lookup";
  "the words are one stored verse and the lookup is a glyph name to character table. Both are data to draw and neither runs.";
  "One stored verse of a picture Bible, drawn onto a page as its pictures.";
  ("A verse is its words with a space between them, exactly as in ",
    fn_name("bible_glyph_verse_draw"),
    ", because everything about what a word looks like has already been decided a level down.");
  ("THE SPACE IS THE WHOLE OF THE GROUPING MARK, and it used to be only half of it. A page drew a ring round any group of several glyphs and the space was left ordinary; the ring has been retired and the space widened by ",
    fn_name("bible_glyph_word_gap_extra"),
    " instead, so what says two glyphs are one word is that they touch, and what says they are two words is that they do not. The reason is in that function and comes down to a gap being a mark every reader already knows and a ring being one this Bible would have to teach.");
  ("IT ALSO ENDS A DISAGREEMENT BETWEEN THE TWO DRAWERS. Plain text never could draw a ring, so it has always grouped by adjacency alone, which means a reader meeting this Bible in a terminal and again on a page was being taught two different grammars for one thing. There is now one grammar and the page simply draws it more clearly.");
  ("The space is written as a piece of text rather than left to the page's own spacing between elements, because a page collapses and re-flows the gaps between elements by its own rules and would be free to put a line break where this Bible put a word boundary - or to put none where it put a space.");
  let first = true;
  for (let word of words) {
    if (not(first)) {
      let gap = html_span_text_content(parent, " ");
      let extra = bible_glyph_word_gap_extra();
      html_style_set(gap, "wordSpacing", extra);
    }
    first = false;
    bible_glyph_word_draw_html(parent, word, lookup);
  }
}
