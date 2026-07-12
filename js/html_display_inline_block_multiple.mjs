import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { each } from "./each.mjs";
export function html_display_inline_block_multiple(list) {
  each(list, html_display_inline_block);
}
