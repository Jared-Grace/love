import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { bible_glyph_verse_draw_html } from "./bible_glyph_verse_draw_html.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_p } from "./html_p.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
export function bible_glyph_chapter_draw_html(
  parent,
  chapter_code,
  traditions,
) {
  "$plain chapter_code";
  "$plain traditions";
  "the code names one chapter and the traditions are lists of glyph redrawings. Both are data to draw and neither runs.";
  "One picture Bible chapter drawn onto a page, one paragraph per verse with its number in front.";
  ("It is the drawing twin of ",
    fn_name("bible_glyph_chapter_lines"),
    ", which hands back the same chapter as lines of plain text for anything that cannot draw. The split is a paragraph deep and no deeper: both ask the same chapter and the same lookup, and the two differ only in what a word turns into at the end.");
  ("THE VERSE NUMBER IS DRAWN AS TEXT AND STAYS TEXT, and it is the one thing on the line that is not a picture. A number has no reading in another language to lose - a person who cannot read a word of English can still find verse fourteen - so drawing it as a picture would spend a glyph on the one word that never needed one.");
  let chapter = bible_glyph_chapter(chapter_code);
  let lookup = bible_glyph_characters_lookup(traditions);
  for (let verse of chapter.verses) {
    let paragraph = html_p(parent);
    let numbered = verse.verse_number + " ";
    html_span_text_content(paragraph, numbered);
    bible_glyph_verse_draw_html(paragraph, verse.words, lookup);
  }
}
