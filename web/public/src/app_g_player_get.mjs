import { file_read_cached_json } from "../../../love/public/src/file_read_cached_json.mjs";
import { app_g_game_save_path } from "../../../love/public/src/app_g_game_save_path.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_g_player_get() {
  let p = app_g_game_save_path();
  let g = await file_read_cached_json(p);
  let player = property_get(g, "player");
  return player;
}
