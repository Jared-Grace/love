import { app_g_day_baptisms_collect_start } from "./app_g_day_baptisms_collect_start.mjs";
import { property_list_get } from "./property_list_get.mjs";
import { g_prayers_conversation } from "./g_prayers_conversation.mjs";
import { app_g_dev_routes_npc_view } from "./app_g_dev_routes_npc_view.mjs";
import { app_g_npc_unconverted_random } from "./app_g_npc_unconverted_random.mjs";
import { app_g_dev_routes_npc_view_of } from "./app_g_dev_routes_npc_view_of.mjs";
import { app_g_day_start } from "./app_g_day_start.mjs";
import { app_g_characters } from "./app_g_characters.mjs";
import { localhost_is } from "./localhost_is.mjs";
import { app_g_design } from "./app_g_design.mjs";
import { g_gender_pronouns } from "./g_gender_pronouns.mjs";
import { g_conversation_generate } from "./g_conversation_generate.mjs";
import { g_conversation_key } from "./g_conversation_key.mjs";
import { fn_name } from "./fn_name.mjs";
import { noop } from "./noop.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_sky_choices } from "./app_g_sky_choices.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
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
import { property_get } from "./property_get.mjs";
import { app_g_hour_choices } from "./app_g_hour_choices.mjs";
import { app_g_day_conversation_demo } from "./app_g_day_conversation_demo.mjs";
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
  async function unbeliever() {
    let npc = await app_g_npc_unconverted_random();
    let result = app_g_view_phase_conversation();
    await app_g_dev_routes_npc_view_of(npc, result);
  }
  async function quick() {
    "the #quick dev route: open an unbeliever whose conversation is trimmed to ONLY the gospel-share turn, so answering that one objection lands straight on the closing prayer that converts — the fast path to test convert-on-gospel-share without walking the how-are-you and believe turns first.";
    let npc = await app_g_npc_unconverted_random();
    let gender = property_get(npc, "gender");
    let pronouns = g_gender_pronouns(gender);
    let full = g_conversation_generate(pronouns);
    let gospel = property_list_get(full, "turns", 0);
    ("the conversation the game generated is NARROWED here, never rebuilt. it used to be replaced with a fresh object spelling out the two fields this route cares about, which made this the second place that knew what a conversation is made of - so a field the generator started adding was simply absent here, and the screen under test was one the game could no longer produce.");
    property_set(full, "turns", [gospel]);
    property_set(full, "converts", true);
    let key = g_conversation_key();
    property_set(npc, key, full);
    let phase = app_g_view_phase_conversation();
    await app_g_dev_routes_npc_view_of(npc, phase);
  }
  async function gospel_share() {
    let result2 = app_g_view_phase_gospel();
    await app_g_dev_routes_npc_view(result2);
  }
  async function hru() {
    let result3 = app_g_view_phase_how();
    await app_g_dev_routes_npc_view(result3);
  }
  async function believe() {
    let result4 = app_g_view_phase_believe();
    await app_g_dev_routes_npc_view(result4);
  }
  async function disciple() {
    let result5 = app_g_view_phase_disciple();
    await app_g_dev_routes_npc_view(result5);
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
    ("the #pray screen: the closing prayer turn of a conversation, with the petitions the GAME offers, asked for from ",
      fn_name("g_prayers_conversation"),
      " rather than written out here.");
    ("two petitions used to be spelled into this route by hand, and neither of them was a prayer the game could produce. so the screen under test was showing words that existed nowhere else in the game - the one thing a preview must never do, because what it proves is then about itself.");
    await app_g_view_set(null);
    function done() {}
    let prayer_texts = g_prayers_conversation();
    app_g_pray_turn(prayer_texts, noop, done);
  }
  async function day_parts() {
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
  async function day_hours() {
    ("the #day_hours previewer: pick any of the 24 wall-clock hours to see the sky at that time — helps CHOOSE the day's cutoff (how far past sunset the workday runs before it looks dark). paints via the same clock→phase mapping (",
      fn_name("g_clock_sky_phase"),
      ") the real day uses, so what you pick here IS what the day will show");
    await app_g_view_set(null);
    await app_g_hour_choices();
  }
  async function day_unbelievers() {
    "the #day_unbelievers demo: 3 nearby unbelievers become today's ONLY talkable people (chosen close together so the walk between them is short). each gets a soft speech-bubble marker; every OTHER npc gives a randomized 'busy' line instead of a conversation (the gate lives in the conversation entry, reading the day session). foundation for the discernment-walk + slice-time day mechanic";
    "there is no button on the map for the discernment prayer. it is prayed from the tap-yourself menu, under Pray, where every other prayer in the game is prayed - so the map here holds only the world and the people in it, and the demo reaches its one mechanic through the door the real game already has.";
    ("the day itself is not written here. this route only opens the door and calls ",
      fn_name("app_g_day_start"),
      ", so the day the demo plays and the day the real game will play are one piece of code rather than two that agree today.");
    await app_g_view_set(null);
    await app_g_day_start(div_map);
  }
  async function day_baptisms_collect() {
    ("the #day_baptisms_collect demo (sibling of #day_unbelievers under the 'day' group): the OTHER half of a day - the same three chosen people, but two of them have already believed today, so the player finishes the last conversation and then GATHERS the day's believers and walks them to the water (",
      fn_name("app_g_day_baptisms_collect_start"),
      "). converts are baptized the same day, so who may be collected is exactly who believed today - nothing is stored to say so");
    await app_g_view_set(null);
    await app_g_day_baptisms_collect_start(div_map);
  }
  async function day_conversation() {
    ("the #day_conversation demo (sibling of #day_unbelievers under the 'day' group): open a REAL unbeliever conversation as a ONE-slice day, so it spans the whole 6 AM sunrise → 7 PM dusk and the change is easy to SEE as you answer each turn (",
      fn_name("app_g_day_conversation_demo"),
      "). the real game runs many slices, so a conversation there only ages its OWN slice, not the whole day");
    await app_g_view_set(null);
    await app_g_day_conversation_demo();
  }
  async function characters() {
    ("the #characters contact sheet: every character sprite the game owns, each turning once all the way round (",
      fn_name("app_g_characters"),
      "). a sibling of #design in kind - it shows you what the game is MADE of rather than putting a mechanic under test - and it ships, because a rotation that came out wrong is a thing to check against the deployed art on a phone");
    await app_g_view_set(null);
    app_g_characters();
  }
  async function design() {
    ("the #design reader: every memory note about this game's design, gathered and shown as collapsible cards (",
      fn_name("app_g_design"),
      "). not a mechanic under test like its siblings — it is the DESIGN behind them, kept in the game so it can be read where the work happens");
    await app_g_view_set(null);
    await app_g_design();
  }
  let routes = {
    study,
    unbeliever,
    quick,
    day_unbelievers,
    day_baptisms_collect,
    day_conversation,
    day_parts,
    day_hours,
    gospel_share,
    hru,
    believe,
    disciple,
    discern,
    dove,
    gratitude,
    pray,
    characters,
  };
  let local = localhost_is();
  if (local) {
    ("#design is the ONE route that stays localhost-only, and it is held back HERE rather than at the dispatcher because this registry is what both the dispatcher and the #index directory read — gating it once means the card cannot be listed on a screen where tapping it would do nothing. every other route ships, so the dev screens are reachable on a phone against the deployed site, where there is no localhost to develop from. design is different in kind: it is the private design notes, not a mechanic under test");
    property_set(routes, "design", design);
  }
  return routes;
}
