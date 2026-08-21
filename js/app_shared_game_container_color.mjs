import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_game_container } from "./app_shared_game_container.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_game_container_color(overlay, color) {
  let container = app_shared_game_container(overlay);
  let background = text_combine(color, "bc");
  html_style_background_color_set(container, background);
  return container;
}
