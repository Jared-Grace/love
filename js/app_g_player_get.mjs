import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_player_get() {
  let g = await app_g_game_save_get();
  let player = property_get(g, "player");
  return player;
}
