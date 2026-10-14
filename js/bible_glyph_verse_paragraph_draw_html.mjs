import { arguments_assert } from "./arguments_assert.mjs";
import { html_p } from "./html_p.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_span } from "./html_span.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { bible_glyph_verse_draw_html } from "./bible_glyph_verse_draw_html.mjs";
export function bible_glyph_verse_paragraph_draw_html(
  parent,
  verse_number,
  words,
  lookup,
) {
  arguments_assert(arguments, 4);
  ("$plain verse_number");
  ("$plain words");
  ("$plain lookup");
  ("the number and the words are one stored verse and the lookup is a glyph name to character table. All are data to draw and none runs.");
  ("One verse of a picture Bible drawn as a paragraph: its number in grey, then its words as pictures.");
  ("THE PICTURES ALONE AND THE PICTURES WITH A KEY UNDER THEM DRAW THEIR VERSE HERE, ONE WAY. The keyed view used to draw the pictures as one finished line of text, so a word in it was nothing a tap could land on, and the two views looked alike while behaving differently.");
  ("The number is grey because it is how a reader finds their place rather than part of what the verse says. The words go in a run of their own that works its direction out from the text inside it, so a right to left chapter runs its own way while the number keeps the page's.");
  let paragraph = html_p(parent);
  let numbered = verse_number + " ";
  let number = html_span_text_content(paragraph, numbered);
  app_shared_text_deemphasized(number);
  let words_holder = html_span(paragraph);
  html_attribute_set(words_holder, "dir", "auto");
  bible_glyph_verse_draw_html(words_holder, words, lookup);
  return paragraph;
}
