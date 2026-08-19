import { app_g_map_generate } from "./app_g_map_generate.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { g_coordinates } from "./g_coordinates.mjs";
import { g_coordinates_land_reachable_get } from "./g_coordinates_land_reachable_get.mjs";
import { g_player_img_get } from "./g_player_img_get.mjs";
export function app_g_ground_new() {
  "A fresh piece of ground for somebody to be set down on: the rows themselves, every square named, the land that can actually be walked to, and the picture whoever is being set down will wear.";
  "Both worlds begin exactly here, because this is not either game's opinion - it is what having somewhere to stand means. What differs is what is set down on it afterwards, a crowd to talk to or a crowd to pray for, and that is left to the caller.";
  "The reachable land is worked out here rather than left to the caller, because ground with an island nobody can reach is ground that will set somebody down where they can never walk from, and neither caller should have to remember that.";
  arguments_assert(arguments, 0);
  let rows = app_g_map_generate();
  let coordinates = g_coordinates(rows);
  let coordinates_land = g_coordinates_land_reachable_get(coordinates);
  let player_img = g_player_img_get();
  let ground = { rows, coordinates, coordinates_land, player_img };
  return ground;
}
