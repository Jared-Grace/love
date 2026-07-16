import { html_div } from "./html_div.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text_bold } from "./html_span_text_bold.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { app_bible_on_click_google_define } from "./app_bible_on_click_google_define.mjs";
export function app_shared_verse_line(parent, name, text, color) {
  let line = html_div(parent);
  html_font_color_set(line, color);
  let has_name = text_empty_not_is(name);
  if (has_name) {
    html_span_text_bold(line, text_combine(name, ": "));
  }
  app_bible_on_click_google_define(line, text);
  return line;
}
