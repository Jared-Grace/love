import { arguments_assert } from "./arguments_assert.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { property_get } from "./property_get.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { property_equals } from "./property_equals.mjs";
import { and } from "./and.mjs";
import { less_than } from "./less_than.mjs";
export function bless_building_window_is({
  x,
  y_top,
  width,
  storeys,
  y_front,
  slab,
  families,
  columns,
}) {
  "Lays out one building's roof tiles and face tiles, and hands back the two tests that say which face tile is a doorway and which is a window.";
  arguments_assert(arguments, 1);
  let roof = bless_tiles_rectangle(x, y_top, width, 1);
  let y_walls = add(y_top, 1);
  let face = bless_tiles_rectangle(x, y_walls, width, storeys);
  let y_upper = subtract(y_front, 1);
  let middle = divide_floor(slab, 2);
  let upstairs = subtract(families, columns);
  function column_middle_is(tile) {
    let tile_x = property_get(tile, "x");
    let across = subtract(tile_x, x);
    let within = modulo(across, slab);
    let centred = equal(within, middle);
    return centred;
  }
  function tile_column(tile) {
    let tile_x = property_get(tile, "x");
    let across = subtract(tile_x, x);
    let column = divide_floor(across, slab);
    return column;
  }
  function door_is(tile) {
    let ground = property_equals(tile, "y", y_front);
    let centred = column_middle_is(tile);
    let opening = and(ground, centred);
    return opening;
  }
  function window_is(tile) {
    let above = property_equals(tile, "y", y_upper);
    let centred = column_middle_is(tile);
    let column = tile_column(tile);
    let lived_in = less_than(column, upstairs);
    let placed = and(above, centred);
    let glazed = and(placed, lived_in);
    return glazed;
  }
  let r = {
    roof,
    face,
    door_is,
    window_is,
  };
  return r;
}
