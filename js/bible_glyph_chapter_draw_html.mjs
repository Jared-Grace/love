import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { html_p } from "./html_p.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { html_span } from "./html_span.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { bible_glyph_verse_draw_html } from "./bible_glyph_verse_draw_html.mjs";
export function bible_glyph_chapter_draw_html(parent, chapter, traditions) {
  "$plain chapter";
  "$plain traditions";
  "the chapter is one already-read chapter and the traditions are lists of glyph redrawings. Both are data to draw and neither runs.";
  "One picture Bible chapter drawn onto a page, one paragraph per verse with its number in front.";
  ("It is the drawing twin of ",
    fn_name("bible_glyph_chapter_lines"),
    ", which hands back the same chapter as lines of plain text for anything that cannot draw. The split is a paragraph deep and no deeper: both are handed the same chapter and ask the same lookup, and the two differ only in what a word turns into at the end.");
  ("THE CHAPTER IS HANDED OVER RATHER THAN LOOKED UP HERE, and that is what keeps the other twenty four out of the page. Looking a chapter up by its code means holding every chapter to find one, so a browser that opened John 10 downloaded the whole picture Bible to draw it; handed the chapter, this file knows nothing about where chapters come from and a page can fetch the one it needs.");
  ("The caller does the fetching because the caller is the one thing that already knows whether a chapter is wanted at all. The index draws no chapter, and a reader who never opens one should never pay for one.");
  ("THE VERSE NUMBER IS DRAWN AS TEXT AND STAYS TEXT, and it is the one thing on the line that is not a picture. A number has no reading in another language to lose - a person who cannot read a word of English can still find verse fourteen - so drawing it as a picture would spend a glyph on the one word that never needed one.");
  ("THE WORDS SAY THEIR OWN DIRECTION AND THE NUMBER STAYS OUT OF IT, which is the same shape the reading page already settled on for its verse lines. The words go in a run of their own that works its direction out from the text inside it, so a chapter written in Urdu or Hebrew runs the way that language runs while the number in front keeps the page's own direction.");
  ("IT IS WRITTEN NOW BECAUSE THE FAILURE IS SILENT LATER. Every chapter today is English and inherits the right direction from the page by accident, so nothing would have gone red and nothing would have looked wrong until the first right-to-left chapter was authored - and what a reader would have seen then is a verse running backwards, which reads as the language being drawn wrong rather than as a missing attribute.");
  ("THE PICTURES DO NOT DECIDE IT AND CANNOT. An emoji has no direction of its own as far as the page is concerned, and neither has a digit, so a line opening with either is worked out from the first real letter after them. A verse of pictures alone falls back to the page's direction, which is the only answer available and is harmless, because a line with no letters in it reads the same both ways.");
  let lookup = bible_glyph_characters_lookup(traditions);
  for (let verse of chapter.verses) {
    let paragraph = html_p(parent);
    let numbered = verse.verse_number + " ";
    let number = html_span_text_content(paragraph, numbered);
    app_shared_text_deemphasized(number);
    let words_holder = html_span(paragraph);
    html_attribute_set(words_holder, "dir", "auto");
    bible_glyph_verse_draw_html(words_holder, verse.words, lookup);
  }
}
