import { property_get } from "./property_get.mjs";
import { app_g_day_state_property } from "./app_g_day_state_property.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
export function app_g_day_line_game_without(g) {
  "the map as the pathfinder sees it once the people walking behind the player have stood aside.";
  "The same map and the same everybody else: only the line is taken out. It is asked so the player can be led somewhere their OWN line is standing in front of - which is what happens the moment they walk into a dead end and then want to leave again, because the way out is the way they came in and their line is standing on it.";
  "Everybody else stays an obstacle, so this never walks the player through a stranger. It answers one question only - is my own line the only thing in the way - and the walking itself still goes one tile at a time with nobody ever sharing a tile.";
  let npcs = property_get(g, "npcs");
  let followers = app_g_day_state_property("followers");
  let others = list_without_multiple(npcs, followers);
  let without = g_game_npcs_standing(g, others);
  return without;
}
