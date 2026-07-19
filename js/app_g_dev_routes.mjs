import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
import { app_g_view_kind_npc } from "./app_g_view_kind_npc.mjs";
import { app_g_view_phase_conversation } from "./app_g_view_phase_conversation.mjs";
import { app_g_view_phase_gospel } from "./app_g_view_phase_gospel.mjs";
import { app_g_prayer_overlay } from "./app_g_prayer_overlay.mjs";
import { app_g_discern_prevented_overlay } from "./app_g_discern_prevented_overlay.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_dev_routes() {
  "registry of dev-only hash routes for app_g (open g.html#<name>): each value sets up that test screen. SINGLE SOURCE OF TRUTH — app_g_dev_if dispatches from it and app_g_dev_index lists its keys, so the #index directory can never drift from the real routes";
  async function study() {
    let view = {
      kind: app_g_view_kind_study(),
      text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds",
      word_index: 0,
    };
    await app_g_view_set(view);
  }
  async function npc_view(phase) {
    let npcs = await app_g_npcs_get();
    let npc = list_random_item(npcs);
    let view = {
      kind: app_g_view_kind_npc(),
      x: property_get(npc, "x"),
      y: property_get(npc, "y"),
      phase,
    };
    await app_g_view_set(view);
  }
  async function conversation() {
    await npc_view(app_g_view_phase_conversation());
  }
  async function gospel_share() {
    await npc_view(app_g_view_phase_gospel());
  }
  async function discern() {
    await app_g_view_set(null);
    app_g_prayer_overlay();
  }
  async function dove() {
    await app_g_view_set(null);
    let stays = null;
    app_g_discern_prevented_overlay(stays);
  }
  let routes = {
    study,
    conversation,
    gospel_share,
    discern,
    dove,
  };
  return routes;
}
