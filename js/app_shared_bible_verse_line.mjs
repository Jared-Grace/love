import { null_not_is } from "./null_not_is.mjs";
import { html_font_color_set_or_remove } from "./html_font_color_set_or_remove.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { app_bible_on_click_google_define } from "./app_bible_on_click_google_define.mjs";
import { text_rtl_is } from "./text_rtl_is.mjs";
export function app_shared_bible_verse_line(parent, name, text, color) {
  let line = html_div(parent);
  ("a null colour means read in the page's default text colour, so leave the property alone rather than writing one in");
  let colored = null_not_is(color);
  html_font_color_set_or_remove(colored, line, color);
  let rtl = text_rtl_is(text);
  if (rtl) {
    ("a right-to-left verse aligns to the right and flows right-to-left, so the label sits at the reading start and the words run the natural direction");
    html_style_set(line, "direction", "rtl");
    html_style_set(line, "text-align", "right");
  }
  let has_name = text_empty_not_is(name);
  if (has_name) {
    ("color the language name with the language color so it matches its verse text");
    let text2 = text_combine(name, ": ");
    let name_span = html_span_text(line, text2);
    ("deemphasize the label by fading it, keeping the language hue rather than graying it out");
    html_style_set(name_span, "opacity", "0.6");
  }
  ("hold the verse words in their own isolated run so a right-to-left script like Urdu or Arabic reads in its own direction, detected from the text itself, without the Latin label flipping it");
  let text_holder = html_span(line);
  html_attribute_set(text_holder, "dir", "auto");
  app_bible_on_click_google_define(text_holder, text);
  return line;
}
