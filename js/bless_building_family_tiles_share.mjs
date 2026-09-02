import { arguments_assert } from "./arguments_assert.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { bless_building_shape } from "./bless_building_shape.mjs";
import { property_get } from "./property_get.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { bless_building_family_tiles_tile_in_share } from "./bless_building_family_tiles_tile_in_share.mjs";
import { list_filter } from "./list_filter.mjs";
export function bless_building_family_tiles_share(
  doorways,
  column,
  building,
  x_door,
  upstairs,
  ground_is,
  tiles,
) {
  arguments_assert(arguments, 7);
  let y_front = list_get_property(doorways, column, "y");
  let shape = bless_building_shape();
  let slab = property_get(shape, "family_width");
  let storeys = property_get(building, "storeys");
  let reach = divide_floor(slab, 2);
  let x_least = subtract(x_door, reach);
  let x_most = add(x_door, reach);
  let y_top = subtract(y_front, storeys);
  let alone_is = greater_than_equal(column, upstairs);
  let tile_in_share = bless_building_family_tiles_tile_in_share(
    ground_is,
    alone_is,
    y_top,
    y_front,
    x_least,
    x_most,
  );
  let share = list_filter(tiles, tile_in_share);
  return share;
}
