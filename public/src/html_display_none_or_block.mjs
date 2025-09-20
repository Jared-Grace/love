import { html_display_block } from "./html_display_block.mjs";
import { html_display_none } from "./html_display_none.mjs";
export function html_display_none_or_block(condition, item) {
  if (condition) {
    html_display_none(item);
  } else {
    html_display_block(item);
  }
}
