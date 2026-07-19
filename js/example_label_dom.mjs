import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
// A small uppercase caption (function / command / before / after).
export function example_label_dom(parent, text) {
  let label = html_div(parent);
  html_text_set(label, text);
  html_style_set(label, "font-size", "0.7rem");
  html_style_set(label, "text-transform", "uppercase");
  html_style_set(label, "letter-spacing", "0.05em");
  html_style_set(label, "color", "#888");
  html_style_set(label, "font-weight", "600");
  html_style_set(label, "margin", "0.6rem 0 0.3rem");
  return label;
}
