import { app_shared_game_npc_move } from "./app_shared_game_npc_move.mjs";
import { g_coordinates_member_is } from "./g_coordinates_member_is.mjs";
import { g_coordinates_land } from "./g_coordinates_land.mjs";
import { g_coordinates_distance_squared } from "./g_coordinates_distance_squared.mjs";
import { g_npc_near_squared } from "./g_npc_near_squared.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { each_index } from "./each_index.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function app_g_npcs_strays_send_away(npcs, wanted, coordinates, player) {
  "walk everybody the arrangement did not ask for out of sight of it, and say how many were sent.";
  "One person who happens to be standing nearby is enough to give a way round where the arrangement says there is none, and then nothing parts and the screen quietly shows the wrong thing. So they are sent AWAY rather than left standing.";
  "Every stray goes to a tile NOBODY is on. Two people may never share a tile: a person's picture and the cross over them are remembered by where that person is standing, so a second arrival takes over the first one's drawer and the first drags somebody else's picture about from then on.";
  "It must run AFTER the spots are filled, not before. Whoever the filling has already moved onto a wanted tile is no longer a stray, and this asks the map as it stands.";
  let near_squared = g_npc_near_squared();
  let wanted_is = g_coordinates_member_is(wanted);
  let npc_is = g_coordinates_member_is(npcs);
  function stray_is(npc) {
    let d = g_coordinates_distance_squared(npc, player);
    let near = less_than(d, near_squared);
    let placed = wanted_is(npc);
    let unplaced = not(placed);
    let r = near && unplaced;
    return r;
  }
  let strays = list_filter(npcs, stray_is);
  function far_free_is(tile) {
    let d = g_coordinates_distance_squared(tile, player);
    let far = greater_than(d, near_squared);
    let taken = npc_is(tile);
    let free = not(taken);
    let r = far && free;
    return r;
  }
  let land = g_coordinates_land(coordinates);
  let away = list_filter(land, far_free_is);
  function evacuate(npc, index) {
    let tile = away[index];
    let none = undefined_is(tile);
    if (none) {
      return;
    }
    app_shared_game_npc_move(npc, tile, 0);
  }
  each_index(strays, evacuate);
  let sent = list_size(strays);
  return sent;
}
