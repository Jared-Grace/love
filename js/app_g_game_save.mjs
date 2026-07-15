import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { app_g_game_save_path } from "./app_g_game_save_path.mjs";
import { object_copy } from "./object_copy.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
export async function app_g_game_save(g) {
  let p = app_g_game_save_path();
  let g_persisted = object_copy(g);
  property_delete_if_exists(g_persisted, "coordinates");
  property_delete_if_exists(g_persisted, "rows");
  await file_overwrite_json(p, g_persisted);
  global_function_property_set(app_g_game_save_get, p, g);
}
