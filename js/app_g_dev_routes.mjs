import { app_g_dev_routes_day_conversation } from "./app_g_dev_routes_day_conversation.mjs";
import { app_g_dev_routes_disciple } from "./app_g_dev_routes_disciple.mjs";
import { app_g_dev_routes_believe } from "./app_g_dev_routes_believe.mjs";
import { app_g_dev_routes_hru } from "./app_g_dev_routes_hru.mjs";
import { app_g_dev_routes_gospel_share } from "./app_g_dev_routes_gospel_share.mjs";
import { app_g_dev_routes_gratitude } from "./app_g_dev_routes_gratitude.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_dev_routes_npc_path_clear } from "./app_g_dev_routes_npc_path_clear.mjs";
import { object_assign } from "./object_assign.mjs";
import { app_g_characters } from "./app_g_characters.mjs";
import { localhost_is } from "./localhost_is.mjs";
import { app_g_design } from "./app_g_design.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
export function app_g_dev_routes(div_map) {
  let r = app_g_dev_routes_gratitude(div_map);
  let r3 = app_g_dev_routes_gospel_share(r, div_map);
  let r4 = app_g_dev_routes_hru(r3);
  let hru = property_get(r4, "hru");
  let r5 = app_g_dev_routes_believe(r4);
  let r2 = app_g_dev_routes_disciple(r5);
  let r6 = app_g_dev_routes_day_conversation(r2);
  let day_conversation = property_get(r6, "day_conversation");
  let believe = property_get(r6, "believe");
  let gospel_share = property_get(r6, "gospel_share");
  let quick = property_get(r6, "quick");
  let unbeliever = property_get(r6, "unbeliever");
  let day_unbelievers = property_get(r6, "day_unbelievers");
  let study = property_get(r6, "study");
  let pray = property_get(r6, "pray");
  let day_parts = property_get(r6, "day_parts");
  let day_hours = property_get(r6, "day_hours");
  let day_baptisms_collect = property_get(r6, "day_baptisms_collect");
  let discern = property_get(r6, "discern");
  let dove = property_get(r6, "dove");
  let gratitude = property_get(r6, "gratitude");
  let disciple = property_get(r6, "disciple");
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
  ("the crowd-parting doors are DERIVED from the arrangements that make the way open, one route each, so a new arrangement is one entry in a list rather than a route written here and a card written somewhere else");
  let clearing = app_g_dev_routes_npc_path_clear(div_map);
  object_assign(routes, clearing);
  let local = localhost_is();
  if (local) {
    ("#design is the ONE route that stays localhost-only, and it is held back HERE rather than at the dispatcher because this registry is what both the dispatcher and the #index directory read — gating it once means the card cannot be listed on a screen where tapping it would do nothing. every other route ships, so the dev screens are reachable on a phone against the deployed site, where there is no localhost to develop from. design is different in kind: it is the private design notes, not a mechanic under test");
    property_set(routes, "design", design);
  }
  return routes;
}
