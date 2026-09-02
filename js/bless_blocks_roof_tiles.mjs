import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map } from "./list_map.mjs";
export function bless_blocks_roof_tiles(blocks) {
  arguments_assert(arguments, 1);
  ("Every square of ROOF on the street, gathered from every building of every block.");
  ("The celebration washes a finished house white, and a roof is not a floor - it is what is over the top one. Washed the same white as the walls the whole house comes out as one flat slab and the player cannot see how tall it is; washed darker, the line between the front of the house and the top of it survives the light, and a two-storey house still reads as two floors under a roof at the moment it is being celebrated.");
  ("Asked of the BLOCKS rather than carried on each tile. The lists a celebration is handed are plain coordinates and always have been; a coordinate that knew what part of a house it was would have to be made that way everywhere ground is worked out, and would go quietly stale the first time a roof moved.");
  function block_roofs(block) {
    let buildings = property_get(block, "buildings");
    let roofs = list_map_property(buildings, "roof");
    let here = list_concat_multiple(roofs);
    return here;
  }
  let per_block = list_map(blocks, block_roofs);
  let tiles = list_concat_multiple(per_block);
  return tiles;
}
