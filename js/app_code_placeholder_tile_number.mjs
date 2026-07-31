import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { app_code_placeholder_color } from "./app_code_placeholder_color.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_placeholder_tile_number(parent) {
  "a code tile holding a greyed ... standing for any number - the unquoted number counterpart of the quoted string placeholder tile";
  let placeholder_color = app_code_placeholder_color();
  let tile = html_span(parent);
  html_style_code_dark_nowrap(tile);
  let dots = html_span_text(tile, "...");
  html_font_color_set(dots, placeholder_color);
  return tile;
}
