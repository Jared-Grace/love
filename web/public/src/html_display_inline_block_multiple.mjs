import { html_display_inline_block } from "../../../love/public/src/html_display_inline_block.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function html_display_inline_block_multiple(list) {
  each(list, html_display_inline_block);
}
