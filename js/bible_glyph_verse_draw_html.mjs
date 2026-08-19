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
  ("THE SPACE STILL DOES REAL WORK even though a page can draw the grouping ring, and that is worth saying because the ring looks like it makes the space redundant. It does not: a ring is drawn only around several glyphs standing together, so two single-picture words in a row have no ring between them and nothing but the space telling a reader they are two words.");
  ("The space is written as a piece of text rather than left to the page's own spacing between elements, because a page collapses and re-flows the gaps between elements by its own rules and would be free to put a line break where this Bible put a word boundary - or to put none where it put a space.");
  let first = true;
  for (let word of words) {
    if (not(first)) {
      html_span_text_content(parent, " ");
    }
    first = false;
    bible_glyph_word_draw_html(parent, word, lookup);
  }
}
