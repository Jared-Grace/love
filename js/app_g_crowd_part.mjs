import { list_copy } from "./list_copy.mjs";
import { list_add } from "./list_add.mjs";
import { g_crowd_push_route } from "./g_crowd_push_route.mjs";
import { property_get } from "./property_get.mjs";
import { g_coordinates_land_index } from "./g_coordinates_land_index.mjs";
import { g_coordinates_index } from "./g_coordinates_index.mjs";
import { g_path_steps } from "./g_path_steps.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists } from "./property_exists.mjs";
import { g_direction } from "./g_direction.mjs";
import { null_is } from "./null_is.mjs";
import { g_ripple_delay_seconds } from "./g_ripple_delay_seconds.mjs";
import { app_g_crowd_push_shift } from "./app_g_crowd_push_shift.mjs";
import { each_index } from "./each_index.mjs";
import { not } from "./not.mjs";
export function app_g_crowd_part(g, path, still) {
  "the crowd standing on the way the player is about to walk opens, so the way is clear before they set off.";
  "Each person in the way shuffles to one side, and where they are standing shoulder to shoulder the whole run of them shuffles together - so a crowd several deep does not merely let one person through, it SPLITS, and a lane opens down the middle of it. Each opening further along the way waits a little longer than the one before it, so the lane runs away from the player like a wave rather than the whole crowd twitching at once.";
  "It is asked before every walk and costs nothing on almost all of them, because a way that goes AROUND people has nobody standing on it and the loop finds no-one. It is only ever the way THROUGH that has anybody to move.";
  "The way itself is kept clear of everybody who moves, so nobody steps out of the walker's path and straight back into it further along. Where everybody is standing is kept up to date as the openings are made, so two people are never sent to one tile.";
  "The person who was TAPPED is kept still along with the way - handed in as the one to leave standing, or nothing when the tap was on open ground. Walking up to somebody means finding them where they were tapped, so an opening that shuffled that very person out of reach would answer the tap by walking to an empty tile.";
  "A crowd too tightly packed to open - hemmed in by water, by the edge of the map, or simply deeper than a crowd is expected to be - is left standing, and the walker passes those people one at a time by trading places with them. That is what keeps this simple: it never has to succeed, so it needs no undoing, no going in rounds, and no way of noticing that two people are each waiting for the other.";
  let coordinates = property_get(g, "coordinates");
  let npcs = property_get(g, "npcs");
  let land_index = g_coordinates_land_index(coordinates);
  let npc_index = g_coordinates_index(npcs);
  let kept = list_copy(path);
  let nobody = null_is(still);
  let tapped = not(nobody);
  if (tapped) {
    list_add(kept, still);
  }
  let kept_index = g_coordinates_index(kept);
  let steps = g_path_steps(path);
  function part(step, index) {
    let from = property_get(step, "from");
    let to = property_get(step, "to");
    let key = g_coordinates_key(to);
    let occupied = property_exists(npc_index, key);
    if (not(occupied)) {
      return;
    }
    let direction = g_direction(from, to);
    let route = g_crowd_push_route(
      land_index,
      npc_index,
      kept_index,
      to,
      direction,
    );
    let stuck = null_is(route);
    if (stuck) {
      return;
    }
    let delay = g_ripple_delay_seconds(index);
    app_g_crowd_push_shift(npc_index, route, delay);
  }
  each_index(steps, part);
}
