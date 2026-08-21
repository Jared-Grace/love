import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_shared_game_container } from "./app_shared_game_container.mjs";
export function app_g_container_text(overlay, text) {
  let choices = app_shared_game_container(overlay);
  app_g_p_text(choices, text);
  return choices;
}
