import { html_border_none } from "../../../love/public/src/html_border_none.mjs";
import { html_border_radius_em } from "../../../love/public/src/html_border_radius_em.mjs";
import { html_style_padding } from "../../../love/public/src/html_style_padding.mjs";
export function app_code_container_generic_style(container) {
  html_style_padding(container, "0.2em");
  html_border_radius_em(container, 0.75);
  html_border_none(container);
}
