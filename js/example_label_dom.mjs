import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_bold_semi } from "./html_bold_semi.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
// A small uppercase caption (function / command / before / after).
export function example_label_dom(parent, text) {
  let label = html_div(parent);
  html_text_set(label, text);
  html_style_font_size(label, "0.7rem");
  html_style_set(label, "text-transform", "uppercase");
  html_style_set(label, "letter-spacing", "0.05em");
  html_font_color_set(label, app_shared_color_blue_dark());
  html_bold_semi(label);
  html_style_set(label, "margin", "0.6rem 0 0.3rem");
  return label;
}
