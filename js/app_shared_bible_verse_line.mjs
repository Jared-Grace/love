import { html_div } from "./html_div.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
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
    html_span_text(line, text2);
  }
  app_bible_on_click_google_define(line, text);
  return line;
}
