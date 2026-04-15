import { file_overwrite_cached } from "../../../love/public/src/file_overwrite_cached.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { app_g_game_save_path } from "../../../love/public/src/app_g_game_save_path.mjs";
export async function app_g_game_save(g) {
  let p = app_g_game_save_path();
  await file_overwrite_cached(p);
  await file_overwrite_json(p, g);
}
