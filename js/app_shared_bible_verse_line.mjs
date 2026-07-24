import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { app_bible_on_click_google_define } from "./app_bible_on_click_google_define.mjs";
export function app_shared_bible_verse_line(parent, name, text, color) {
  let line = html_div(parent);
  html_font_color_set(line, color);
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
