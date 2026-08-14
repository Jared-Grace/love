import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_npcs_spots_fill } from "./app_g_npcs_spots_fill.mjs";
import { app_g_npcs_strays_send_away } from "./app_g_npcs_strays_send_away.mjs";
import { app_g_day_guide_highlight } from "./app_g_day_guide_highlight.mjs";
import { app_g_toast } from "./app_g_toast.mjs";
import { g_npc_path_clear_places } from "./g_npc_path_clear_places.mjs";
import { g_coordinates_land_index } from "./g_coordinates_land_index.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_npc_path_clear_start(situation, div_map) {
  "stand the people where one named arrangement wants them, put the gold on the tile to tap, and say in one line what to watch for.";
  "It is the DOOR onto the crowd opening, never a second one of it. Nothing here moves anybody out of the player's way - it only decides who is standing where before the player taps, and everything after the tap is the game's own walk.";
  "Filling the spots and sending the strays away are two named things now, and this is only the order they go in. That order is not arbitrary: sending must come SECOND, because whoever the filling has just moved onto a wanted tile is no longer a stray, and the sending asks the map as it stands.";
  let g = await app_g_game_save_get();
  let player = await app_g_player_get();
  let coordinates = property_get(g, "coordinates");
  let npcs = property_get(g, "npcs");
  let land_index = g_coordinates_land_index(coordinates);
  let places = g_npc_path_clear_places(situation, player, land_index);
  let wanted = property_get(places, "people");
  let gold = property_get(places, "tap");
  let filled = app_g_npcs_spots_fill(npcs, wanted, player);
  let sent = app_g_npcs_strays_send_away(npcs, wanted, coordinates, player);
  app_g_day_guide_highlight(div_map, gold);
  let what = property_get(situation, "what");
  ("the line stays up long enough to tap and watch, because what it names happens once and is over in about a second");
  app_g_toast(what, 12000);
  let report = {
    filled,
    sent,
    gold,
  };
  return report;
}
