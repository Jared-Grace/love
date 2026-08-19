import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
import { list_single } from "./list_single.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_view_phase_study } from "./app_g_view_phase_study.mjs";
export async function app_g_view_render_npc_right(view, div_map) {
  arguments_assert(arguments, 2);
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
    html_remove(overlay);
    await app_g_view_set(null);
  }
  let right = app_g_view_phase_study();
  let r = {
    phase,
    npc,
    player,
    overlay,
    overlay_close,
    right,
  };
  return r;
}
