import { html_style_button } from "./html_style_button.mjs";
import { html_roboto_include } from "./html_roboto_include.mjs";
import { html_font_set } from "./html_font_set.mjs";
import { html_font_sans_serif_value } from "./html_font_sans_serif_value.mjs";
import { html_document_root } from "./html_document_root.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_font_sans_serif_set_html() {
  let html = html_document_root();
  html_roboto_include();
  let style_value = html_font_sans_serif_value();
  html_font_set(html, style_value);
  let style = text_combine(":font-family: ", html_font_sans_serif_value());
  html_style_button(style);
}
