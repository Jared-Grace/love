import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_road_crossing } from "./bless_road_crossing.mjs";
import { g_coordinates_index } from "./g_coordinates_index.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export function bless_blocks_road_shut_keys(blocks) {
  arguments_assert(arguments, 1);
  ("Every square of road on the street that a person on foot may NOT walk on, gathered from");
  ("every block into one lookup - which is all of the road except the crossings.");
  ("It is the road MINUS the crossing rather than a list of its own, because the two have to");
  ("agree square for square. Written down separately they would be two answers to where the");
  ("road is, and the day they differ a crossing has a shut square painted in the middle of");
  ("it, or an open square of tarmac sits somewhere with no paint on it and nobody could see");
  ("why a person kept walking out there.");
  ("Shut is the honest word rather than solid. A wall is solid and nothing may pass; the road");
  ("is a place a car may be and a person may not, and the reason it is closed is a rule");
  ("rather than a thing standing in the way.");
  ("Kept as a lookup of keys rather than a list, because it is asked about one square at a");
  ("time - is THIS the square somebody wants to step on - and the whole reason for building");
  ("it up front is that the asking happens on every step of every walk.");
  let keys = {};
  function block_note(block) {
    let road = property_get(block, "road");
    let crossing = bless_road_crossing(road);
    let open = g_coordinates_index(crossing);
    function tile_note(tile) {
      let key = g_coordinates_key(tile);
      let crossable = property_exists(open, key);
      if (crossable) {
        return;
      }
      property_set(keys, key, true);
    }
    each(road, tile_note);
  }
  each(blocks, block_note);
  return keys;
}
