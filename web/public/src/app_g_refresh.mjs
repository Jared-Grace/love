import { app_g_div_map_new } from "../../../love/public/src/app_g_div_map_new.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { catch_null_async } from "../../../love/public/src/catch_null_async.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { html_on_load_wait } from "../../../love/public/src/html_on_load_wait.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_scroll_center_container_now } from "../../../love/public/src/html_scroll_center_container_now.mjs";
export async function app_g_refresh(context, div_map_container) {
  let g = await catch_null_async(app_g_game_save_get);
  if (null_is(g)) {
    await app_g_main(context);
    return;
  }
  let npcs = property_get(g, "npcs");
  let player = property_get(g, "player");
  html_clear(div_map_container);
  let r = await app_g_div_map_new(div_map_container, context);
  let player_img_c = property_get(r, "player_img_c");
  let div_map = property_get(r, "div_map");
  await html_on_load_wait();
  let container = property_get(div_map, "container");
  await html_scroll_center_container_now(player_img_c, container);
}
