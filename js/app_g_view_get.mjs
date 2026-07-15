import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_view_get() {
  let g = await app_g_game_save_get();
  let view = property_get(g, "view");
  return view;
}
