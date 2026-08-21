import { app_shared_game_button_green_style } from "./app_shared_game_button_green_style.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
export function app_shared_game_button_green(overlay, text, lambda) {
  let b = app_shared_button_green(overlay, text, lambda);
  app_shared_game_button_green_style(b);
  return b;
}
