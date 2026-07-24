import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
import { app_g_view_kind_npc } from "./app_g_view_kind_npc.mjs";
import { app_g_view_phase_conversation } from "./app_g_view_phase_conversation.mjs";
import { app_g_view_phase_gospel } from "./app_g_view_phase_gospel.mjs";
import { app_g_view_phase_how } from "./app_g_view_phase_how.mjs";
import { app_g_view_phase_believe } from "./app_g_view_phase_believe.mjs";
import { app_g_view_phase_disciple } from "./app_g_view_phase_disciple.mjs";
import { app_g_prayer_overlay } from "./app_g_prayer_overlay.mjs";
import { app_g_discern_prevented_overlay } from "./app_g_discern_prevented_overlay.mjs";
import { app_g_gratitude_overlay } from "./app_g_gratitude_overlay.mjs";
import { app_g_pray_turn } from "./app_g_pray_turn.mjs";
import { g_verses_waiting_prepare } from "./g_verses_waiting_prepare.mjs";
import { g_verses_hs_warning_prepare } from "./g_verses_hs_warning_prepare.mjs";
import { app_g_sky_demo_enable } from "./app_g_sky_demo_enable.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_snap } from "./app_g_sky_snap.mjs";
import { property_set } from "./property_set.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
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
  async function npc_view_of(npc, phase) {
    let view = {
      kind: app_g_view_kind_npc(),
      x: property_get(npc, "x"),
      y: property_get(npc, "y"),
      phase,
    };
    await app_g_view_set(view);
  }
  async function npc_view(phase) {
    let npcs = await app_g_npcs_get();
    let npc = list_random_item(npcs);
    await npc_view_of(npc, phase);
  }
  async function unbeliever() {
    let npcs = await app_g_npcs_get();
    let unconverted = list_filter_object_includes(npcs, { christian: false });
    let npc = list_random_item(unconverted);
    await npc_view_of(npc, app_g_view_phase_conversation());
  }
  async function gospel_share() {
    await npc_view(app_g_view_phase_gospel());
  }
  async function hru() {
    await npc_view(app_g_view_phase_how());
  }
  async function believe() {
    await npc_view(app_g_view_phase_believe());
  }
  async function disciple() {
    await npc_view(app_g_view_phase_disciple());
  }
  async function discern() {
    await app_g_view_set(null);
    await g_verses_waiting_prepare();
    app_g_prayer_overlay();
  }
  async function dove() {
    await app_g_view_set(null);
    await g_verses_hs_warning_prepare();
    let stays = null;
    app_g_discern_prevented_overlay(stays);
  }
  async function gratitude() {
    await app_g_view_set(null);
    app_g_gratitude_overlay();
  }
  async function pray() {
    await app_g_view_set(null);
    function done() {}
    let prayer_texts = ["comfort them and carry their burden", "settle their doubts and help them trust You"];
    app_g_pray_turn(prayer_texts, done);
  }
  async function sky() {
    ("walk the map and watch the day drift: enable the sky demo (each MOVE steps the sky one colour, smoothly) and show the plain walkable map (no overlay). STARTS AT MORNING (phase 0); walking forward drifts the whole ring morning→noon→afternoon→sunset→night→sunrise→(back to morning), so every keyframe and every transition is walkable. a live testbed for the smooth drift the real conversation uses");
    app_g_sky_demo_enable();
    await app_g_view_set(null);
    let g = await app_g_game_save_get();
    property_set(g, "sky_phase", 0);
    await app_g_sky_snap();
  }
  let routes = {
    study,
    unbeliever,
    gospel_share,
    hru,
    believe,
    disciple,
    discern,
    dove,
    gratitude,
    pray,
    sky,
  };
  return routes;
}
