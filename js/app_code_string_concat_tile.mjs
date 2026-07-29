import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
export function app_code_string_concat_tile(parent, left_fill, right_fill) {
  "two quoted strings joined by a plus, all inside ONE code tile so the whole reads as a single piece of code; each side's inside is drawn by its own fill (grey placeholder dots, or a coloured value), so the same one-tile shape serves both the title shape and a worked example";
  let quote = '"';
  let tile = html_span(parent);
  html_style_code_dark_nowrap(tile);
  function quoted(fill) {
    "one quoted string in the shared tile: a quote, whatever the fill draws, a quote";
    html_span_text(tile, quote);
    fill(tile);
    html_span_text(tile, quote);
  }
  quoted(left_fill);
  html_span_text(tile, " + ");
  quoted(right_fill);
  return tile;
}
