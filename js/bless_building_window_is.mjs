import { property_in_list } from "./property_in_list.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map_property } from "./list_map_property.mjs";
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
  ("WHICH columns have somebody living above them is DRAWN, rather than always being the ones at the left-hand end. How many is fixed - one upstairs home for every family that does not fit on the ground - but taking them in order put the blank upper wall at the right-hand end of every house that had one, in every block alike, and a gap that lands in the same place every time reads as a window that failed to be drawn rather than as a floor with nobody home on that side. Drawn, the gap falls somewhere different from house to house and the row stops looking like a miscount.");
  ("It is free to be drawn for the same reason the set-back is: it moves no family, changes no count, and no record is ever read back through it. How MANY live upstairs may never be drawn that way, because that is what the windows are there to say.");
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
  function upper_middle_is(tile) {
    let above = property_equals(tile, "y", y_upper);
    let centred = column_middle_is(tile);
    let upper = and(above, centred);
    return upper;
  }
  let uppers = list_filter(face, upper_middle_is);
  let lived = list_shuffle_take(uppers, upstairs);
  let lived_x = list_map_property(lived, "x");
  function door_is(tile) {
    let ground = property_equals(tile, "y", y_front);
    let centred = column_middle_is(tile);
    let opening = and(ground, centred);
    return opening;
  }
  function window_is(tile) {
    let above = property_equals(tile, "y", y_upper);
    let lived_in = property_in_list(tile, "x", lived_x);
    let glazed = and(above, lived_in);
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
