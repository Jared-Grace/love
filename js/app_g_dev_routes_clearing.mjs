import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_dev_routes_believe } from "./app_g_dev_routes_believe.mjs";
import { app_g_dev_routes_disciple } from "./app_g_dev_routes_disciple.mjs";
import { app_g_dev_routes_day_conversation } from "./app_g_dev_routes_day_conversation.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_dev_routes_characters } from "./app_g_dev_routes_characters.mjs";
import { app_g_dev_routes_design } from "./app_g_dev_routes_design.mjs";
import { app_g_dev_routes_collect } from "./app_g_dev_routes_collect.mjs";
import { app_g_dev_routes_npc_path_clear } from "./app_g_dev_routes_npc_path_clear.mjs";
export function app_g_dev_routes_clearing(r4, hru, div_map) {
  arguments_assert(arguments, 3);
  let r5 = app_g_dev_routes_believe(r4);
  let r2 = app_g_dev_routes_disciple(r5);
  let r6 = app_g_dev_routes_day_conversation(r2);
  let day_conversation = property_get(r6, "day_conversation");
  let r7 = app_g_dev_routes_characters(r6);
  let r8 = app_g_dev_routes_design(r7);
  let design = property_get(r8, "design");
  let routes = app_g_dev_routes_collect(r8, day_conversation, hru);
  ("the crowd-parting doors are DERIVED from the arrangements that make the way open, one route each, so a new arrangement is one entry in a list rather than a route written here and a card written somewhere else");
  let clearing = app_g_dev_routes_npc_path_clear(div_map);
  let r = {
    design,
    routes,
    clearing,
  };
  return r;
}
