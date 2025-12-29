import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_display_none } from "../../../love/public/src/html_display_none.mjs";
export function html_display_none_or_inline(hidden, item) {
  marker("1");
  if (hidden) {
    html_display_none(item);
  } else {
    marker("1");
    html_style_set(item, "display", "block");
  }
}
