import { arguments_assert } from "./arguments_assert.mjs";
import { bless_place_done_is } from "./bless_place_done_is.mjs";
import { property_get } from "./property_get.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { not } from "./not.mjs";
import { bless_building_family_tiles } from "./bless_building_family_tiles.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function bless_blessed_building_tiles(blessed, building, number) {
  arguments_assert(arguments, 3);
  ("Which ground of one building should be lit - the whole of it once the building is");
  ("finished, and one slab for each family inside it that is finished so far. A slab is the");
  ("share of the front one family owns, and the roof behind it, three squares across, so a");
  ("house with two of its three families done is lit two thirds across, readable from the far");
  ("pavement.");
  ("The finished building returns EARLY instead of adding its own ground to its households'.");
  ("The lights are see-through, so a tile carrying two of them is brighter than a tile");
  ("carrying one, and a finished house would read as a different colour from the three");
  ("finished thirds it is made of. Exactly one square per tile is the rule, and returning");
  ("early is how it is kept by construction rather than by remembering to check.");
  ("Asking about the whole building first matters for a second reason. A prayer said at the");
  ("building rung names the building and nothing under it, so its households were never");
  ("written down anywhere - looked at from below only, a house blessed outright would show");
  ("as three dark thirds.");
  let whole = bless_place_done_is(blessed, "building", number);
  if (whole) {
    let tiles_all = property_get(building, "tiles");
    return tiles_all;
  }
  let households = bless_place_members("building", number);
  function household_tiles(household, index) {
    let done = bless_place_done_is(blessed, "family", household);
    let undone = not(done);
    if (undone) {
      let none = [];
      return none;
    }
    let column = bless_building_family_tiles(building, index);
    return column;
  }
  let columns = list_map_index(households, household_tiles);
  let tiles = list_concat_multiple(columns);
  return tiles;
}
