import { app_g_dev_routes_design } from "./app_g_dev_routes_design.mjs";
import { app_g_dev_routes_characters } from "./app_g_dev_routes_characters.mjs";
import { app_g_dev_routes_day_conversation } from "./app_g_dev_routes_day_conversation.mjs";
import { app_g_dev_routes_disciple } from "./app_g_dev_routes_disciple.mjs";
import { app_g_dev_routes_believe } from "./app_g_dev_routes_believe.mjs";
import { app_g_dev_routes_hru } from "./app_g_dev_routes_hru.mjs";
import { app_g_dev_routes_gospel_share } from "./app_g_dev_routes_gospel_share.mjs";
import { app_g_dev_routes_gratitude } from "./app_g_dev_routes_gratitude.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_dev_routes_npc_path_clear } from "./app_g_dev_routes_npc_path_clear.mjs";
import { object_assign } from "./object_assign.mjs";
import { localhost_is } from "./localhost_is.mjs";
import { property_set } from "./property_set.mjs";
export function app_g_dev_routes(div_map) {
  let r = app_g_dev_routes_gratitude(div_map);
  let r3 = app_g_dev_routes_gospel_share(r, div_map);
  let r4 = app_g_dev_routes_hru(r3);
  let hru = property_get(r4, "hru");
  let r5 = app_g_dev_routes_believe(r4);
  let r2 = app_g_dev_routes_disciple(r5);
  let r6 = app_g_dev_routes_day_conversation(r2);
  let day_conversation = property_get(r6, "day_conversation");
  let r7 = app_g_dev_routes_characters(r6);
  let r8 = app_g_dev_routes_design(r7);
  let design = property_get(r8, "design");
  let believe = property_get(r8, "believe");
  let gospel_share = property_get(r8, "gospel_share");
  let quick = property_get(r8, "quick");
  let unbeliever = property_get(r8, "unbeliever");
  let day_unbelievers = property_get(r8, "day_unbelievers");
  let study = property_get(r8, "study");
  let pray = property_get(r8, "pray");
  let day_parts = property_get(r8, "day_parts");
  let day_hours = property_get(r8, "day_hours");
  let day_baptisms_collect = property_get(r8, "day_baptisms_collect");
  let discern = property_get(r8, "discern");
  let dove = property_get(r8, "dove");
  let gratitude = property_get(r8, "gratitude");
  let disciple = property_get(r8, "disciple");
  let characters = property_get(r8, "characters");
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
