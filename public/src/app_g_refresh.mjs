import { app_g_div_map_style } from "../../../love/public/src/app_g_div_map_style.mjs";
import { app_g_tile } from "../../../love/public/src/app_g_tile.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { catch_null_async } from "../../../love/public/src/catch_null_async.mjs";
import { app_g_player_img } from "../../../love/public/src/app_g_player_img.mjs";
import { g_game_prefix } from "../../../love/public/src/g_game_prefix.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { html_on_load_wait } from "../../../love/public/src/html_on_load_wait.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { g_icon_cross } from "../../../love/public/src/g_icon_cross.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_scroll_center_container_now } from "../../../love/public/src/html_scroll_center_container_now.mjs";
import { app_g_click } from "../../../love/public/src/app_g_click.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { g_character_img } from "../../../love/public/src/g_character_img.mjs";
export async function app_g_refresh(context, div_map_container) {
  const game_prefix = g_game_prefix();
  html_clear(div_map_container);
  let div_map = html_div(div_map_container);
  property_set_exists_not(div_map, "container", div_map_container);
  async function refresh() {
    let context2 = error();
    await app_g_refresh(context2, div_map_container);
  }
  let g = await catch_null_async(app_g_game_save_get);
  if (null_is(g)) {
    await app_g_main(context);
    return;
  }
  let npcs = property_get(g, "npcs");
  let player = property_get(g, "player");
  let rows = property_get(g, "rows");
  let player_img_c = app_g_player_img(div_map, game_prefix, player);
  function lambda12(npc) {
    let ci = g_character_img(div_map, game_prefix, npc);
    let christian = property_get(npc, "christian");
    if (christian) {
      g_icon_cross(div_map, npc);
    }
  }
  each(npcs, lambda12);
  await app_g_div_map_style(div_map);
  function lambda2(columns, y) {
    function lambda(r, x) {
      app_g_tile(div_map, r, x, y);
    }
    each_index(columns, lambda);
  }
  each_index(rows, lambda2);
  async function on_click(e) {
    await app_g_click(e, div_map, player_img_c, refresh);
  }
  html_on_click(div_map, on_click);
  await html_on_load_wait();
  let container = property_get(div_map, "container");
  await html_scroll_center_container_now(player_img_c, container);
}
