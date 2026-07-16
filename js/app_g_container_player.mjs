import { app_g_container_color } from "./app_g_container_color.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
export function app_g_container_player(overlay) {
  let color = app_shared_button_background();
  let container = app_g_container_color(overlay, color);
  return container;
}
