import { app_replace_symbol_tile_background_color_valid_unsolved } from "./app_replace_symbol_tile_background_color_valid_unsolved.mjs";
import { app_shared_symbol_tile } from "./app_shared_symbol_tile.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_replace_why_symbol_tile(parent, symbol) {
  "One symbol drawn inside an explanation as the very tile the learner presses on the board, so the sentence and the board are showing the same thing rather than two spellings of it.";
  let tile = app_shared_symbol_tile(parent, symbol);
  let color = app_replace_symbol_tile_background_color_valid_unsolved();
  html_style_background_color_set(tile, color);
  html_font_color_set_white(tile);
  return tile;
}
