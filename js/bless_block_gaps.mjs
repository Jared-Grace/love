import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_measures } from "./bless_block_measures.mjs";
import { property_get } from "./property_get.mjs";
import { range } from "./range.mjs";
import { list_get } from "./list_get.mjs";
import { add } from "./add.mjs";
import { bless_building } from "./bless_building.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
import { subtract } from "./subtract.mjs";
export function bless_block_gaps(x, y) {
  arguments_assert(arguments, 2);
  let measures = bless_block_measures();
  let depth = property_get(measures, "depth");
  let gap = property_get(measures, "gap");
  let count = property_get(measures, "count");
  let cycle = property_get(measures, "cycle");
  let widths = property_get(measures, "widths");
  let offsets = property_get(measures, "offsets");
  let span = property_get(measures, "span");
  let indexes = range(count);
  function building_x(index) {
    let across = list_get(offsets, index);
    let at = add(x, across);
    return at;
  }
  function building_at(index) {
    let at = building_x(index);
    let families = list_get(cycle, index);
    let building = bless_building(at, y, families);
    return building;
  }
  let buildings = list_map(indexes, building_at);
  function building_tiles(building) {
    let tiles = property_get(building, "tiles");
    return tiles;
  }
  let tiles_each = list_map(buildings, building_tiles);
  let walls = list_flat(tiles_each);
  let gaps = subtract(count, 1);
  let r = {
    depth,
    gap,
    count,
    widths,
    span,
    building_x,
    buildings,
    walls,
    gaps,
  };
  return r;
}
