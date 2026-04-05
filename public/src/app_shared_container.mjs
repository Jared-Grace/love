import { app_shared_container_background_color } from "../../../love/public/src/app_shared_container_background_color.mjs";
import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function app_shared_container(parent) {
  let div = html_div(parent);
  html_style_assign(div, {
    "border-radius": "1.2em",
    "background-color": app_shared_container_background_color() + "ff",
    padding: "0.6em",
  });
  html_style_margin_y(div, "10px");
  return div;
}
