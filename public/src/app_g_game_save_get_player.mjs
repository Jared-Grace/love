import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
export async function app_g_game_save_get_player() {
  let g = await app_g_game_save_get();
  let player = property_get(g, "player");
  return player;
}
