import { marker } from "../../../love/public/src/marker.mjs";
import { html_display_block } from "../../../love/public/src/html_display_block.mjs";
import { html_display_none } from "../../../love/public/src/html_display_none.mjs";
export function html_display_none_or_inline(hidden, item) {
  marker("1");
  if (hidden) {
    html_display_none(item);
  } else {
    html_display_block(item);
  }
}
