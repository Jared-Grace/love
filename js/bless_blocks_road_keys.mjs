import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export function bless_blocks_road_keys(blocks) {
  arguments_assert(arguments, 1);
  ("Every square of every road in the world, written as a lookup rather than a list.");
  ("Asked so that somebody about to take a step can find out whether the square in front of");
  ("them is road, and find out in one reading rather than by searching a couple of hundred");
  ("squares. A step is taken by everybody on the street every second or so, so the difference");
  ("between a lookup and a search here is the difference between a street that walks and one");
  ("that stutters.");
  ("Built ONCE, from the blocks, and kept with the world. It is a second copy of something");
  ("the world already holds, which is normally the thing to avoid - the excuse is that it is");
  ("made in the same breath as the thing it copies and never afterwards, so the two cannot");
  ("drift apart. There is no way to add a road to a block once the world is built.");
  ("Every block's road together in one lookup and not one lookup per block, because the");
  ("question being asked is never about a particular street. It is whether this square is");
  ("road, and a person standing near where two blocks meet is near two of them.");
  let keys = {};
  function block_note(block) {
    let road = property_get(block, "road");
    function tile_note(tile) {
      let key = g_coordinates_key(tile);
      property_set(keys, key, true);
    }
    each(road, tile_note);
  }
  each(blocks, block_note);
  return keys;
}
