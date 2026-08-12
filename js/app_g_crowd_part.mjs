import { property_get } from "./property_get.mjs";
import { g_coordinates_walkable_index } from "./g_coordinates_walkable_index.mjs";
import { g_coordinates_index } from "./g_coordinates_index.mjs";
import { g_path_steps } from "./g_path_steps.mjs";
import { g_coordinates_npc_standing } from "./g_coordinates_npc_standing.mjs";
import { null_is } from "./null_is.mjs";
import { g_direction } from "./g_direction.mjs";
import { g_coordinates_aside } from "./g_coordinates_aside.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_set } from "./property_set.mjs";
import { g_ripple_delay_seconds } from "./g_ripple_delay_seconds.mjs";
import { g_coordinates_tile } from "./g_coordinates_tile.mjs";
import { app_g_npc_move } from "./app_g_npc_move.mjs";
import { each_index } from "./each_index.mjs";
export function app_g_crowd_part(g, path) {
  "everybody standing on the way the player is about to walk steps aside, so the way opens ahead of them like a crowd making room.";
  "A crowd standing across the way, each of them stepping to their nearer side, leaves a lane straight down the middle - the sea parting. Each one further along the way waits a little longer than the one before, so the opening runs away from the player as a wave instead of the whole crowd twitching at once.";
  "It is asked before every walk and costs nothing on almost all of them, because a way that goes AROUND people has nobody standing on it and the loop finds no-one. It is only ever the way THROUGH that has anybody to move.";
  "Two sets of tiles are kept clear of the people stepping aside: the way itself, so nobody steps out of the walker's path and straight back into it further along, and every tile already given to somebody else this parting, so two people are never sent to one tile. A tile somebody VACATES is not given away either - it costs one tile of room and it means the parting never has to be worked out in an order.";
  "Somebody too hemmed in to have anywhere to go simply stays, and is passed by trading places when the walker reaches them. That is what makes this safe to keep simple: it never has to succeed, so it needs no undoing, no going in rounds, and no way of noticing that two people are each waiting for the other.";
  let coordinates = property_get(g, "coordinates");
  let npcs = property_get(g, "npcs");
  let free_index = g_coordinates_walkable_index(coordinates, npcs);
  let kept_index = g_coordinates_index(path);
  let steps = g_path_steps(path);
  function part(step, index) {
    let from = property_get(step, "from");
    let to = property_get(step, "to");
    let npc = g_coordinates_npc_standing(g, to);
    let empty = null_is(npc);
    if (empty) {
      return;
    }
    let direction = g_direction(from, to);
    let aside = g_coordinates_aside(free_index, kept_index, to, direction);
    let nowhere = null_is(aside);
    if (nowhere) {
      return;
    }
    let key = g_coordinates_key(aside);
    property_set(kept_index, key, aside);
    let delay = g_ripple_delay_seconds(index);
    let tile = g_coordinates_tile(aside);
    app_g_npc_move(npc, tile, delay);
  }
  each_index(steps, part);
}
