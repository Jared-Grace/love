import { fn_name } from "./fn_name.mjs";
import { noop } from "./noop.mjs";
import { app_g_day_discern_button } from "./app_g_day_discern_button.mjs";
import { app_g_day_talkables_choose } from "./app_g_day_talkables_choose.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_day_talkable_marker } from "./app_g_day_talkable_marker.mjs";
import { each } from "./each.mjs";
import { app_g_sky_choices } from "./app_g_sky_choices.mjs";
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
import { app_g_sky_snap } from "./app_g_sky_snap.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_day_sky_update } from "./app_g_day_sky_update.mjs";
import { app_g_hour_choices } from "./app_g_hour_choices.mjs";
import { app_g_day_conversation_demo } from "./app_g_day_conversation_demo.mjs";
import { list_size } from "./list_size.mjs";
export function app_g_dev_routes(div_map) {
  ("registry of dev-only hash routes for ",
    fn_name("app_g"),
    " (open g.html#<name>): each value sets up that test screen. SINGLE SOURCE OF TRUTH — ",
    fn_name("app_g_dev_if"),
    " dispatches from it and ",
    fn_name("app_g_dev_index"),
    " lists its keys, so the #index directory can never drift from the real routes");
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
    let unconverted = list_filter_object_includes(npcs, {
      christian: false,
    });
    let npc = list_random_item(unconverted);
    let result = app_g_view_phase_conversation();
    await npc_view_of(npc, result);
  }
  async function gospel_share() {
    let result2 = app_g_view_phase_gospel();
    await npc_view(result2);
  }
  async function hru() {
    let result3 = app_g_view_phase_how();
    await npc_view(result3);
  }
  async function believe() {
    let result4 = app_g_view_phase_believe();
    await npc_view(result4);
  }
  async function disciple() {
    let result5 = app_g_view_phase_disciple();
    await npc_view(result5);
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
    let prayer_texts = [
      "comfort them and carry their burden",
      "settle their doubts and help them trust You",
    ];
    app_g_pray_turn(prayer_texts, noop, done);
  }
  async function sky() {
    ("a testbed for the day-drift, two ways to move it: WALK the map (each move drifts the sky one colour, morning→noon→afternoon→sunset→night→sunrise→back), OR click a pill in the always-visible CHOICE panel (top-right) to jump straight to any sky. it REMEMBERS the current sky across refresh — snaps to the persisted phase instead of resetting to morning, because both walking (",
      fn_name("app_g_sky_step"),
      ") and jumping (",
      fn_name("app_g_sky_jump"),
      ") now write g.sky_phase to disk. this is the same smooth drift the real conversation uses");
    app_g_sky_demo_enable();
    await app_g_view_set(null);
    await app_g_sky_choices();
    await app_g_sky_snap();
  }
  async function hour() {
    ("the #hour previewer: pick any of the 24 wall-clock hours to see the sky at that time — helps CHOOSE the day's cutoff (how far past sunset the workday runs before it looks dark). paints via the same clock→phase mapping (",
      fn_name("g_clock_sky_phase"),
      ") the real day uses, so what you pick here IS what the day will show");
    await app_g_view_set(null);
    await app_g_hour_choices();
  }
  async function day_unbelievers() {
    "the #day_unbelievers demo: 3 nearby unbelievers become today's ONLY talkable people (chosen close together so the walk between them is short). each gets a soft speech-bubble marker; every OTHER npc gives a randomized 'busy' line instead of a conversation (the gate lives in the conversation entry, reading the day session). foundation for the discernment-walk + slice-time day mechanic";
    await app_g_view_set(null);
    let npcs = await app_g_npcs_get();
    let three = app_g_day_talkables_choose(npcs);
    let state = app_g_day_state();
    property_set(state, "talkable", three);
    let value = list_size(three);
    property_set(state, "slices_total", value);
    property_set(state, "slices_done", 0);
    await app_g_day_sky_update();
    function mark(npc) {
      app_g_day_talkable_marker(div_map, npc);
    }
    each(three, mark);
    app_g_day_discern_button(div_map);
  }
  async function day_conversation() {
    ("the #day_conversation demo (sibling of #day_unbelievers under the 'day' group): open a REAL unbeliever conversation as a ONE-slice day, so it spans the whole 6 AM sunrise → 7 PM dusk and the change is easy to SEE as you answer each turn (",
      app_g_day_conversation_demo.name,
      "). the real game runs many slices, so a conversation there only ages its OWN slice, not the whole day");
    await app_g_view_set(null);
    await app_g_day_conversation_demo();
  }
  let routes = {
    study,
    unbeliever,
    hour,
    day_unbelievers,
    day_conversation,
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
