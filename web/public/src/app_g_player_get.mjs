import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
export async function app_g_player_get() {
  await app_g_game_save_get();
  let game = storage_local_get(app_g, "game");
  let player = property_get(game, "player");
  return player;
}
