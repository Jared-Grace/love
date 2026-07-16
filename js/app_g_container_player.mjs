import { app_g_container_color } from "./app_g_container_color.mjs";
import { app_shared_container_background_color } from "./app_shared_container_background_color.mjs";
export function app_g_container_player(overlay) {
  let color = app_shared_container_background_color();
  let container = app_g_container_color(overlay, color);
  return container;
}
