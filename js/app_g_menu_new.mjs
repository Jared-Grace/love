import { app_g_view_set_render } from "./app_g_view_set_render.mjs";
import { app_g_view_kind_menu } from "./app_g_view_kind_menu.mjs";
export async function app_g_menu_new(div_map) {
  await app_g_view_set_render(
    {
      kind: app_g_view_kind_menu(),
    },
    div_map,
  );
}
