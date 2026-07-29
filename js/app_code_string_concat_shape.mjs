import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { app_code_placeholder_color } from "./app_code_placeholder_color.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_string_concat_shape(parent) {
  "the shape of a string concatenation as ONE code tile: two quoted grey placeholders joined by a plus, all inside a single code-styled run so it reads as one piece of code rather than three separate tiles";
  let quote = '"';
  let tile = html_span(parent);
  html_style_code_dark_nowrap(tile);
  let placeholder_color = app_code_placeholder_color();
  function quoted_placeholder() {
    "one quoted grey placeholder inside the shared tile: a quote, the grey dots, a quote";
    html_span_text(tile, quote);
    let dots = html_span_text(tile, "...");
    html_font_color_set(dots, placeholder_color);
    html_span_text(tile, quote);
  }
  quoted_placeholder();
  html_span_text(tile, " + ");
  quoted_placeholder();
  return tile;
}
