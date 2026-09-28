import { html_span_code_dark } from "./html_span_code_dark.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
export function app_code_lesson_title_code_tile(parent) {
  "one dark tile for a piece of a title's code, empty for the caller to fill";
  "The tile is an inline block, so a piece that fits on a row moves to the next row whole rather than breaking; only a piece wider than the whole row breaks, and then at the places its text leaves for it. Unlike the tile the rest of the app writes code into, it is allowed to wrap: a title is squeezed between the buttons of its bar, and a line of code there that refused to wrap ran off the right edge on a phone with the text size turned up, at the human's request, 2026-09-28";
  let tile = html_span_code_dark(parent);
  html_display_inline_block(tile);
  html_style_white_space(tile, "pre-line");
  return tile;
}
