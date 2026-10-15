import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { bible_glyph_word_pair_separator } from "./bible_glyph_word_pair_separator.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { null_is } from "./null_is.mjs";
import { list_get } from "./list_get.mjs";
import { html_span } from "./html_span.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { bible_glyph_word_draw_html } from "./bible_glyph_word_draw_html.mjs";
export function bible_glyph_verse_originals_draw_html(
  parent,
  words,
  originals,
  lookup,
) {
  arguments_assert(arguments, 4);
  ("$plain words");
  ("$plain originals");
  ("$plain lookup");
  ("the words are one stored verse, the originals are each word's spelling in the language it was written in or null, and the lookup is a glyph name to character table. All are data to draw and none runs.");
  ("One stored verse of a picture Bible drawn onto a page, with each word that has an original spelling saying it, so a tap on the word can show and say the word it stands for.");
  ("THE SPELLING IS PUT ON A SPAN ROUND THE WORD, NOT ON EACH GROUP, because one English word can be several groups and every one of them stands for the same written word. The span draws nothing, so the page looks exactly as it did.");
  ("A verse with no originals, such as one written by hand, hands in null and every word is drawn bare.");
  let word_before = null;
  let first = true;
  let index = 0;
  for (let word of words) {
    if (not(first)) {
      let text = bible_glyph_word_pair_separator(word_before, word, lookup);
      html_span_text_content(parent, text);
    }
    first = false;
    word_before = word;
    let holder = parent;
    let b = null_is(originals);
    if (not(b)) {
      let original = list_get(originals, index);
      let b2 = null_is(original);
      if (not(b2)) {
        holder = html_span(parent);
        html_attribute_set(holder, "data-original", original);
      }
    }
    index = index + 1;
    bible_glyph_word_draw_html(holder, word, lookup);
  }
}
