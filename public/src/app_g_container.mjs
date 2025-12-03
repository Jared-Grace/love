import { app_karate_container_background_color } from "../../../love/public/src/app_karate_container_background_color.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { app_karate_style_control } from "../../../karate_code/public/src/app_karate_style_control.mjs";
import { app_karate_container_centered } from "../../../karate_code/public/src/app_karate_container_centered.mjs";
export function app_g_container(overlay) {
  let container = app_karate_container_centered(overlay);
  app_karate_style_control(container);
  html_style_assign(container, {
    padding: "0.25em",
    "background-color": app_karate_container_background_color() + "bc",
  });
  return container;
}
