import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
export function app_code_string_tile(parent, fill) {
  "a code tile shaped like a string literal: an opening quote, whatever `fill` draws inside it, then a closing quote - all in the code style. The quotes and the tile are drawn the same way for every string tile (the coloured value, the grey placeholder shape, and any later one), so that skeleton lives here once and each caller supplies only what goes between the quotes.";
  let quote = '"';
  let tile = html_span(parent);
  html_style_code_dark_nowrap(tile);
  html_span_text(tile, quote);
  fill(tile);
  html_span_text(tile, quote);
  return tile;
}
