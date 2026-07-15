import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_view_render } from "./app_g_view_render.mjs";
export async function app_g_menu_new(div_map) {
  await app_g_view_set({
    kind: "menu",
  });
  await app_g_view_render(div_map);
}
