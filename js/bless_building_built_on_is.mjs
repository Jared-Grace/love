import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { bless_building_window_is } from "./bless_building_window_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { list_concat } from "./list_concat.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { and } from "./and.mjs";
export function bless_building_built_on_is(
  y_flush,
  set_back,
  storeys,
  x,
  width,
  slab,
  families,
  columns,
  y,
  depth,
) {
  "Works out where one building stands from its set back and storeys, and hands back its roof, doorways, windows, walls, footprint and the test for whether a tile falls within its height.";
  arguments_assert(arguments, 10);
  let y_front = subtract(y_flush, set_back);
  let y_top = subtract(y_front, storeys);
  let r = bless_building_window_is(
    x,
    y_top,
    width,
    storeys,
    y_front,
    slab,
    families,
    columns,
  );
  let window_is = property_get(r, "window_is");
  let door_is = property_get(r, "door_is");
  let face = property_get(r, "face");
  let roof = property_get(r, "roof");
  let doorways = list_filter(face, door_is);
  let windows = list_filter(face, window_is);
  let walls = list_filter_not(face, door_is);
  let solid = list_concat(roof, walls);
  let built = list_concat(solid, doorways);
  let slot = bless_tiles_rectangle(x, y, width, depth);
  function built_on_is(tile) {
    let tile_y = property_get(tile, "y");
    let below = greater_than_equal(tile_y, y_top);
    let over = less_than_equal(tile_y, y_front);
    let within = and(below, over);
    return within;
  }
  let r2 = {
    roof,
    doorways,
    windows,
    walls,
    built,
    slot,
    built_on_is,
  };
  return r2;
}
