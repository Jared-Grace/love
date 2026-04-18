import { json_from } from "../../../love/public/src/json_from.mjs";
import { file_read_cached } from "../../../love/public/src/file_read_cached.mjs";
import { app_g_game_save_path } from "../../../love/public/src/app_g_game_save_path.mjs";
export async function app_g_game_save_get() {
  let p = app_g_game_save_path();
  let json = await file_read_cached(p);
  let g = json_from(json);
  return g;
}
