import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { app_g_div_map_tiles_add } from "../../../love/public/src/app_g_div_map_tiles_add.mjs";
import { app_g_div_map_style } from "../../../love/public/src/app_g_div_map_style.mjs";
import { app_g_div_map_npcs_add } from "../../../love/public/src/app_g_div_map_npcs_add.mjs";
import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export async function app_g_div_map_new(div_map_container) {
  let g = await app_g_game_save_get();
  let npcs = property_get(g, "npcs");
  let player = property_get(g, "player");
  let div_map = html_div(div_map_container);
  property_set_exists_not(div_map, "container", div_map_container);
  app_g_div_map_npcs_add(div_map, npcs);
  await app_g_div_map_style(div_map);
  await app_g_div_map_tiles_add(div_map);
  return div_map;
}
