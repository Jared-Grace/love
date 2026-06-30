import { html_border_none } from "../../../love/public/src/html_border_none.mjs";
import { html_border_radius_em } from "../../../love/public/src/html_border_radius_em.mjs";
import { html_style_padding } from "../../../love/public/src/html_style_padding.mjs";
import { html_style_background_color_black } from "../../../love/public/src/html_style_background_color_black.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function app_code_container_dark(parent) {
  let undefined = undefined;
  let div3 = html_div(parent);
  html_style_background_color_black(div3);
  html_style_padding(div3, "0.2em");
  html_border_radius_em(div3, 0.75);
  html_border_none(div3);
  return div3;
}
