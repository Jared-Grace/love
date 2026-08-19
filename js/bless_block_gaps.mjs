import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_shape } from "./bless_building_shape.mjs";
import { property_get } from "./property_get.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { add } from "./add.mjs";
import { range } from "./range.mjs";
import { multiply } from "./multiply.mjs";
import { bless_building } from "./bless_building.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
import { subtract } from "./subtract.mjs";
export function bless_block_gaps(x, y) {
  arguments_assert(arguments, 2);
  let shape = bless_building_shape();
  let width = property_get(shape, "width");
  let depth = property_get(shape, "depth");
  let gap = property_get(shape, "gap");
  let sizes = bless_place_sizes();
  let count = property_get(sizes, "block");
  let stride = add(width, gap);
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
