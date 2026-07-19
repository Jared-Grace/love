import { app_g_player_img } from "./app_g_player_img.mjs";
import { app_g_div_map_on_click } from "./app_g_div_map_on_click.mjs";
import { app_g_game_save_get_or_refresh } from "./app_g_game_save_get_or_refresh.mjs";
import { app_g_player_scroll_center } from "./app_g_player_scroll_center.mjs";
import { app_g_div_map_new } from "./app_g_div_map_new.mjs";
import { html_clear } from "./html_clear.mjs";
import { null_is } from "./null_is.mjs";
import { app_g_reset_if } from "./app_g_reset_if.mjs";
import { app_g_title_hash } from "./app_g_title_hash.mjs";
import { app_g_dev_if } from "./app_g_dev_if.mjs";
import { app_g_view_render } from "./app_g_view_render.mjs";
export async function app_g_refresh(context, div_map_container) {
  await app_g_reset_if();
  app_g_title_hash();
  console.time("g:game_save");
  let g = await app_g_game_save_get_or_refresh(context);
  console.timeEnd("g:game_save");
  if (null_is(g)) {
    return;
  }
  html_clear(div_map_container);
  console.time("g:map_new(625 tiles+npcs)");
  let div_map = await app_g_div_map_new(div_map_container);
  console.timeEnd("g:map_new(625 tiles+npcs)");
  let player_img_c = await app_g_player_img(div_map);
  app_g_div_map_on_click(div_map, player_img_c);
  console.time("g:scroll_center");
  await app_g_player_scroll_center(div_map, player_img_c);
  console.timeEnd("g:scroll_center");
  await app_g_dev_if();
  console.time("g:view_render");
  await app_g_view_render(div_map);
  console.timeEnd("g:view_render");
}
