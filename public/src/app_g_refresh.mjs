import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_g_player_img } from "../../../love/public/src/app_g_player_img.mjs";
import { app_g_div_map_on_click } from "../../../love/public/src/app_g_div_map_on_click.mjs";
import { app_g_game_save_get_or_refresh } from "../../../love/public/src/app_g_game_save_get_or_refresh.mjs";
import { app_g_player_scroll_center } from "../../../love/public/src/app_g_player_scroll_center.mjs";
import { app_g_div_map_new } from "../../../love/public/src/app_g_div_map_new.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
export async function app_g_refresh(context, div_map_container) {
  let g = await app_g_game_save_get_or_refresh(context);
  if (null_is(g)) {
    return;
  }
  html_clear(div_map_container);
  let div_map = await app_g_div_map_new(div_map_container);
  let player = property_get(g, "player");
  let player_img_c = await app_g_player_img(div_map);
  app_g_div_map_on_click(context, div_map, player_img_c);
  await app_g_player_scroll_center(div_map, player_img_c);
}
