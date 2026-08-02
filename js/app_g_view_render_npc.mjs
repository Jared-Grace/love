import { equal } from "./equal.mjs";
import { app_g_view_get } from "./app_g_view_get.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_conversation } from "./app_g_conversation.mjs";
import { app_g_gospel } from "./app_g_gospel.mjs";
import { html_remove } from "./html_remove.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { app_g_click_npc_study } from "./app_g_click_npc_study.mjs";
import { app_g_click_npc_pray } from "./app_g_click_npc_pray.mjs";
import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
import { list_single } from "./list_single.mjs";
import { app_g_view_phase_study } from "./app_g_view_phase_study.mjs";
import { app_g_view_phase_pray } from "./app_g_view_phase_pray.mjs";
import { app_g_view_phase_conversation } from "./app_g_view_phase_conversation.mjs";
import { app_g_view_phase_gospel } from "./app_g_view_phase_gospel.mjs";
import { app_g_view_phase_how } from "./app_g_view_phase_how.mjs";
import { app_g_view_phase_believe } from "./app_g_view_phase_believe.mjs";
import { app_g_view_phase_disciple } from "./app_g_view_phase_disciple.mjs";
import { app_g_how } from "./app_g_how.mjs";
import { app_g_believe } from "./app_g_believe.mjs";
import { app_g_disciple } from "./app_g_disciple.mjs";
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
    html_remove(overlay);
    await app_g_view_set(null);
  }
  let right = app_g_view_phase_study();
  if (equal(phase, right)) {
    await app_g_click_npc_study(player, overlay, overlay_close, div_map);
    return;
  }
  let right2 = app_g_view_phase_pray();
  if (equal(phase, right2)) {
    await app_g_click_npc_pray(player, overlay, overlay_close, div_map);
    return;
  }
  let right3 = app_g_view_phase_conversation();
  if (equal(phase, right3)) {
    let prayer = property_get(player, "prayer");
    await app_g_conversation(prayer, npc, overlay, overlay_close, div_map);
    return;
  }
  let right4 = app_g_view_phase_gospel();
  if (equal(phase, right4)) {
    await app_g_gospel(overlay, npc, overlay_close, player, div_map);
    return;
  }
  let right5 = app_g_view_phase_how();
  if (equal(phase, right5)) {
    app_g_how(overlay, npc, overlay_close);
    return;
  }
  let right6 = app_g_view_phase_believe();
  if (equal(phase, right6)) {
    app_g_believe(overlay, npc, overlay_close);
    return;
  }
  let right7 = app_g_view_phase_disciple();
  if (equal(phase, right7)) {
    app_g_disciple(overlay, npc, overlay_close);
    return;
  }
  error_json({
    hint: "the saved conversation could not be reopened because its phase is not recognized",
    phase,
    view,
  });
}
