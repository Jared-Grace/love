import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_view_render } from "./app_g_view_render.mjs";
import { app_g_map_scroll_settled } from "./app_g_map_scroll_settled.mjs";
import { app_g_game_save } from "./app_g_game_save.mjs";
export async function app_g_view_set_render(view, div_map) {
  let g = await app_g_game_save_get();
  property_set(g, "view", view);
  await app_g_view_render(div_map);
  await app_g_map_scroll_settled(div_map);
  await app_g_game_save(g);
}
