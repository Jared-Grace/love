import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { app_g_map_save_path } from "./app_g_map_save_path.mjs";
export async function app_g_map_save(rows) {
  let p = app_g_map_save_path();
  await file_overwrite_json(p, rows);
}
