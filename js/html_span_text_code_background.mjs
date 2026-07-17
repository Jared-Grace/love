import { html_span } from "./html_span.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_code_generic } from "./html_style_code_generic.mjs";
export function html_span_text_code_background(parent, text, background) {
  "a code chip whose background is a given color with white text, for color-coding a value (like a remainder) along a spectrum";
  let span = html_span(parent);
  html_text_set(span, text);
  let box_shadow = "transparent";
  let font = "white";
  html_style_code_generic(span, background, box_shadow, font);
  return span;
}
