import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { global_function_property_delete } from "../../../love/public/src/global_function_property_delete.mjs";
import { file_read_cached_initialize } from "../../../love/public/src/file_read_cached_initialize.mjs";
import { app_g_game_save_path } from "../../../love/public/src/app_g_game_save_path.mjs";
export async function app_g_game_save(g) {
  let p = app_g_game_save_path();
  let g2 = await app_g_game_save_get();
  await file_overwrite_json(p, contents);
  global_function_property_delete(file_read_cached_initialize, p);
}
