import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_g_bless_tile_size } from "./app_g_bless_tile_size.mjs";
export function app_g_bless_marker(cell, emoji_text) {
  arguments_assert(arguments, 2);
  "Somebody standing on a tile, drawn as an emoji laid over the ground.";
  "It fills the cell rather than sitting in the text flow, so two people sharing a tile draw";
  "on top of each other instead of widening the grid and shifting every tile after them.";
  "Nothing here is clickable: you aim by turning, never by tapping a person. Tapping would";
  "let a player bless somebody behind them, and being unable to do that is the game.";
  let tile_size = app_g_bless_tile_size();
  let font_size = text_combine_multiple(["calc(", tile_size, " * 0.72)"]);
  let marker = html_div_text(cell, emoji_text);
  html_style_assign(marker, {
    position: "absolute",
    inset: "0",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "font-size": font_size,
    "line-height": "1",
    "pointer-events": "none",
  });
  return marker;
}
