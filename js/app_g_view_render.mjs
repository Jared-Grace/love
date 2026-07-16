import { app_g_view_get } from "./app_g_view_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_view_render_menu } from "./app_g_view_render_menu.mjs";
import { app_g_view_render_npc } from "./app_g_view_render_npc.mjs";
import { app_g_view_render_study } from "./app_g_view_render_study.mjs";
import { app_g_view_render_opener } from "./app_g_view_render_opener.mjs";
import { app_g_view_kind_menu } from "./app_g_view_kind_menu.mjs";
import { app_g_view_kind_npc } from "./app_g_view_kind_npc.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
import { app_g_view_kind_opener } from "./app_g_view_kind_opener.mjs";
import { error_json } from "./error_json.mjs";
export async function app_g_view_render(div_map) {
  let view = await app_g_view_get();
  if (null_is(view)) {
    return;
  }
  let kind = property_get(view, "kind");
  if (kind === app_g_view_kind_menu()) {
    await app_g_view_render_menu(div_map);
    return;
  }
  if (kind === app_g_view_kind_npc()) {
    await app_g_view_render_npc(div_map);
    return;
  }
  if (kind === app_g_view_kind_study()) {
    await app_g_view_render_study(div_map);
    return;
  }
  if (kind === app_g_view_kind_opener()) {
    await app_g_view_render_opener(div_map);
    return;
  }
  error_json({
    hint: "the saved overlay could not be reopened because its kind is not recognized",
    kind,
    view,
  });
}
