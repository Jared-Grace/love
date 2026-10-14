import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_image_draw } from "./bible_glyph_image_draw.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
export function bible_glyph_name_draw_html(parent, name, lookup) {
  "$plain name";
  "$plain lookup";
  "the name is one glyph's name and the lookup is a glyph name to character table. Both are data to draw and neither runs.";
  "One glyph drawn onto a page as its picture, or as its name when the lookup does not carry it.";
  "A glyph the lookup does not carry is drawn as its NAME rather than as a blank: a blank hides the fault at the moment a reader meets it, and a reader who can see the name can report what is missing. It is drawn as text that is never read as markup, because a name arriving with an angle bracket in it would otherwise vanish into the page.";
  let known = property_exists(lookup, name);
  if (known) {
    let character = property_get(lookup, name);
    bible_glyph_image_draw(parent, name, character);
    return;
  }
  html_span_text_content(parent, name);
}
