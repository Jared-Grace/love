import { app_g_view_get } from "./app_g_view_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_view_render_menu } from "./app_g_view_render_menu.mjs";
export async function app_g_view_render(div_map) {
  let view = await app_g_view_get();
  if (null_is(view)) {
    return;
  }
  let kind = property_get(view, "kind");
  if (kind === "menu") {
    await app_g_view_render_menu(div_map);
  }
}
