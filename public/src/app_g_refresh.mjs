import { app_g_div_map_on_click } from "../../../love/public/src/app_g_div_map_on_click.mjs";
import { app_g_game_save_get_or_refresh } from "../../../love/public/src/app_g_game_save_get_or_refresh.mjs";
import { app_g_player_scroll_center } from "../../../love/public/src/app_g_player_scroll_center.mjs";
import { app_g_div_map_new } from "../../../love/public/src/app_g_div_map_new.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_g_refresh(context, div_map_container) {
  let refresh = await app_g_game_save_get_or_refresh(context);
  if (refresh) {
    return;
  }
  html_clear(div_map_container);
  let r = await app_g_div_map_new(context, div_map_container);
  app_g_div_map_on_click(context, div_map_container, div_map, player_img_c);
  let player_img_c = property_get(r, "player_img_c");
  let div_map = property_get(r, "div_map");
  await app_g_player_scroll_center(div_map, player_img_c);
}
