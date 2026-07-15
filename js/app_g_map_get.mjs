import { file_read_json } from "./file_read_json.mjs";
import { app_g_map_save_path } from "./app_g_map_save_path.mjs";
export async function app_g_map_get() {
  let p = app_g_map_save_path();
  let rows = await file_read_json(p);
  return rows;
}
