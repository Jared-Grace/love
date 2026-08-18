import { app_g_rows_get } from "./app_g_rows_get.mjs";
import { app_g_div_map_style_rows } from "./app_g_div_map_style_rows.mjs";
export async function app_g_div_map_style(div_map) {
  let rows = await app_g_rows_get();
  app_g_div_map_style_rows(div_map, rows);
}
