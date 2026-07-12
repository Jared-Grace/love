import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { global_function_property_delete } from "./global_function_property_delete.mjs";
import { app_g_game_save_path } from "./app_g_game_save_path.mjs";
export async function app_g_game_save() {
  let p = app_g_game_save_path();
  let g = await app_g_game_save_get();
  await file_overwrite_json(p, g);
  global_function_property_delete(app_g_game_save_get, p);
}
