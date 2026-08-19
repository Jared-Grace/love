import { bible_glyph_image_draw } from "./bible_glyph_image_draw.mjs";
import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_word_draw_html(parent, word, lookup) {
  "$plain word";
  "$plain lookup";
  "the word is one stored verse word and the lookup is a glyph name to character table. Both are data to draw and neither runs.";
  "One stored word of a picture Bible verse, drawn onto a page as its pictures.";
  ("It is the twin of ",
    fn_name("bible_glyph_word_draw"),
    ", which draws the same stored word as plain text, and the two are deliberately kept side by side rather than one replacing the other. Plain text is what a terminal, a log and a test can read, and a page is where the pictures belong. Neither one stores anything, so a verse is written once and both draw it.");
  ("THE GROUPING RING IS DRAWN HERE, and it is the one thing the plain text twin says outright that it cannot do. Several glyphs standing together are ONE word - the burning heart with the cross and the dove is a single word of the Bible and not three - and in plain text a reader has only the spacing to infer that from. A ring around the group says it.");
  ("A RING IS DRAWN ONLY WHERE THERE IS SOMETHING TO GROUP. One picture standing alone is already one word, so a ring around it would say nothing and would only teach the reader that the ring means nothing.");
  ("A glyph the lookup does not carry is drawn as its NAME rather than as a blank, for the same reason the plain text twin does it: a blank hides the fault at the moment a reader meets it, and a reader who can see the name can report what is missing. It is drawn as text that is never read as markup, because a name arriving with an angle bracket in it would otherwise vanish into the page and leave the sentence looking complete.");
  let plain = equal(typeof word, "string");
  if (plain) {
    html_span_text_content(parent, word);
    return;
  }
  for (let part of word) {
    let words = equal(typeof part, "string");
    if (words) {
      html_span_text_content(parent, part);
      continue;
    }
    let several = list_size_greater_than(part, 1);
    let group = parent;
    if (several) {
      group = html_span(parent);
      html_style_set(group, "border", "0.06em solid currentColor");
      html_style_set(group, "borderRadius", "0.5em");
      html_style_set(group, "padding", "0 0.12em");
      html_style_set(group, "whiteSpace", "nowrap");
    }
    for (let name of part) {
      let known = property_exists(lookup, name);
      if (known) {
        let character = property_get(lookup, name);
        bible_glyph_image_draw(group, name, character);
        continue;
      }
      html_span_text_content(group, name);
    }
  }
}
