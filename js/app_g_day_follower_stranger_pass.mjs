import { g_coordinates_npc_standing } from "./g_coordinates_npc_standing.mjs";
import { null_is } from "./null_is.mjs";
import { g_coordinates_tile } from "./g_coordinates_tile.mjs";
import { app_g_npc_move } from "./app_g_npc_move.mjs";
export function app_g_day_follower_stranger_pass(g, npc, to, delay) {
  "somebody who is not in the line, standing where a member of it is about to step, trades places with them - the same trade the player made with that person a moment earlier";
  "the player passing a stranger leaves them standing in the tile the player gave up, and that is the very tile the front of the line walks into. so the trade is owed again by every member in turn, and because the line is walked from the front the stranger is handed one place further back at each of them until they are standing behind the whole of it";
  "nobody in the line is ever found this way. a member's next tile is the one the member ahead of them has just left, so the only person who can be standing there is one who was put there from outside the line";
  let other = g_coordinates_npc_standing(g, to);
  let empty = null_is(other);
  if (empty) {
    return;
  }
  let tile = g_coordinates_tile(npc);
  app_g_npc_move(other, tile, delay);
}
