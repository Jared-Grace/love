import { app_g_player_scroll_center } from "../../../love/public/src/app_g_player_scroll_center.mjs";
import { app_g_div_map_new } from "../../../love/public/src/app_g_div_map_new.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { catch_null_async } from "../../../love/public/src/catch_null_async.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_g_refresh(context, div_map_container) {
  let g = await catch_null_async(app_g_game_save_get);
  if (null_is(g)) {
    await app_g_main(context);
  }
  return;
  html_clear(div_map_container);
  let r = await app_g_div_map_new(context, div_map_container);
  let player_img_c = property_get(r, "player_img_c");
  let div_map = property_get(r, "div_map");
  await app_g_player_scroll_center(div_map, player_img_c);
}
