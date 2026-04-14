import { json_from } from "../../../love/public/src/json_from.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { app_g_game_save_path } from "../../../love/public/src/app_g_game_save_path.mjs";
export async function app_g_game_save_get() {
  let p = app_g_game_save_path();
  let json = await file_read(p);
  let g = json_from(json);
  return g;
}
