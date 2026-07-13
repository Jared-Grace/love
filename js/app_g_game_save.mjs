import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { app_g_game_save_path } from "./app_g_game_save_path.mjs";
export async function app_g_game_save(g) {
  let p = app_g_game_save_path();
  await file_overwrite_json(p, g);
  global_function_property_set(app_g_game_save_get, p, g);
}
