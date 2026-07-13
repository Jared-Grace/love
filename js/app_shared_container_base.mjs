import { html_card } from "./html_card.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_div } from "./html_div.mjs";
export function app_shared_container_base(parent) {
  let div = html_div(parent);
  html_card(div);
  html_style_margin_y(div, "10px");
  return div;
}
