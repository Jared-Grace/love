import { app_shared_container_background_color } from "./app_shared_container_background_color.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_container(parent) {
  let div = html_div(parent);
  html_style_assign(div, {
    "border-radius": "1.2em",
    "background-color": text_combine(
      app_shared_container_background_color(),
      "ff",
    ),
    padding: "0.6em",
  });
  html_style_margin_y(div, "10px");
  return div;
}
