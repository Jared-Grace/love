import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { app_g_game_save_path } from "../../../love/public/src/app_g_game_save_path.mjs";
export async function app_g_game_save_get() {
  let p = app_g_game_save_path();
  let g = await file_read_json(p);
}
