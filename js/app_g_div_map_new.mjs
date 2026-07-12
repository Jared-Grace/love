import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_div_map_tiles_add } from "./app_g_div_map_tiles_add.mjs";
import { app_g_div_map_style } from "./app_g_div_map_style.mjs";
import { app_g_div_map_npcs_add } from "./app_g_div_map_npcs_add.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { html_div } from "./html_div.mjs";
export async function app_g_div_map_new(div_map_container) {
  let npcs = await app_g_npcs_get();
  let div_map = html_div(div_map_container);
  property_set_exists_not(div_map, "container", div_map_container);
  app_g_div_map_npcs_add(div_map, npcs);
  await app_g_div_map_style(div_map);
  await app_g_div_map_tiles_add(div_map);
  return div_map;
}
