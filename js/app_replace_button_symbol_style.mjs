import { html_style_assign } from "./html_style_assign.mjs";
import { app_replace_button_symbol_style_inner } from "./app_replace_button_symbol_style_inner.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
export function app_replace_button_symbol_style(b) {
  app_replace_button_symbol_style_inner(b);
  html_display_inline_block(b);
  html_style_assign(b, {
    "line-height": 1,
  });
}
