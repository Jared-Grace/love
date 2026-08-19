import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_alley_tiles } from "./bless_block_alley_tiles.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
export function bless_block_alleys(x, y) {
  arguments_assert(arguments, 2);
  let r = bless_block_alley_tiles(x, y);
  let alley_tiles = property_get(r, "alley_tiles");
  let indexes_gap = property_get(r, "indexes_gap");
  let depth = property_get(r, "depth");
  let gap = property_get(r, "gap");
  let count = property_get(r, "count");
  let stride = property_get(r, "stride");
  let buildings = property_get(r, "buildings");
  let walls = property_get(r, "walls");
  let alleys_each = list_map(indexes_gap, alley_tiles);
  let alleys = list_flat(alleys_each);
  let r2 = {
    depth,
    gap,
    count,
    stride,
    buildings,
    walls,
    alleys,
  };
  return r2;
}
