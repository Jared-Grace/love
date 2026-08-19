import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_gaps } from "./bless_block_gaps.mjs";
import { property_get } from "./property_get.mjs";
import { range } from "./range.mjs";
import { add } from "./add.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
export function bless_block_alley_tiles(x, y) {
  arguments_assert(arguments, 2);
  let r = bless_block_gaps(x, y);
  let gaps = property_get(r, "gaps");
  let walls = property_get(r, "walls");
  let buildings = property_get(r, "buildings");
  let building_x = property_get(r, "building_x");
  let stride = property_get(r, "stride");
  let count = property_get(r, "count");
  let gap = property_get(r, "gap");
  let depth = property_get(r, "depth");
  let width = property_get(r, "width");
  let indexes_gap = range(gaps);
  function alley_tiles(index) {
    let at = building_x(index);
    let alley_x = add(at, width);
    let tiles = bless_tiles_rectangle(alley_x, y, gap, depth);
    return tiles;
  }
  let r2 = {
    walls,
    buildings,
    stride,
    count,
    gap,
    depth,
    indexes_gap,
    alley_tiles,
  };
  return r2;
}
