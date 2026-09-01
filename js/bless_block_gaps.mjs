import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_measures } from "./bless_block_measures.mjs";
import { property_get } from "./property_get.mjs";
import { range } from "./range.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { bless_building } from "./bless_building.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
import { subtract } from "./subtract.mjs";
export function bless_block_gaps(x, y) {
  arguments_assert(arguments, 2);
  let measures = bless_block_measures();
  let width = property_get(measures, "width");
  let depth = property_get(measures, "depth");
  let gap = property_get(measures, "gap");
  let count = property_get(measures, "count");
  let stride = property_get(measures, "stride");
  let indexes = range(count);
  function building_x(index) {
    let across = multiply(index, stride);
    let at = add(x, across);
    return at;
  }
  function building_at(index) {
    let at = building_x(index);
    let building = bless_building(at, y);
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
    width,
    depth,
    gap,
    count,
    stride,
    building_x,
    buildings,
    walls,
    gaps,
  };
  return r;
}
