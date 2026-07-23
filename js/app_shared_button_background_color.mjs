import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
export function app_shared_button_background_color() {
  "a light blue fill, so the black button text has real contrast; the stronger blue it used to be filled with now draws the border instead (see app_shared_button_style)";
  let c = app_shared_container_blue_background_color();
  return c;
}
