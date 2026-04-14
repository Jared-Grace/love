import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { app_g_click } from "../../../love/public/src/app_g_click.mjs";
import { app_g_refresh } from "../../../love/public/src/app_g_refresh.mjs";
import { app_g_div_map_tiles_add } from "../../../love/public/src/app_g_div_map_tiles_add.mjs";
import { app_g_div_map_style } from "../../../love/public/src/app_g_div_map_style.mjs";
import { app_g_div_map_npcs_add } from "../../../love/public/src/app_g_div_map_npcs_add.mjs";
import { app_g_player_img } from "../../../love/public/src/app_g_player_img.mjs";
import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export async function app_g_div_map_new(div_map_container, npcs, context) {
  let g = await app_g_game_save_get();
  let div_map = html_div(div_map_container);
  property_set_exists_not(div_map, "container", div_map_container);
  let player_img_c = app_g_player_img(div_map, player);
  app_g_div_map_npcs_add(div_map, npcs);
  await app_g_div_map_style(div_map);
  await app_g_div_map_tiles_add(div_map);
  async function on_click(e) {
    async function refresh() {
      await app_g_refresh(context, div_map_container);
    }
    await app_g_click(e, div_map, player_img_c, refresh);
  }
  html_on_click(div_map, on_click);
  let r = {
    div_map,
    player_img_c,
  };
  return r;
}
