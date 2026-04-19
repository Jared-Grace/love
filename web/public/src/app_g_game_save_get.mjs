import { file_read } from "../../../love/public/src/file_read.mjs";
import { file_read_cached_initialize } from "../../../love/public/src/file_read_cached_initialize.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { app_g_game_save_path } from "../../../love/public/src/app_g_game_save_path.mjs";
export async function app_g_game_save_get() {
  let p = app_g_game_save_path();
  await file_read_cached_initialize(p);
  let json = await file_read(p);
  let g = json_from(json);
  return g;
}
