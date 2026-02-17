import { html_style_padding } from "../../../love/public/src/html_style_padding.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { app_replace_button_symbol_style_inner } from "../../../love/public/src/app_replace_button_symbol_style_inner.mjs";
import { html_display_inline_block } from "../../../love/public/src/html_display_inline_block.mjs";
export function app_replace_button_symbol_style(b) {
  app_replace_button_symbol_style_inner(b);
  html_style_padding(component, value);
  html_display_inline_block(b);
  html_style_assign(b, {
    "line-height": 1,
  });
}
