import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { html_border_none } from "../../../love/public/src/html_border_none.mjs";
import { html_border_radius_em } from "../../../love/public/src/html_border_radius_em.mjs";
import { html_style_padding } from "../../../love/public/src/html_style_padding.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function app_code_container_generic(parent) {
  let container = html_div(parent);
  html_style_padding(container, "0.2em");
  html_border_radius_em(container, 0.75);
  html_border_none(container);
  html_style_margin_y(container, 0.3 + "em");
  return container;
}
