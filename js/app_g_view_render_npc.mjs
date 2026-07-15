import { app_g_view_get } from "./app_g_view_get.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_conversation } from "./app_g_conversation.mjs";
import { html_remove } from "./html_remove.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { app_g_click_npc_study } from "./app_g_click_npc_study.mjs";
import { app_g_click_npc_pray } from "./app_g_click_npc_pray.mjs";
import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
import { list_single } from "./list_single.mjs";
import { error_json } from "./error_json.mjs";
export async function app_g_view_render_npc(div_map) {
  let view = await app_g_view_get();
  let x = property_get(view, "x");
  let y = property_get(view, "y");
  let phase = property_get(view, "phase");
  let npcs = await app_g_npcs_get();
  let matched = list_filter_object_includes(npcs, {
    x,
    y,
  });
  let npc = list_single(matched);
  let player = await app_g_player_get();
  let overlay = app_g_overlay(div_map);
  async function overlay_close() {
    await app_g_player_save(player);
    await app_g_view_set(null);
    html_remove(overlay);
  }
  if (phase === "study") {
    await app_g_click_npc_study(player, overlay, overlay_close, div_map);
    return;
  }
  if (phase === "pray") {
    await app_g_click_npc_pray(player, overlay, overlay_close, div_map);
    return;
  }
  if (phase === "conversation") {
    let prayer = property_get(player, "prayer");
    await app_g_conversation(
      prayer,
      npc,
      overlay,
      overlay_close,
      div_map,
    );
    return;
  }
  error_json({
    hint: "the saved conversation could not be reopened because its phase is not recognized",
    phase,
    view,
  });
}
