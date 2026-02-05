import { html_display_inline } from "../../../love/public/src/html_display_inline.mjs";
import { html_display_none } from "../../../love/public/src/html_display_none.mjs";
export function html_display_none_or_inline(item, hidden) {
  if (hidden) {
    html_display_none(item);
  } else {
    html_display_inline(item);
  }
}
