import { html_display_inline } from "../../../love/public/src/html_display_inline.mjs";
import { html_div_code_dark } from "../../../love/public/src/html_div_code_dark.mjs";
export function app_code_container_dark_inline(parent) {
  let container = html_div_code_dark(parent);
  html_display_inline(container);
  return container;
}
