import { g_coordinates_npc_standing } from "./g_coordinates_npc_standing.mjs";
import { null_is } from "./null_is.mjs";
import { g_coordinates_tile } from "./g_coordinates_tile.mjs";
import { app_g_npc_move } from "./app_g_npc_move.mjs";
export function app_g_player_npc_swap_if(g, from, to) {
  "if somebody is standing where the player is about to step, the two of them trade places - the player goes on, and that person steps back into the tile the player is leaving.";
  "It is how two people pass each other in a corridor, and it is the one way past a person that can never fail. Stepping ASIDE needs a free tile beside them, and the whole reason the player is stuck is that there is no free tile; trading places needs none, because the tile each one wants is the tile the other is giving up. So nobody can ever be walled in by people, however tightly they stand.";
  "It is only ever reached when there is no way around, so ordinary walking still goes politely around anybody in the way. Nobody is shoved aside for a shortcut.";
  "It is only ever a STRANGER who is traded with. The way through is worked out with the player's own line left standing, so a follower is never somebody the player steps onto - a line is passed by backing it down its own trail, in the order it was walked, which trading places would destroy.";
  "With a line behind, the person traded with is left in the tile the front of the line is about to walk into, and the line pays the same trade again at every member on the way past. That is what makes this safe with a line where it once was not: the stranger is not sent to a tile two people want, they are handed one place further back at each of them and come out behind the whole line.";
  let npc = g_coordinates_npc_standing(g, to);
  let empty = null_is(npc);
  if (empty) {
    return false;
  }
  let tile = g_coordinates_tile(from);
  app_g_npc_move(npc, tile, 0);
  return true;
}
