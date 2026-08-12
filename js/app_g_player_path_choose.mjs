import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_g_day_state_property } from "./app_g_day_state_property.mjs";
import { g_game_npcs_standing } from "./g_game_npcs_standing.mjs";
export function app_g_player_path_choose(g, player, to) {
  "the way the player walks somewhere: around everybody if there is a way around, and only if there is none, straight through the people in the way - each of whom trades places with the player as they meet.";
  "Around is asked first and kept whenever it exists, so people are still walked around politely and nobody is ever moved for a shortcut. Going through is the last answer, not the first, and it is only ever a shorter walk than no walk at all.";
  "Without it a player can be walled in by people and stay walled in for good. Strangers do not move, and the line that the player is walking is forgotten the moment the page is loaded again - so a player shut in by their own line and then reloading would find the line had become strangers standing in a wall, with nothing left that could ever open it.";
  "It is not offered while somebody is walking behind the player. Trading places sends that person into the tile the player is leaving, which is the very tile the front of the line steps into, and one tile cannot hold two people. A line already has its own way past itself - it backs down its own trail.";
  let around = g_coordinates_path_shortest(g, player, to);
  let open = list_empty_not_is(around);
  if (open) {
    return around;
  }
  let followers = app_g_day_state_property("followers");
  let line = list_empty_not_is(followers);
  if (line) {
    return around;
  }
  let nobody = [];
  let alone = g_game_npcs_standing(g, nobody);
  let through = g_coordinates_path_shortest(alone, player, to);
  return through;
}
