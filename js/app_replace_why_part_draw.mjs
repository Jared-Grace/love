import { app_replace_why_symbol_tile } from "./app_replace_why_symbol_tile.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { property_get } from "./property_get.mjs";
import { text_is } from "./text_is.mjs";
export function app_replace_why_part_draw(parent, part) {
  "One piece of an explanation put on the page: a run of words as it stands, and a symbol as the tile the learner presses on the board.";
  if (text_is(part)) {
    html_span_text(parent, part);
    return;
  }
  let symbol = property_get(part, "symbol");
  app_replace_why_symbol_tile(parent, symbol);
}
