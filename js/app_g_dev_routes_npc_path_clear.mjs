import { g_npc_path_clear_situations } from "./g_npc_path_clear_situations.mjs";
import { app_g_npc_path_clear_start } from "./app_g_npc_path_clear_start.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { each } from "./each.mjs";
export function app_g_dev_routes_npc_path_clear(div_map) {
  "one #npc_path_clear_<name> route for every arrangement of people that opens the way differently - the doors onto the crowd parting, which is otherwise reachable only by happening to tap the right tile in a real game.";
  "The routes are DERIVED from the arrangements rather than written beside them, so a new one is one entry in the list and its door, its name and its card in the directory all follow. Written out by hand they could disagree, and the way they would disagree is a route that is listed and does nothing.";
  let situations = g_npc_path_clear_situations();
  let routes = {};
  function route_add(situation) {
    let name = property_get(situation, "name");
    let key = list_join_empty(["npc_path_clear_", name]);
    async function open() {
      await app_g_view_set(null);
      await app_g_npc_path_clear_start(situation, div_map);
    }
    property_set(routes, key, open);
  }
  each(situations, route_add);
  return routes;
}
