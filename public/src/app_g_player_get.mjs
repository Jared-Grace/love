import { app_g_game_save_path } from "../../../love/public/src/app_g_game_save_path.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
export async function app_g_player_get() {
  let p = app_g_game_save_path();
  let g = await file_read_json(p);
  let game = storage_local_get(app_g, "game");
  let player = property_get(game, "player");
  return player;
}
