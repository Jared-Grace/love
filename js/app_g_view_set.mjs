import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_game_save } from "./app_g_game_save.mjs";
export async function app_g_view_set(view) {
  let g = await app_g_game_save_get();
  property_set(g, "view", view);
  await app_g_game_save(g);
}
