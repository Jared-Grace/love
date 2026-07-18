import { app_shared_container_blue_border_color } from "./app_shared_container_blue_border_color.mjs";
export function app_shared_container_blue_dark_reference_color() {
  "the reference sits on the dark container, so it uses the light blue accent rather than the deemphasized gray, which would be unreadable there";
  let c = app_shared_container_blue_border_color();
  return c;
}
