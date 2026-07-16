import { html_style_set } from "../../love/js/html_style_set.mjs";
import { app_shared_symbol_tile_style_inner } from "../../love/js/app_shared_symbol_tile_style_inner.mjs";
import { html_display_inline_block } from "../../love/js/html_display_inline_block.mjs";
export function app_shared_symbol_tile_style(b) {
  app_shared_symbol_tile_style_inner(b);
  html_display_inline_block(b);
  html_style_set(b, "line-height", 1);
}
