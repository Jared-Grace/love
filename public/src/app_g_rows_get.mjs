import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
export async function app_g_rows_get() {
  let g = await app_g_game_save_get();
  let rows = property_get(g, "rows");
  return rows;
}
