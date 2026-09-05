import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_gaps } from "./bless_block_gaps.mjs";
import { property_get } from "./property_get.mjs";
import { range } from "./range.mjs";
import { list_get } from "./list_get.mjs";
import { add } from "./add.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
export function bless_block_alley_tiles(x, y, block) {
  "Works out the alleys on one block: how many gaps there are between the buildings, and, for any one of them, the tiles it covers - which starts where its building ends and runs the width of the gap.";
  arguments_assert(arguments, 3);
  let r = bless_block_gaps(x, y, block);
  let gaps = property_get(r, "gaps");
  let walls = property_get(r, "walls");
  let buildings = property_get(r, "buildings");
  let building_x = property_get(r, "building_x");
  let span = property_get(r, "span");
  let count = property_get(r, "count");
  let alley_widths = property_get(r, "alley_widths");
  let depth = property_get(r, "depth");
  let widths = property_get(r, "widths");
  let indexes_gap = range(gaps);
  function alley_tiles(index) {
    let at = building_x(index);
    let width = list_get(widths, index);
    let alley_x = add(at, width);
    let wide = list_get(alley_widths, index);
    let tiles = bless_tiles_rectangle(alley_x, y, wide, depth);
    return tiles;
  }
  let r2 = {
    walls,
    buildings,
    span,
    count,
    depth,
    indexes_gap,
    alley_tiles,
  };
  return r2;
}
