import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
export function html_display_inline(item) {
  const value = "inline";
  html_style_set(item, "display", value);
}
