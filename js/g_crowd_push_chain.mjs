import { g_crowd_push_most } from "./g_crowd_push_most.mjs";
import { list_add } from "./list_add.mjs";
import { g_coordinates_toward } from "./g_coordinates_toward.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists } from "./property_exists.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function g_crowd_push_chain(
  land_index,
  npc_index,
  kept_index,
  tile,
  side,
) {
  "the run of people who would all have to shuffle one tile this way for the tile at the head of the run to be emptied - or nothing, when shuffling that way runs into something that cannot give.";
  "The run starts with the person in the way and goes outward, person after person, until it reaches somewhere a person can stand. That last free tile is what the whole run is looking for: the person at the far end steps into it, the one before them steps into the tile just vacated, and so on back to the head - so a crowd standing shoulder to shoulder opens with one shuffle rather than needing anybody to be pushed twice.";
  "Three things end the run with no answer. Water or the edge of the map, because nobody can stand there. A tile being kept clear, which is the way the walker is about to take - shuffling somebody INTO the way would only move the blockage. And a run longer than a crowd is expected to be, which stops the looking rather than the moving.";
  let chain = [];
  let at = tile;
  let most = g_crowd_push_most();
  for (let index = 0; less_than(index, most); index++) {
    list_add(chain, at);
    let next = g_coordinates_toward(at, side);
    let key = g_coordinates_key(next);
    let kept = property_exists(kept_index, key);
    if (kept) {
      return null;
    }
    let land = property_exists(land_index, key);
    if (not(land)) {
      return null;
    }
    let occupied = property_exists(npc_index, key);
    if (not(occupied)) {
      return chain;
    }
    at = next;
  }
  return null;
}
