import { html_border_none } from "../../../love/public/src/html_border_none.mjs";
import { html_style_padding } from "../../../love/public/src/html_style_padding.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function app_code_container_generic(parent) {
  let container = html_div(parent);
  html_style_padding(container, "0.2em");
  html_border_none(container);
  return container;
}
